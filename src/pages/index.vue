<template>
  <section class="buttons-view">

    <section>
      <Heading size="lg">Grid</Heading>

      <Spacer size="lg" />
      <Grid :columns="[2, 14, 1]">
        <Input
          icon="user"
          size="sm"
          label="Nome completo"
          placeholder="Bastião da Rocha"
        />
        <div />
        <Input
          icon="user"
          size="sm"
          label="Nome completo"
          placeholder="Bastião da Rocha"
        />
      </Grid>
      <Spacer size="lg" />

      <Heading size="lg">Form &amp; Inputs</Heading>

      <Spacer size="lg" />
      <div>
        <div style="width:100%">
          <Input
            icon="user"
            size="sm"
            label="Nome completo"
            placeholder="Bastião da Rocha"
            alignment="horizontal"
          />
          <Spacer size="lg" />
          <Input
            icon="user"
            label="Seguradora XYZ"
            placeholder="Bastião da Rocha"
            alignment="horizontal"
          />
          <Spacer size="lg" />
          <Input
            v-model="email"
            icon="mail"
            size="lg"
            label="Email cadastrado"
            placeholder="email@example.com"
            alignment="horizontal"
          />
          <Spacer size="lg" />
        </div>
        
        <Spacer size="lg" />
        <div style="width:100%">
          <Input placeholder="Just input, no label"/>
          <Input
            v-model="email"
            icon="user"
            size="sm"
            label="Usuário"
            placeholder="email@example.com"
            description="This is an error message."
            alignment="horizontal"
            :labelWidth="333"
          />
          <Input
            v-model="email"
            icon="user"
            size="lg"
            label="Usuário"
            placeholder="email@example.com"
            description="This is an error message."
            alignment="horizontal"
          />
          <Input
            v-model="email"
            icon="user"
            label="Usuário"
            status="error"
            placeholder="email@example.com"
            description="This is an error message."
          />
          <Input
            v-model="email"
            icon="user"
            label="Usuário"
            status="success"
            placeholder="email@example.com"
            description="This is a success message."
          />
          <Input
            v-model="email"
            icon="archive"
            label="Usuário"
            status="warning"
            placeholder="email@example.com"
            description="This is a warning message."
          />
          <Input
            v-model="email"
            validate="required|email"
            icon="box"
            label="Input disabled"
            disabled
            placeholder="email@example.com"
          />
          <Input
            v-model="form.email"
            validate="required|email"
            label="Password"
            description="Must be 6 caracters minimum."
          />
          <InputPassword
            v-model="form.password"
            validate="required|min:6"
            placeholder="Thats a placeholder"
            label="Confirm password"
          />
          <Button label="Reset" @click="reset" />
          <Button label="Submit form" @click="submit" />
        </div>
        <Spacer size="sm"/>

      </div>

      <Heading size="lg">Button Group</Heading>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-even; align-items: flex-start;flex-direction: column">
        <ButtonGroup>
          <Button label="Previous page" icon="arrow-left" />
          <Button label="Refresh" />
          <Button label="Do something" />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button label="Previous page" icon="arrow-left" />
          <Button label="Refresh" />
          <Button label="Do something" />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button size="sm" label="Previous page" icon="arrow-left" />
          <Button size="sm" label="Do something" />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button size="sm" label="Previous page" icon="arrow-left" />
          <Button size="sm" label="Reload page" loading outline />
          <Button size="sm" label="Do something" />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button size="sm" label="Previous page" icon="arrow-left" outline />
          <Button size="sm" label="Reload page" outline />
          <Button size="sm" label="Do something" outline />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button size="sm" label="Previous page" icon="arrow-left" outline />
          <Button size="sm" label="Reload page" loading outline />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button size="sm" label="Previous page" secondary icon="arrow-left" />
          <Button size="sm" label="Reload page" loading secondary />
          <Button size="sm" label="Do something" secondary />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button size="sm" outline icon="archive" />
          <Button size="sm" outline icon="bell" />
          <Button size="sm" outline icon="calendar" />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button size="sm" outline icon="archive" />
          <Button size="sm" outline icon="calendar" />
        </ButtonGroup>
        <Spacer size="sm"/>

        <ButtonGroup>
          <Button size="sm" outline icon="archive" />
          <Button size="sm" outline icon="calendar" />
          <Button size="sm" outline icon="arrow-right" />
          <Button size="sm" outline icon="bluetooth" />
          <Button size="sm" outline icon="bell" />
        </ButtonGroup>
        <Spacer size="sm"/>
      </div>

      <Heading size="lg">Dropdowns</Heading>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Dropdown :open="true">
          <Button label="Dropdown button" />
          <DropdownMenu>
            <DropdownMenuItem header>
              <Heading size="sm">Olá, Leandro!</Heading>
              <Text muted :spacerAfter="false">leandrowkz@gmail.com</Text>
            </DropdownMenuItem>
            <DropdownMenuItem separator />
            <DropdownMenuItem icon="log-out" label="Sign out" />
            <DropdownMenuItem icon="archive" label="Texto bem grande" />
            <DropdownMenuItem icon="box" label="Texto mais grande" />
          </DropdownMenu>
        </Dropdown>

        <Dropdown :open="dropdownOpen">
          <Button label="Dropdown button" />
          <DropdownMenu>
            <DropdownMenuItem icon="settings" label="Configurações" />
            <DropdownMenuItem icon="log-out" label="Sign out" />
            <DropdownMenuItem icon="archive" label="Texto bem grande" />
            <DropdownMenuItem separator />
            <DropdownMenuItem icon="box" label="Texto mais grande" />
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <Button label="Dropdown button" outline/>
          <DropdownMenu>
            <DropdownMenuItem icon="settings" label="Configurações" />
            <DropdownMenuItem icon="log-out" label="Sign out" />
            <DropdownMenuItem icon="archive" label="Texto bem grande, sabe" />
            <DropdownMenuItem icon="box" label="Texto mais grande ainda com icon" />
          </DropdownMenu>
        </Dropdown>

        <Dropdown trigger="hover" position="bottom-right">
          <Button label="Dropdown button" size="sm" outline/>
          <DropdownMenu>
            <DropdownMenuItem icon="settings" label="Configurações" />
            <DropdownMenuItem icon="log-out" label="Sign out" />
            <DropdownMenuItem icon="archive" label="Texto bem grande, sabe" />
            <DropdownMenuItem separator />
            <DropdownMenuItem icon="box" label="Texto mais grande ainda com icon" />
          </DropdownMenu>
        </Dropdown>

        <Dropdown position="bottom-right">
          <Button label="Dropdown right" />
          <DropdownMenu>
            <DropdownMenuItem icon="coffee" label="Make a coffee" />
            <DropdownMenuItem icon="dollar-sign" label="Pay-me a bill!" />
          </DropdownMenu>
        </Dropdown>
      </div>

      <Heading size="lg">Avatar Group</Heading>

      <Spacer size="lg" />
      <AvatarGroup>
        <Avatar badge="red" :badgeNumber="1" />
        <Avatar badge="gray" :badgeNumber="99" />
        <Avatar icon="download" badge="green" :badgeNumber="14" />
        <Avatar badge="gray" :badgeNumber="14">LM</Avatar>
        <Avatar badge="red" />
      </AvatarGroup>

      <Heading size="lg">Avatars</Heading>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xlg" />
        <Avatar size="xxlg" />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xlg" />
        <Avatar size="xxlg" />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" square />
        <Avatar size="md" square />
        <Avatar size="lg" square />
        <Avatar size="xlg" square />
        <Avatar size="xxlg" square />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square />
        <Avatar size="md"  square />
        <Avatar size="lg"  square />
        <Avatar size="xlg" square />
        <Avatar size="xxlg" square />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square>US</Avatar>
        <Avatar size="md"  square>US</Avatar>
        <Avatar size="lg"  square>US</Avatar>
        <Avatar size="xlg" square>US</Avatar>
        <Avatar size="xxlg" square>US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" >US</Avatar>
        <Avatar size="md" >US</Avatar>
        <Avatar size="lg" >US</Avatar>
        <Avatar size="xlg">US</Avatar>
        <Avatar size="xxlg">US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" badge="red">US</Avatar>
        <Avatar size="md" badge="green">US</Avatar>
        <Avatar size="lg" badge="gray">US</Avatar>
        <Avatar size="xlg" badge="red">US</Avatar>
        <Avatar size="xxlg" badge="green">US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm" badge="red" :badgeNumber="99">US</Avatar>
        <Avatar size="md" badge="green" :badgeNumber="7">US</Avatar>
        <Avatar size="lg" badge="gray" :badgeNumber="77">US</Avatar>
        <Avatar size="xlg" badge="red" :badgeNumber="84">US</Avatar>
        <Avatar size="xxlg" badge="green" :badgeNumber="25">US</Avatar>
      </div>
      
      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square badge="red" >US</Avatar>
        <Avatar size="md"  square badge="green">US</Avatar>
        <Avatar size="lg"  square badge="gray">US</Avatar>
        <Avatar size="xlg" square  badge="red">US</Avatar>
        <Avatar size="xxlg" square  badge="green">US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square badge="red" >US</Avatar>
        <Avatar size="md"  square badge="green">US</Avatar>
        <Avatar size="lg"  square badge="gray">US</Avatar>
        <Avatar size="xlg" square  badge="red">US</Avatar>
        <Avatar size="xxlg" square  badge="green">US</Avatar>
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  square badge="red" :badgeNumber="99" />
        <Avatar size="md"  square badge="green" :badgeNumber="7" />
        <Avatar size="lg"  square badge="gray" :badgeNumber="77" />
        <Avatar size="xlg" square  badge="red" :badgeNumber="84" />
        <Avatar size="xxlg" square  badge="green" :badgeNumber="25" />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  badge="red" :badgeNumber="99" />
        <Avatar size="md"  badge="green" :badgeNumber="7" />
        <Avatar size="lg"  badge="gray" :badgeNumber="77" />
        <Avatar size="xlg"  badge="red" :badgeNumber="84" />
        <Avatar size="xxlg"  badge="green" :badgeNumber="25" />
      </div>

      <Spacer size="lg" />
      <div style="display: flex; justify-content: space-between; align-items: center">
        <Avatar size="sm"  badge="red" />
        <Avatar size="md"  badge="green"/>
        <Avatar size="lg"  badge="gray" />
        <Avatar size="xlg"  badge="red" />
        <Avatar size="xxlg"  badge="green" />
      </div>

    </section>

    <section>

      <Heading size="lg">Typography</Heading>
      <Spacer size="lg" />
      
      <div>
        <Heading>Text default</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora animi quisquam illo sed suscipit voluptate similique? Tempore explicabo ut itaque inventore facilis cumque, quisquam maxime magnam tempora ab impedit?</Text>
      </div>

      <div>
        <Heading>Text with no spacer after</Heading>
        <Text :spacerAfter="false">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora animi quisquam illo sed suscipit voluptate similique? Tempore explicabo ut itaque inventore facilis cumque, quisquam maxime magnam tempora ab impedit?</Text>
      </div>
      
      <div>
        <Heading>Text lg</Heading>
        <Text size="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet consequuntur vitae dolorem est rerum at necessitatibus aspernatur? Vitae quisquam quidem incidunt dolor veritatis ab omnis, dicta repudiandae porro quae.</Text>
      </div>

      <div>
        <Heading>Text xlg</Heading>
        <Text size="xlg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet consequuntur vitae dolorem est rerum at necessitatibus aspernatur? Vitae quisquam quidem incidunt dolor veritatis ab omnis, dicta repudiandae porro quae.</Text>
      </div>

      <div>
        <Heading>Text small</Heading>
        <Text size="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet consequuntur vitae dolorem est rerum at necessitatibus aspernatur? Vitae quisquam quidem incidunt dolor veritatis ab omnis, dicta repudiandae porro quae.</Text>
      </div>
      
      <div>
        <Heading>Text muted</Heading>
        <Text muted>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text italic</Heading>
        <Text italic>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text nowrap</Heading>
        <Text nowrap>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text ellipsis</Heading>
        <Text ellipsis>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text danger</Heading>
        <Text danger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text success</Heading>
        <Text success>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text primary</Heading>
        <Text primary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text bold</Heading>
        <Text bold>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam perferendis qui neque atque perspiciatis sed, sit numquam illum officiis fuga, adipisci amet eius vero dicta culpa laboriosam doloribus facere?</Text>
      </div>

      <div>
        <Heading>Text maxLines="5"</Heading>
        <Text :maxLines="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis possimus, debitis, repellat pariatur accusantium necessitatibus repudiandae placeat ratione nostrum quibusdam incidunt accusamus velit? Deserunt magni vero maiores qui fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa delectus possimus vitae, animi quod reiciendis soluta nesciunt et! Deserunt necessitatibus quibusdam explicabo beatae repudiandae dolorum omnis fuga! Praesentium, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, cumque aliquam porro asperiores harum minus debitis illum numquam architecto eum blanditiis excepturi voluptas repellat vitae? Accusamus fugit hic velit culpa.</Text>
      </div>

      <div>
        <Heading>Text code</Heading>
        <Text :maxLines="5" code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis possimus, debitis, repellat pariatur accusantium necessitatibus repudiandae placeat ratione nostrum quibusdam incidunt accusamus velit? Deserunt magni vero maiores qui fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa delectus possimus vitae, animi quod reiciendis soluta nesciunt et! Deserunt necessitatibus quibusdam explicabo beatae repudiandae dolorum omnis fuga! Praesentium, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, cumque aliquam porro asperiores harum minus debitis illum numquam architecto eum blanditiis excepturi voluptas repellat vitae? Accusamus fugit hic velit culpa.</Text>
      </div>

      <div>
        <Heading>Code block</Heading>
        <Code content="<template>
  <Feather icon=`box` />
