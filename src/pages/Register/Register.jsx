
import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';


import { Box, Link, Container, Typography } from '@mui/material';


// import { PATH_AUTH } from '../../routes/paths';

// import Page from '../../components/Page';
import { RegisterForm } from './RegisterForm';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
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

// ----------------------------------------------------------------------

const Register =()=> {

  return (
    <RootStyle title="Register | Minimal-UI">


      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h2" gutterBottom>
                Register
              </Typography >
            </Box>
          </Box>


          <RegisterForm />
          <div>
            Already have an account? &nbsp;
            <Link underline="none" variant="subtitle2" component={RouterLink} to="/">
              Login
            </Link>
          </div>

        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

export {Register};