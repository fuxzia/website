---
title: Installation • Magenta UI
meta:
  - name: installation
    content: magenta ui installation
code_vite: |
  import { defineConfig } from 'vite'
  import Vue from '@vitejs/plugin-vue'

  // https://vitejs.dev/config
  export default defineConfig({
    plugins: [Vue()],
    optimizeDeps: {
      include: ['feather-icons', 'prismjs'],
    }
  })
---

<script setup>
import {
  Code,
  Heading,
  Spacer,
  Text,
} from '@magenta-ui/vue'
</script>

<Heading size="lg">Installation</Heading>

<Text>Magenta UI is designed to be used with <strong>Vue 3</strong>.</Text>

<Heading size="md">
  Working with Vite
</Heading>

<Text>
  When working with Vite you must mark some Magenta UI depencies to be bundled by Vite. You do that by:
</Text>

<Code language="javascript">
  {{frontmatter.code_vite}}
</Code>
