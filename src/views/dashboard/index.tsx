// material-ui
import { Grid } from '@mui/material'

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xs={12}></Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  )
}

export default Dashboard
