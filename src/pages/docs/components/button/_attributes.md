<script setup>
import { Button, Table, Text, Heading, Spacer, Code } from '@magenta-ui/vue'

const columns = [
  {
    key: 'attribute',
    label: 'Attribute',
    width: 200,
    fixed: true,
    sortable: true,
  },
  {
    key: 'description',
    label: 'Description',
    width: 130,
    sortable: true,
  },
  {
    key: 'description2',
    label: 'Description2',
  },
  {
    key: 'description3',
    label: 'Description3',
    width: 200,
    sortable: true,
    fixed: true,
  },
  {
    key: 'type',
    label: 'Type',
    width: 100,
    sortable: true,
  },
  {
    key: 'accepted',
    label: 'Accepted',
    width: 100,
  },
  {
    key: 'default',
    label: 'Default',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
]

const data = [
  {
    attribute: 'circle',
    description: 'Set button shape to circle.',
    description2: 'Set button shape to circle.',
    description3: 'Set button shape to circle.',
    type: 'boolean',
    accepted: '-',
    default: 'false',
  },
  {
    attribute: 'type',
    description: 'Set button shape to circle.',
    description2: 'Set button shape to circle.',
    description3: 'Set button shape to circle.',
    type: 'boolean',
    accepted: '-',
    default: 'false',
  },
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
    attribute: 'label',
    description: 'Button label.',
    description2: 'Button label.',
    description3: 'Button label.',
    type: 'string',
    accepted: '',
    default: '',
  },
  {
    attribute: 'label2',
    description: 'Button label.',
    description2: 'Button label.',
    description3: 'Button label.',
    type: 'string',
    accepted: '',
    default: '',
  },
]
</script>

<Spacer size="xxlg" />

<Heading size="md">
  Attributes
</Heading>

<Table :columns="columns" :data="data" hoverable bordered rounded selectable>
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
  <template #actions="{ item }">
    <Button size="sm" :data-id="item.id">Editar</Button>
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
