<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { useData } from 'vitepress'
import { copyText } from './copyText'

const { page } = useData()
const sources = import.meta.glob('../../**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const state = ref<'idle' | 'copied' | 'failed'>('idle')
let resetTimer: ReturnType<typeof setTimeout> | undefined

const source = computed(() => sources[`../../${page.value.relativePath}`] || '')
const label = computed(() => {
  if (state.value === 'copied') return '已复制全文'
  if (state.value === 'failed') return '复制失败'
  return '复制全文'
})

async function copyPage() {
  if (!source.value) return

  state.value = await copyText(source.value) ? 'copied' : 'failed'

  if (resetTimer) clearTimeout(resetTimer)
  resetTimer = setTimeout(() => { state.value = 'idle' }, 1800)
}

onBeforeUnmount(() => {
  if (resetTimer) clearTimeout(resetTimer)
})
</script>

<template>
  <div v-if="source" class="copy-page-source">
    <span>FORMAT / MARKDOWN · SCOPE / CURRENT PAGE</span>
    <button type="button" :class="{ copied: state === 'copied' }" @click="copyPage">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7V5.8C8 4.8 8.8 4 9.8 4h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H17M5.8 8h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8V9.8C4 8.8 4.8 8 5.8 8Z" />
      </svg>
      {{ label }}
    </button>
  </div>
</template>
