import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
// defaultTheme
import themes from './assets/themes'
import { lazy, useState } from 'react'
import Loadable from './components/common/Loadable'
import AppLayout from './layout/app/AppLayout'
import ExternalLayout from './layout/external/ExternalLayout'

// Context
import { AuthUserContext } from './store/context'

const Dashboard = Loadable(lazy(() => import('./views/dashboard')))
const Login = Loadable(lazy(() => import('./views/external/Login')))

function App() {
  const [user_info, setUserInfo] = useState(JSON.parse(localStorage.getItem('MyBillUser') || '{}'))

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes()}>
        <CssBaseline />
        <AuthUserContext.Provider value={{ user_info, setUserInfo }}>
          <Router>
            <Routes>
              <Route path="/" element={<AppLayout is_auth={user_info.auth_token} redirect_path={'/login'} />}>
                <Route index path="/" element={<Dashboard />} />
                <Route index path="/dashboard" element={<Dashboard />} />
              </Route>

              <Route path="/" element={<ExternalLayout />}>
                <Route path="/login" element={<Login />} />
              </Route>

              <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
          </Router>
        </AuthUserContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
