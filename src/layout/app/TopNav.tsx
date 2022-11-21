// material-ui
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase } from '@mui/material'
// assets
import { IconMenu2 } from '@tabler/icons'
import { IconReceipt2 } from '@tabler/icons'
// custom component
import Logo from '../../components/common/Logo'
import ProfileSection from '../../components/common/ProfileSection'
import SearchSection from '../../components/common/SearchSection'
import { Link } from 'react-router-dom'
// @ts-ignore
const TopNav = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center' }}>
          <ButtonBase disableRipple component={Link} to={'/dashboard'}>
            <IconReceipt2 stroke={1.5} size="2.3rem" color={theme.palette.primary.main} />
            <Logo />
          </ButtonBase>
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      <SearchSection />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <ProfileSection />
    </>
  )
}

export default TopNav
