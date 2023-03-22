import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Context } from './hook/context'
import { AppRoutes } from './routes/AppRoutes'
import { GlobalStyle } from './styles/GlobalStyle'
import { themeDefault } from './styles/theme/themeDefault'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={themeDefault}>
    <BrowserRouter>
      <GlobalStyle />
      <Context>
        <AppRoutes />
      </Context>
    </BrowserRouter>
  </ThemeProvider>,
)
