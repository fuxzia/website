<script setup>
import { Table, Text, Heading, Spacer, Code } from '@magenta-ui/vue'

const columns = [
  {
    key: 'attribute',
    label: 'Attribute',
    width: 200,
  },
  {
    key: 'description',
    label: 'Description',
    width: 130,
  },
  {
    key: 'description2',
    label: 'Description2',
  },
  {
    key: 'description3',
    label: 'Description3',
    width: 400,
  },
  {
    key: 'type',
    label: 'Type',
    fixed: true,
    width: 100,
  },
  {
    key: 'accepted',
    label: 'Accepted',
    fixed: true,
    width: 100,
  },
  {
    key: 'default',
    label: 'Default',
  },
]

const data = [
  {
    attribute: 'size',
    description: 'Button size.',
    description2: 'Button size.',
    description3: 'Button size.',
    type: 'string',
    accepted: 'sm - md - lg',
    default: 'md',
  },
  {
    attribute: 'circle',
    description: 'Set button shape to circle.',
    description2: 'Set button shape to circle.',
    description3: 'Set button shape to circle.',
    type: 'boolean',
    accepted: '-',
    default: 'false',
  },
]
</script>

<Spacer size="xxlg" />

<Heading size="md">
  Attributes
</Heading>

<Table :columns="columns" :data="data" :ellipsis="true">
  <template #attribute="{ item }">
    {{ item.attribute }}
  </template>
  <template #type="{ item }">
    <Text code :spacer-after="false">{{ item.type }}</Text>
  </template>
  <template #accepted="{ item }">
    <Text code :spacer-after="false">{{ item.accepted }}</Text>
  </template>
  <template #default="{ item }">
    <Text code :spacer-after="false">{{ item.default }}</Text>
  </template>
  <template #description3="{ item }">
    <pre>
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}</pre>
  </template>
</Table>
