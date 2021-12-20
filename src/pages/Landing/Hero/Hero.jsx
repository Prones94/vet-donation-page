import flashFill from '@iconify/icons-eva/flash-fill';
import { Icon } from '@iconify/react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
// import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const RootStyle = styled('div')(({ theme }) => ({
	position: 'relative',
	backgroundColor: theme.palette.grey[400],
	[theme.breakpoints.up('md')]: {
		top: 0,
		left: 0,
		width: '100%',
		height: '100vh',
		display: 'flex',
		position: 'fixed',
		alignItems: 'center',
	},
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
	({ theme }) => ({
		zIndex: 10,
		maxWidth: 860,
		border: 'solid 1px red',
		margin: 'auto',
		textAlign: 'center',
		position: 'relative',
		paddingTop: theme.spacing(15),
		paddingBottom: theme.spacing(15),
		[theme.breakpoints.up('md')]: {
			margin: 'unset',
			textAlign: 'left',
		},
	})
);

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

// ----------------------------------------------------------------------

const Hero = () => {
	return (
		<>
			<RootStyle initial='initial' animate='animate'>
				<HeroOverlayStyle alt='overlay' src='/static/overlay.svg' />

				<HeroImgStyle alt='hero' src='/static/home/hero.png' />

				{/* Header */}
				<Container maxWidth='lg'>
					<ContentStyle>
						<Typography variant='h1' sx={{ color: 'common.white' }}>
							Welcome to <br />
							our site. Join <br />
							<Typography
								component='span'
								variant='h1'
								sx={{ color: 'primary.main' }}>
								Secure Social Media
							</Typography>
							<br /> today!
						</Typography>

						{/* Tagline */}
						<Typography sx={{ color: 'common.white' }}>
							Here goes an example of a tagline or random words to describe the
							company. More words. More words. End statement.
						</Typography>

						{/* Donate Button */}
						<Button
							size='large'
							variant='contained'
							component={RouterLink}
							to='/'
							startIcon={<Icon icon={flashFill} width={20} height={20} />}>
							Donate Here
						</Button>

						{/* Invest Button */}
						<Button
							size='large'
							variant='contained'
							component={RouterLink}
							to='/'
							startIcon={<Icon icon={flashFill} width={20} height={20} />}>
							Ready to Invest
						</Button>
					</ContentStyle>
				</Container>
			</RootStyle>
			<Box sx={{ height: { md: '100vh' } }} />
		</>
	);
};

export { Hero };
