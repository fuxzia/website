<script setup>
import { Table, Text, Heading, Spacer } from '@magenta-ui/vue'

const columns = [
  {
    key: 'event',
    label: 'Event',
    width: 200,
  },
  {
    key: 'description',
    label: 'Description',
  },
]

const data = [
  {
    event: '@click',
    description: 'Button default click.',
  },
]
</script>

<Spacer size="xxlg" />

<Heading size="md">
  Events
</Heading>

<Table :columns="columns" :data="data">
  <template #event="{ item }">
    {{ item.event }}
  </template>
</Table>
