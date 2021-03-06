import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'

import HeroLogo from '../../../components/images/XXII.png'


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex', fontWeight: 'bold', alignItems: 'center' }, color: 'primary.main', width: '45%' }}


            >
              <img src={HeroLogo} alt='Hero Logo' />
              {/* <SyncLockIcon sx={{ color: 'primary.main', fontSize: '2em', marginRight: '.5em' }} /> */}

            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box sx={{
                padding: '1em',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '91vw',
              }}>
                <Button component={RouterLink}
                  to="/"
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Home
                </Button>
                <Button component={RouterLink}
                  to="/donate"
                  sx={{ color: '##93191D', textDecoration: 'none' }}
                >
                  Donate

                </Button>
                <Button component={RouterLink}
                  to="/invest"
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Invest

                </Button>

                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/donate"
                  sx={{ backgroundColor: '#93191D'}}
                >
                  Donate

                </Button>

              </Box>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >

          </Typography>
          <Box sx={{
            flexGrow: 1,
            gap: '1em',
            justifyContent: 'flex-end',
            marginRight: '1em',
            display: { xs: 'none', md: 'flex' }
          }}>
            <Button component={RouterLink}
              to="/"
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              Home
            </Button>
            <Button
              variant="contained"
              component={RouterLink}
              to="/donate"
            >
              Donate
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
