import { useContext, useState } from 'react'
import { Card, CardContent, Stack, Typography, TextField, Divider, Button, Snackbar, Alert } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Logo from '../../components/common/Logo'
import api from '../../helper/api'
import { AlertColor } from '@mui/material/Alert/Alert'
import { useNavigate } from 'react-router-dom'
import { AuthUserContext } from '../../store/context'

const LoginPage = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const [view_mode, setViewMode] = useState('login')

  const [alert_msg, setAlertMsg] = useState<{ 'type': AlertColor; msg: string }>({ 'type': 'info', 'msg': '' })
  const triggerAlert = (type: AlertColor, msg: string) => {
    setAlertMsg({ msg, type })
  }

  // @ts-ignore
  const { setUserInfo } = useContext(AuthUserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')

  const formValidations = () => {
    if (!username || !password) return false
    if (view_mode === 'register' && confirm_password !== password) return false
    return true
  }

  const login = () => {
    if (!formValidations()) {
      triggerAlert('error', 'Please enter your username and password.')
      return
    }
    api
      .login(username, password)
      .then((res) => {
        triggerAlert('success', 'Login successfully')
        localStorage.setItem('MyBillUser', JSON.stringify(res))
        setUserInfo(res)
        navigate('/')
      })
      .catch((err) => {
        triggerAlert('error', 'Invalid username or password.')
      })
  }
  const register = () => {
    if (!formValidations()) {
      triggerAlert('error', 'Please enter your username and password, and make sure your password is matched')
      return
    }
    api
      .register(username, password)
      .then((res) => {
        triggerAlert('success', 'User registered successfully, please try to login')
        setViewMode('login')
      })
      .catch((err) => {
        triggerAlert('error', 'Username already exists.')
      })
  }
  return (
    <>
      <Card sx={{ px: 4, boxShadow: theme.shadows[10], width: '400px' }}>
        <CardContent>
          <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <Logo height={60} width={200} />

            <Typography
              variant="h2"
              color="text.dark"
              sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              Welcome
            </Typography>

            <Divider variant="middle" sx={{ width: '100%' }} />

            <TextField
              id="username-input"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              label="Username"
              type="text"
              autoComplete="current-username"
              sx={{ width: '100%' }}
            />

            <TextField
              id="password-input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{ width: '100%' }}
            />

            {view_mode === 'register' ? (
              <TextField
                id="confirm-password-input"
                value={confirm_password}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                label="Confirm Password"
                type="Confirm password"
                sx={{ width: '100%' }}
              />
            ) : (
              <></>
            )}

            {view_mode === 'register' ? (
              <Button variant="contained" sx={{ width: '100%', borderRadius: '12px' }} onClick={() => register()}>
                Register
              </Button>
            ) : (
              <Button variant="contained" sx={{ width: '100%', borderRadius: '12px' }} onClick={() => login()}>
                Sign in
              </Button>
            )}

            {view_mode === 'register' ? (
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                Already have account?
                <Button onClick={() => setViewMode('login')}>Sign in</Button>
              </Typography>
            ) : (
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                No account?
                <Button onClick={() => setViewMode('register')}>Register now</Button>
              </Typography>
            )}
          </Stack>
        </CardContent>
      </Card>

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
    </>
  )
}

export default LoginPage
