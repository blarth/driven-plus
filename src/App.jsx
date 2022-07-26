/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter } from 'react-router-dom'
import Pages from './pages'
import { UserProvider } from './context/userContext'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <UserProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
