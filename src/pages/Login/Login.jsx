import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Stack,
  Link,
  Alert,
  Tooltip,
  Container,
  Typography,
  Button,
} from '@mui/material';
// components
import { LoginForm } from './LoginForm';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 600,
    margin: 'auto',
    display: 'flex',
    minHeight: '80vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

//--------------------------------------------------------------------

const Login = () => {
  return (
    <RootStyle tytle='Login | Minimal-UI'>
      <Container maxWidth='sm'>
        <ContentStyle>
          <Stack direction='row' alignItems='center' sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant='h4' gutterBottom>
                Sign in to Minimal
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Enter your details below.
              </Typography>
            </Box>
          </Stack>
          <LoginForm />
          <div>
            Don’t have an account? &nbsp;<Link>Get started</Link>
          </div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export { Login };
