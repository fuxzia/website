<template>
this is a button page
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import {
  Avatar,
  AvatarGroup,
  Button,
  ButtonGroup,
  Code,
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  Grid,
  Heading,
  Input,
  InputPassword,
  Text,
  Spacer,
} from '@magenta-ui/vue'

export default defineComponent({
  components: {
    Avatar,
    AvatarGroup,
    Button,
    ButtonGroup,
    Code,
    Dropdown,
    DropdownMenu,
    DropdownMenuItem,
    Grid,
    Heading,
    Input,
    InputPassword,
    Text,
    Spacer,
  },
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const dropdownOpen = ref(false)

    setTimeout(() => {
      dropdownOpen.value = true
    }, 3000)

    const reset = () => {
      console.log('reset')
    }

    const submit = () => {
      console.log('submit')
    }

    const form = ref({ email: 'leandro@gmail.com' })
    const email = ref('email')
    const count = ref(0)
    const buttons = [
      {
        title: 'Primary buttons',
        outline: false,
        secondary: false,
        danger: false,
      },
      {
        title: 'Secondary buttons',
        outline: false,
        secondary: true,
        danger: false,
      },
      {
        title: 'Outline buttons',
        outline: true,
        secondary: false,
        danger: false,
      },
      {
        title: 'Danger buttons',
        outline: false,
        secondary: false,
        danger: true,
      },
    ]
    return { count, form, buttons, dropdownOpen, reset, submit, email }
  }
})
</script>

<style lang="scss" scoped>
.buttons-view {
  .buttons {
    margin: 60px 0;

    button {
      margin-right: 15px;
    }
  }
}
</style>
