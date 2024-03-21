
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/transactions/Index'
import {TransactionsProvider} from '../context/TransactionsContext'
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
      <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}


