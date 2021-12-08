import { styled } from '@mui/system'
import { Typography } from '@mui/material'

export const HeaderText = styled(Typography)(({ theme }) => ({
  // border: '1px solid white',
  textAlign: 'center',
  variant: 'h6',
  // component: 'h6',
  noWrap: false,
  flexGrow: '1',
  sx: { flexGrow: 1, display: { xs: 'none', sm: 'block' } },
}))
