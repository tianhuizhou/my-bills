import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// material-ui
import { useTheme } from '@mui/material/styles'
import { Divider, List, Typography, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { IconDashboard } from '@tabler/icons'

const SideMenuList = () => {
  const theme = useTheme()
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const navigate = useNavigate()
  const handleListItemClick = (path: string, index: number) => {
    setSelectedIndex(index)
    navigate(path)
  }

  let location = useLocation()
  const updateSelectedMenuItem = (path: string) => {
    let idx: number = -1
    switch (path) {
      case '/dashboard':
        idx = 0
        break
      case '/':
        idx = 0
        break
      default:
        console.log('Invalid path')
    }
    setSelectedIndex(idx)
  }
  React.useEffect(() => {
    updateSelectedMenuItem(location.pathname)
  }, [location])

  return (
    <>
      <List
        subheader={
          // @ts-ignore
          <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
            {'Dashboard'}
          </Typography>
        }
      >
        <ListItemButton
          selected={selectedIndex === 0}
          sx={{ borderRadius: `12px` }}
          onClick={() => handleListItemClick('/dashboard', 0)}
        >
          <ListItemIcon>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 1}
          sx={{ borderRadius: `12px` }}
          onClick={() => handleListItemClick('/plaid', 1)}
        >
          <ListItemIcon>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText primary="Plaid" />
        </ListItemButton>
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  )
}

export default SideMenuList
