import { ThemeProvider } from "styled-components"
import {theme} from '../src/styles/theme'
import {GlobalStyles} from '../src/styles/global-styles'
import { LayoutContextProvider } from "../src/components/contexts/LayoutContext"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <LayoutContextProvider>
      <Story />
      <GlobalStyles />
      </LayoutContextProvider>
    </ThemeProvider>
  )
]
