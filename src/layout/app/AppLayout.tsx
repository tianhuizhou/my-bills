import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// material-ui
import { useTheme } from '@mui/material/styles'
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material'

// custom components
import TopNav from './TopNav'
import Sidebar from './SideBar'
import MainContent from './MainContent'

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
    </Box>
  )
}

export default AppLayout
