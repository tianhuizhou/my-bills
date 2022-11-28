import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const ExternalLayout = () => {
  const theme = useTheme()
  console.log(theme)
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.grey[50],
      }}
    >
      <Outlet />
    </Box>
  )
}

export default ExternalLayout
