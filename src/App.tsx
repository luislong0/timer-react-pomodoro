import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  // const [theme, setTheme] = useState(defaultTheme);

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'light' ? dark : defaultTheme);
  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <input type="checkbox"
        onChange={toggleTheme}
        checked={theme.title === 'dark'}

      /> */}
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
