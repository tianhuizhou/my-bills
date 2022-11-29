import { usePlaidLink } from 'react-plaid-link'
import { useEffect } from 'react'

const PlaidView = () => {
  // eslint-disable-next-line no-unused-vars
  const config = {
    token: '',
    onSuccess: () => {
      console.log('Success')
    },
  }
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  const { open, ready } = usePlaidLink(config)

  useEffect(() => {
    if (ready) {
      open()
    }
  }, [ready, open])
  return (
    <>
      plaid view
      <button type="button" onClick={() => open()} disabled={ready}>
        Launch Link
      </button>
    </>
  )
}

export default PlaidView