</template>

<script>
import { Feather } from '@magenta/ui'
</script>"/>
      </div>
    </section>
    
    <section v-for="(button, key) in buttons" :key="key">
      
      <Heading size="lg">{{ button.title }}</Heading>
      <Heading size="lg" subtitle>{{ button.title }} subtitle</Heading>
      <Heading size="md">{{ button.title }}</Heading>
      <Heading size="md" subtitle>{{ button.title }} subtitle</Heading>
      <Heading size="sm">{{ button.title }}</Heading>
      <Heading :label="`${button.title} subtitle`" subtitle/>
      
      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" disabled :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="md" disabled :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="lg" disabled :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="anchor">Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="award">Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="x">Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary">Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading>Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" rounded>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" rounded>Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" rounded>Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="anchor" rounded>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="award" rounded>Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" icon="x" rounded>Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading rounded>Button text</Button>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading rounded>Button text</Button>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" loading rounded>Button text</Button>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="loader"/>
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="loader"/>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="upload-cloud"/>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="box"/>
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
      </div>

      <div class="buttons">
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="loader"/>
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="loader"/>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="upload-cloud"/>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle icon="box"/>
        <Button size="sm" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
        <Button size="md" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
        <Button size="lg" :outline="button.outline" :danger="button.danger" :secondary="button.secondary" circle loading/>
      </div>
    </section>

  </section>
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
