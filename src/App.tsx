import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
// defaultTheme
import themes from './assets/themes'
import { lazy } from 'react'
import Loadable from './components/common/Loadable'
import AppLayout from './layout/app/AppLayout'
const Dashboard = Loadable(lazy(() => import('./views/dashboard')))

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes({})}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index path="/" element={<Dashboard />} />
              <Route index path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
