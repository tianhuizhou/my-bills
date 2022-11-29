import { styled, useTheme } from '@mui/material/styles'
import { Avatar, Box, Card, Grid, Typography } from '@mui/material'
import { IconCoin } from '@tabler/icons'
import * as React from 'react'

const StyledCard = styled(Card)(({ theme }) => ({
  border: 'none',
  ':hover': {
    boxShadow: theme.shadows[16],
  },
  // @ts-ignore
  backgroundColor: theme.palette.dark.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // @ts-ignore
    background: theme.palette.warning.dark,
    borderRadius: '50%',
    top: -85,
    right: -95,
    opacity: 0.3,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140,
    },
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // @ts-ignore
    background: theme.palette.error.dark,
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.3,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70,
    },
  },
}))

const BankAccountCard = ({ bank_credential }: { bank_credential: any }) => {
  const theme = useTheme()
  return (
    <StyledCard>
      <Box sx={{ p: 2.25 }}>
        <Grid container direction="column">
          <Grid item>
            <Grid container>
              <Grid item sx={{ zIndex: 1 }} xs={10}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    mt: 1,
                  }}
                >
                  {bank_credential.bank_name}
                </Typography>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 1, mt: 0.75, mb: 0.75 }}>
                  $5000.00 I will put more information here.
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  variant="rounded"
                  sx={{
                    // @ts-ignore
                    ...theme.typography.commonAvatar,
                    // @ts-ignore
                    ...theme.typography.largeAvatar,
                    // @ts-ignore
                    backgroundColor: theme.palette.dark.main,
                    mt: 1,
                    zIndex: 1,
                    p: 1,
                    width: 50,
                    height: 50,
                  }}
                >
                  <IconCoin color={'white'} size={28} />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  )
}

export default BankAccountCard
