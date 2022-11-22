// material-ui
import { Grid } from '@mui/material'

import BalanceCard from './BalanceCard'
import SpendingCard from './SpendingCard'
import IncomeCard from './IncomeCard'
import TransactionChart from './TransactionChart'
import TransactionTable from './TransactionTable'

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <BalanceCard {...{ 'is_loading': false }} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <BalanceCard {...{ 'is_loading': false }} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <IncomeCard {...{ 'is_loading': false }} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <SpendingCard {...{ 'is_loading': false }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TransactionChart {...{ 'is_loading': false }} />
      </Grid>

      <Grid item xs={12}>
        <TransactionTable />
      </Grid>
    </Grid>
  )
}

export default Dashboard
