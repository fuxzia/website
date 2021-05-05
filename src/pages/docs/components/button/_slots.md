<script setup>
import { Table, Text, Heading, Spacer } from '@magenta-ui/vue'

const columns = [
  {
    key: 'slot',
    label: 'Slot',
    width: 200,
  },
  {
    key: 'description',
    label: 'Description',
  },
]

const data = [
  {
    slot: 'default',
    description: 'Button default content or text.',
  },
]
</script>

<Spacer size="xxlg" />

<Heading size="md">
  Slots
</Heading>

<Table :columns="columns" :data="data">
  <template #slot="{ item }">
    {{ item.slot }}
  </template>
</Table>
