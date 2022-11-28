import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Avatar,
  Chip,
  Stack,
  Popover,
  Typography,
  Card,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Paper,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import User from '../../assets/image/dev-man.webp'
import { IconLogout, IconSettings, IconUser } from '@tabler/icons'
import api from '../../helper/api'

export default function ProfileSection() {
  const theme = useTheme()
  const small_window = useMediaQuery(() => theme.breakpoints.down('md'))
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(document.getElementById('user-profile'))
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const handleLogout = async () => {
    api.logout().then(() => {
      localStorage.setItem('MyBillUser', '{}')
      navigate('/login')
    })
  }
  const handleListItemClick = (path: string) => {
    navigate(path)
  }
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        id={'user-profile'}
        icon={<Avatar src={User} />}
        label={small_window ? '' : 'Bobbyzzz'}
        variant="outlined"
        color="primary"
        aria-haspopup="true"
        sx={{
          height: '48px',
          cursor: 'pointer',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light,
            },
          },
        }}
        onClick={(event) => handleClick(event)}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Paper>
          <Card
            elevation={16}
            sx={{
              border: 'none',
              ':hover': {
                boxShadow: theme.shadows[16],
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Stack sx={{ mb: 3 }}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Typography variant="h4">Good Morning,</Typography>
                  <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                    Bobby
                  </Typography>
                </Stack>
              </Stack>

              <Divider />

              <List
                component="nav"
                sx={{
                  width: '100%',
                  maxWidth: 350,
                  minWidth: 300,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: '10px',
                  [theme.breakpoints.down('md')]: {
                    minWidth: '100%',
                  },
                  '& .MuiListItemButton-root': {
                    mt: 0.5,
                  },
                }}
              >
                <ListItemButton sx={{ borderRadius: `12px` }} onClick={(event) => handleListItemClick('/user/setting')}>
                  <ListItemIcon>
                    <IconSettings stroke={1.5} size="1.3rem" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ borderRadius: `12px` }} onClick={(event) => handleListItemClick('/user/profile')}>
                  <ListItemIcon>
                    <IconUser stroke={1.5} size="1.3rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Grid container spacing={1} justifyContent="space-between">
                        <Grid item>
                          <Typography variant="body2">Profile</Typography>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItemButton>
                <ListItemButton sx={{ borderRadius: `12px` }} onClick={() => handleLogout()}>
                  <ListItemIcon>
                    <IconLogout stroke={1.5} size="1.3rem" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                </ListItemButton>
              </List>
            </Box>
          </Card>
        </Paper>
      </Popover>
    </Stack>
  )
}
