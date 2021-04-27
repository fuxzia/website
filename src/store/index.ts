import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// define menu link type
export type MenuLink = {
  link?: string
  label: string
  target?: string
  external?: boolean
  button?: boolean
  children?: MenuLink[]
}

// define your typings for the store state
export interface State {
  menus: MenuLink[]
  sidebar: MenuLink[]
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

// define store
export const store = createStore<State>({
  state: {
    menus: [
      {
        label: 'Documentation',
        link: '/docs/guides',
      },
      {
        label: 'Github',
        link: 'https://github.com/magenta-ui/magenta',
      },
      {
        label: 'Be a Sponsor 🚀',
        link: 'https://github.com/magenta-ui/magenta',
        button: true,
      },
    ],
    sidebar: [
      {
        label: 'Development guide',
        children: [
          {
            label: 'Installation',
            link: '/docs/guides/installation',
          },
          {
            label: 'Quick start',
            link: '/docs/guides/quick-start',
          },
          {
            label: 'Custom theme',
            link: '/docs/guides/custom-theme',
          },
          {
            label: 'Internationalization',
            link: '/docs/guides/internationalization',
          },
          {
            label: 'CSS classes',
            link: '/docs/guides/css-classes',
          },
          {
            label: 'Colors',
            link: '/docs/guides/colors',
          },
        ]
      },
      {
        label: 'Components',
        children: [
          {
            label: 'Button',
            link: '/docs/components/button',
          },
          {
            label: 'ButtonGroup',
            link: '/docs/components/button-group',
          },
          {
            label: 'Input',
            link: '/docs/components/input',
          },
        ]
      },
    ],
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
