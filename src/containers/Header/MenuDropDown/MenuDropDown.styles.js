import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

export const MenuLink = styled(Link)(({ theme }) => ({
  padding: '0 1em',
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
}))