import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// define menu link type
export type MenuLink = {
  link?: string
  label: string
  target?: string
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
        link: '/docs',
        label: 'Documentation',
      },
    ],
    sidebar: [
      {
        label: 'Development guide',
        children: [
          {
            label: 'Installation',
            link: '/guides/installation',
          },
          {
            label: 'Quick start',
            link: '/guides/quick-start',
          },
          {
            label: 'Custom theme',
            link: '/guides/custom-theme',
          },
          {
            label: 'Internationalization',
            link: '/guides/internationalization',
          },
          {
            label: 'CSS classes',
            link: '/guides/css-classes',
          },
          {
            label: 'Colors',
            link: '/guides/colors',
          },
        ]
      },
      {
        label: 'Components',
        children: [
          {
            label: 'Button',
            link: 'docs/components/button',
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
