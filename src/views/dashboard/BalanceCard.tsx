// material-ui
import { Avatar, Box, Card, CardContent, Grid, Skeleton, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

import { IconCoin, IconTrendingUp } from '@tabler/icons'
import * as React from 'react'

import Chart from 'react-apexcharts'

interface IncomeCardProps {
  is_loading: boolean
}
const chart_data = {
  type: 'line',
  height: 90,
  options: {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#fff'],
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: 'Total Order',
      },
      marker: {
        show: false,
      },
    },
  },
  series: [
    {
      name: 'series1',
      data: [45, 66, 41, 89, 25, 44, 9, 54],
    },
  ],
}

const StyledIncomeCard = styled(Card)(({ theme }) => ({
  border: 'none',
  ':hover': {
    boxShadow: theme.shadows[16],
  },
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    // @ts-ignore
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
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
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70,
    },
  },
}))

const BalanceCard = ({ is_loading }: IncomeCardProps) => {
  const theme = useTheme()
  return (
    <>
      {is_loading ? (
        <Card>
          <CardContent>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Skeleton variant="rounded" width={44} height={44} />
                  </Grid>
                  <Grid item>
                    <Skeleton variant="rounded" width={34} height={34} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Skeleton variant="rounded" sx={{ my: 2 }} height={40} />
              </Grid>
              <Grid item>
                <Skeleton variant="rounded" height={30} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <StyledIncomeCard>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item sx={{ zIndex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        mt: 1,
                      }}
                    >
                      Current Balance
                    </Typography>
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, mr: 1, mt: 0.75, mb: 0.75 }}>
                      $5000.00
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        // @ts-ignore
                        ...theme.typography.commonAvatar,
                        // @ts-ignore
                        ...theme.typography.largeAvatar,
                        // @ts-ignore
                        backgroundColor: theme.palette.primary.main,
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

              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid
                    item
                    xs={5}
                    sx={{ mt: 2, display: 'flex', alignItems: 'center', color: theme.palette.grey[100], zIndex: 1 }}
                  >
                    <Typography sx={{ mr: 1, color: theme.palette.success.main, fontWeight: 800 }}>
                      <IconTrendingUp size={16} />
                      17.2%
                    </Typography>
                    <Typography sx={{}}>Monthly</Typography>
                  </Grid>

                  <Grid item xs={7}>
                    {/*//@ts-ignore*/}
                    <Chart {...chart_data} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </StyledIncomeCard>
      )}
    </>
  )
}

export default BalanceCard
