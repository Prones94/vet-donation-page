import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Icon } from '@iconify/react';

const RootStyle = styled("div")(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 650,
  border: "none",
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled('img')({
	zIndex: 9,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	position: 'absolute',
});

const HeroImgStyle = styled('img')(({ theme }) => ({
	top: 0,
	right: 0,
	bottom: 0,
	zIndex: 8,
	width: '100%',
	margin: 'auto',
	position: 'absolute',
	[theme.breakpoints.up('lg')]: {
		right: '8%',
		width: 'auto',
		height: '48vh',
	},
}));

const ButtonContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1em",
  [theme.breakpoints.down('sm')]: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }

}))

// ----------------------------------------------------------------------

const Hero = () => {
	return (
		<>
			<RootStyle initial='initial' animate='animate'>
				<HeroOverlayStyle alt='overlay' src='/static/overlay.svg' />

        {/* Hero Container */}
        <Container maxWidth="lg">
          <ContentStyle>
            {/* Header */}
            <Typography variant="h2" sx={{ color: 'common.white' }}>
              Welcome to <br />
              <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                Secure Social Media.
              </Typography>
              <br /> Join today!
            </Typography>

            {/* Tagline */}
              <Typography sx={{ color: 'common.white' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </Typography>

            {/* Button Container */}
            <ButtonContainerStyle>
              {/* Donate Button */}
                <Button
                  size="medium"
                  variant="contained"
                  component={RouterLink}
                  to="/"
                >
                  Donate Here
                </Button>
              <br />
              {/* Invest Button */}
                <Button
                  size="medium"
                  variant="contained"
                  component={RouterLink}
                  to="/"
                >
                  Invest Here     
              </Button>
            </ButtonContainerStyle>
            
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}

export { Hero };
