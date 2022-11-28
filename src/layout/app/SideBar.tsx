import { Link } from 'react-router-dom'
// material-ui
import { useTheme } from '@mui/material/styles'
import { Box, Drawer, useMediaQuery, ButtonBase } from '@mui/material'

import PerfectScrollbar from 'react-perfect-scrollbar'
import Logo from '../../components/common/Logo'
import SideMenuList from '../../components/common/SideMenuList'
import { drawerWidth } from '../../store/constant'
import { IconReceipt2 } from '@tabler/icons'

interface Props {
  drawerOpen: boolean
  drawerToggle: () => void
  window: null | Window
}

const Sidebar = ({ drawerOpen, drawerToggle, window }: Props) => {
  const theme = useTheme()
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          {' '}
          <ButtonBase disableRipple component={Link} to={'/dashboard'}>
            <IconReceipt2 stroke={1.5} size="2.3rem" color={theme.palette.primary.main} />
            <Logo width={80} height={34} />
          </ButtonBase>
        </Box>
      </Box>
      <PerfectScrollbar
        component="div"
        style={{
          height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <SideMenuList />
      </PerfectScrollbar>
    </>
  )

  const container = window !== null ? () => window.document.body : null

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container ?? undefined}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '88px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
export default Sidebar
