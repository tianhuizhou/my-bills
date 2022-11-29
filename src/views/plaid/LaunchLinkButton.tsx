import { usePlaidLink } from 'react-plaid-link'
import { Button } from '@mui/material'
import api from '../../helper/api'
import { useCallback, useEffect, useState } from 'react'

// @ts-ignore
const LaunchLinkButton = ({ onCreated }) => {
  const onSuccess = useCallback((public_token: string, metadata: any) => {
    api
      .exchangeToken(public_token, metadata.institution.name)
      .then((resp) => {
        console.log('exchanged token successfully')
        onCreated()
      })
      .catch((err) => {
        console.error(err)
      })
    console.log('onSuccess', metadata)
  }, [])

  const [link_token, setLinkToken] = useState('')
  const { open, ready } = usePlaidLink({ token: link_token, onSuccess })

  useEffect(() => {
    api.createLinkToken().then((resp) => {
      // @ts-ignore
      setLinkToken(resp.link_token)
    })
  }, [])

  return (
    <Button variant="contained" onClick={() => open()} disabled={!ready}>
      Launch Link
    </Button>
  )
}

export default LaunchLinkButton
