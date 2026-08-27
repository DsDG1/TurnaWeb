import { spawn } from 'node:child_process'
import { createServer } from 'node:net'
import process from 'node:process'

const isWindows = process.platform === 'win32'
const npmCommand = isWindows ? 'npm.cmd' : 'npm'
const siteArgs = ['run', 'dev:site']

function preferredPort(value, fallback) {
  const port = Number(value || fallback)
  return Number.isInteger(port) && port > 0 && port <= 65535 ? port : fallback
}

function isPortAvailable(port) {
  return new Promise((resolve) => {
    const probe = createServer()

    probe.unref()
    probe.once('error', () => resolve(false))
    // Use the exact same address as both development servers. This avoids
    // localhost resolving to different IPv4/IPv6 listeners across tools.
    probe.listen({ host: '127.0.0.1', port }, () => {
      probe.close(() => resolve(true))
    })
  })
}

async function findAvailablePort(start, reserved = new Set()) {
  for (let port = start; port <= Math.min(start + 100, 65535); port += 1) {
    if (!reserved.has(port) && await isPortAvailable(port)) return port
  }

  throw new Error(`No available port found between ${start} and ${Math.min(start + 100, 65535)}`)
}

const sitePort = await findAvailablePort(preferredPort(process.env.SITE_DEV_PORT, 5173))
const docsPort = await findAvailablePort(
  preferredPort(process.env.DOCS_DEV_PORT, 5174),
  new Set([sitePort]),
)
const childEnv = {
  ...process.env,
  SITE_DEV_PORT: String(sitePort),
  DOCS_DEV_PORT: String(docsPort),
  TURNA_COMBINED_DEV: '1',
}

console.log(`Open the Turna site at http://127.0.0.1:${sitePort}/ (documentation is available at /docs/)`)

if (process.argv.length > 2) {
  siteArgs.push('--', ...process.argv.slice(2))
}

const services = [
  spawn(npmCommand, siteArgs, {
    stdio: 'inherit',
    detached: !isWindows,
    env: childEnv,
  }),
  spawn(npmCommand, ['run', 'docs:dev'], {
    stdio: 'inherit',
    detached: !isWindows,
    env: childEnv,
  }),
]

let stopping = false

function stopService(child, signal) {
  if (!child.pid || child.exitCode !== null) return

  if (isWindows) {
    child.kill(signal)
    return
  }

  try {
    process.kill(-child.pid, signal)
  } catch (error) {
    if (error?.code !== 'ESRCH') throw error
  }
}

function stopAll(signal = 'SIGTERM') {
  if (stopping) return
  stopping = true
  services.forEach((child) => stopService(child, signal))
}

for (const child of services) {
  child.on('error', (error) => {
    console.error(error)
    stopAll()
    process.exitCode = 1
  })

  child.on('exit', (code, signal) => {
    if (stopping) return
    stopAll()
    process.exitCode = signal ? 1 : (code ?? 1)
  })
}

process.on('SIGINT', () => stopAll('SIGINT'))
process.on('SIGTERM', () => stopAll('SIGTERM'))
