import { Button, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const RootStyle = styled("div")(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 645,
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

// const HeroImgStyle = styled('img')(({ theme }) => ({
// 	top: 0,
// 	right: 0,
// 	bottom: 0,
// 	zIndex: 8,
// 	width: '100%',
// 	margin: 'auto',
// 	position: 'absolute',
// 	[theme.breakpoints.up('lg')]: {
// 		right: '8%',
// 		width: 'auto',
// 		height: '48vh',
// 	},
// }));

// ----------------------------------------------------------------------

const Hero = () => {
	return (
		<>
			<RootStyle initial='initial' animate='animate'>
				<HeroOverlayStyle alt='overlay' src='/static/overlay.svg' />
        {/* <HeroImgStyle alt="hero" src="/static/home/hero.png" /> */}

        {/* Hero Container */}
        <Container maxWidth="lg">
          <ContentStyle>
            {/* Header */}
            <Typography variant="h3" sx={{ color: 'common.white' }}>
              Welcome to <br />
              <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                XXII2MANY
              </Typography>
              <br /> we are stronger together
            </Typography>

            {/* Tagline */}
            <Typography sx={{ color: 'common.white' }}>
              This project is dedicated to the veterans from all our military branches and how we can support them.
              We don't track or sell data and we never will. This is to help our military members get the help they need.
              Let's make this happen with your support.
            </Typography>

            {/* Button Container */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 4 }}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              alignItems="center"
            >
              {/* Donate Button */}
                <Button
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  to="/"
                >
                  Donate Here
                </Button>
              <br />
              {/* Invest Button */}
                <Button
                  size="large"
                  variant="outlined"
                  component={RouterLink}
                  to="/"
                >
                  Invest Here
              </Button>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}

export { Hero };
