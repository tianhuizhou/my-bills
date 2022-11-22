import Chart from 'react-apexcharts'
import { ComponentProps } from '../../helper/types'
import { useState } from 'react'
// import { useTheme } from '@mui/material/styles'
import { Card, CardContent, Grid, MenuItem, Skeleton, TextField, Typography } from '@mui/material'

const chart_data = {
  height: 480,
  type: 'bar',
  options: {
    chart: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: `'Roboto', sans-serif`,
      position: 'bottom',
      offsetX: 20,
      labels: {
        useSeriesColors: false,
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },
    fill: {
      type: 'solid',
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
    },
  },
  series: [
    {
      name: 'Supermarket',
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
    },
    {
      name: 'Restaurant',
      data: [35, 15, 15, 35, 65, 40, 160, 25, 15, 85, 25, 75],
    },
    {
      name: 'Travel',
      data: [0, 0, 75, 0, 0, 15, 0, 0, 0, 0, 150, 0],
    },
    {
      name: 'Others',
      data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
    },
  ],
}

const STATUS = [
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'month',
    label: 'This Month',
  },
  {
    value: 'year',
    label: 'This Year',
  },
]

const TransactionChart = ({ is_loading }: ComponentProps) => {
  const [value, setValue] = useState('today')
  // const theme = useTheme()
  return (
    <>
      {is_loading ? (
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="space-between" spacing={3}>
                  <Grid item xs zeroMinWidth>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Skeleton variant="text" />
                      </Grid>
                      <Grid item xs={12}>
                        <Skeleton variant="rectangular" height={20} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Skeleton variant="rectangular" height={50} width={80} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rectangular" height={530} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{
            p: 4,
          }}
        >
          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Transaction</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">$6666.66</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {STATUS.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {/*//@ts-ignore*/}
              <Chart {...chart_data} />
            </Grid>
          </Grid>
        </Card>
      )}
    </>
  )
}

export default TransactionChart
