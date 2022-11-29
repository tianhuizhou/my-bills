import LaunchLinkButton from './LaunchLinkButton'
import BankAccountCard from './BankAccountCard'

import { useEffect, useState } from 'react'
import api from '../../helper/api'
import { Grid } from '@mui/material'

const PlaidView = () => {
  const [bank_account_list, setBankAccountList] = useState<{ id: number; bank_name: string }[]>([])

  const loadBankAccountList = () => {
    console.log('loading bank account list')
    api
      .getBankAccount()
      .then((resp) => {
        // @ts-ignore
        if (resp.data) setBankAccountList(resp.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  useEffect(() => {
    loadBankAccountList()
  }, [])
  return (
    <div>
      <Grid container spacing={2}>
        {bank_account_list.map((item) => (
          <Grid item xs={4} key={item.id}>
            <BankAccountCard {...{ bank_credential: item }} />
          </Grid>
        ))}

        <Grid item xs={4}>
          <LaunchLinkButton onCreated={() => loadBankAccountList()} />
        </Grid>
      </Grid>
    </div>
  )
}

export default PlaidView
