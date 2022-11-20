import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import User from '../../assets/image/dev-man.webp'
export default function ProfileSection() {
  const theme = useTheme()
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        icon={<Avatar src={User} />}
        label="Bobbyzzz"
        variant="outlined"
        color="primary"
        aria-haspopup="true"
        sx={{
          height: '48px',
          cursor: 'pointer',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light,
            },
          },
        }}
      />
    </Stack>
  )
}
