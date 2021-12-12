// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Link,
  Container,
  Typography,
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
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography variant='h3'>
                Welcome Back
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
