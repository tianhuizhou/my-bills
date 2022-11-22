// material-ui
import { useTheme, styled } from '@mui/material/styles'
import { Avatar, Box, Card, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Typography } from '@mui/material'
import { IconShoppingCart } from '@tabler/icons'
// styles
const CardWrapper = styled(Card)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.error.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.error.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}))

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //
interface SpendingCardProps {
  is_loading: boolean
}
const SpendingCard = ({ is_loading }: SpendingCardProps) => {
  const theme = useTheme()

  return (
    <>
      {is_loading ? (
        <Card sx={{ p: 2 }}>
          <List sx={{ py: 0 }}>
            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
              <ListItemAvatar>
                <Skeleton variant="rectangular" width={44} height={44} />
              </ListItemAvatar>
              <ListItemText
                sx={{ py: 0 }}
                primary={<Skeleton variant="rectangular" height={20} />}
                secondary={<Skeleton variant="text" />}
              />
            </ListItem>
          </List>
        </Card>
      ) : (
        <CardWrapper>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      // @ts-ignore
                      ...theme.typography.commonAvatar,
                      // @ts-ignore
                      ...theme.typography.largeAvatar,
                      backgroundColor: theme.palette.error.light,
                      color: theme.palette.error.dark,
                    }}
                  >
                    <IconShoppingCart fontSize="inherit" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    py: 0,
                    mt: 0.45,
                    mb: 0.45,
                  }}
                  primary={<Typography variant="h4">$3000</Typography>}
                  secondary={
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.grey[500],
                        mt: 0.5,
                      }}
                    >
                      Spending
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  )
}

export default SpendingCard
