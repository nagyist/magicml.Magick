import type { Preview } from '@storybook/react'

import '../src/styles/globals.css'

import '../src/styles/globals.css'
import 'dockview/dist/styles/dockview.css'
import '../../../../../packages/client/stylesheets/src/themes.scss'
import '../../../../../packages/client/stylesheets/src/behaveFlow.css'
import '../../../../../packages/client/stylesheets/src/dockview.css'
import '../../../../../packages/client/stylesheets/src/flowOverrides.css'
import '../../../../../packages/client/stylesheets/src/App.css'
import '../../../../../packages/client/stylesheets/src/design-globals/design-globals.css'
import '@xyflow/react/dist/style.css'
import 'node_modules/latex.js/dist/css/katex.css'
import 'react-tooltip/dist/react-tooltip.css'

import { withThemeByClassName } from '@storybook/addon-themes'

const preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} satisfies Preview

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
]

export default preview
