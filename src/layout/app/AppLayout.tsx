import { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Alert, AppBar, Box, CssBaseline, Snackbar, Toolbar, useMediaQuery } from '@mui/material'

// custom components
import TopNav from './TopNav'
import Sidebar from './SideBar'
import MainContent from './MainContent'
import api from '../../helper/api'
import { AlertColor } from '@mui/material/Alert/Alert'
import { AuthUserContext } from '../../store/context'

const AppLayout = ({ is_auth, redirect_path = '/login' }: { is_auth: boolean; redirect_path: string }) => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))

  // Handle left drawer
  const [leftDrawerOpened, setLeftDrawerOpened] = useState(false)
  const handleLeftDrawerToggle = () => {
    setLeftDrawerOpened(!leftDrawerOpened)
  }

  useEffect(() => {
    setLeftDrawerOpened(!matchDownMd)
  }, [matchDownMd])

  const [alert_msg, setAlertMsg] = useState<{ 'type': AlertColor; msg: string }>({ 'type': 'info', 'msg': '' })
  const triggerAlert = (type: AlertColor, msg: string) => {
    setAlertMsg({ msg, type })
  }
  const navigate = useNavigate()
  // @ts-ignore
  const { user_info, setUserInfo } = useContext(AuthUserContext)
  useEffect(() => {
    // Token validation if there is existing one
    if (!user_info.auth_token) return
    api
      .tokenValidation()
      .then(() => {
        triggerAlert('success', `Welcome back, ${user_info.username}`)
      })
      .catch((err) => {
        console.error(err)
        triggerAlert('error', 'Session has expired, please log in again.')
        setUserInfo({})
        localStorage.setItem('MyBillUser', '{}')
        navigate('/login')
      })
  }, [])

  if (!is_auth) return <Navigate to={redirect_path} replace />
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgColor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
        }}
      >
        <Toolbar>
          <TopNav handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>
      {/* drawer */}
      <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} window={null} />
      {/* main content */}
      <MainContent {...{ 'theme': theme, 'open': leftDrawerOpened }}>
        <Outlet />
      </MainContent>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={alert_msg.msg !== ''}
        autoHideDuration={4000}
        onClose={() => triggerAlert(alert_msg.type, '')}
      >
        <Alert severity={alert_msg.type} sx={{ width: '100%' }}>
          {alert_msg.msg}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default AppLayout
