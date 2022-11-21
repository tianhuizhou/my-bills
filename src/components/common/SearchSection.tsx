import { OutlinedInput, Box, InputAdornment } from '@mui/material'
import { IconSearch } from '@tabler/icons'
import { styled } from '@mui/material/styles'

const SearchInput = styled(OutlinedInput)(({ theme }) => ({
  width: '45ch',
  borderRadius: '12px',
}))

const SearchSection = () => {
  return (
    <Box sx={{ mx: 2 }}>
      <SearchInput
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <IconSearch />
          </InputAdornment>
        }
        style={{ borderRadius: '12px' }}
      />
    </Box>
  )
}

export default SearchSection
