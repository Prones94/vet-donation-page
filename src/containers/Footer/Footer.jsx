import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import SyncLockIcon from '@mui/icons-material/SyncLock';
import { styled } from '@mui/material/styles';
import {
	Grid,
	Link,
	Divider,
	Container,
	Typography,
	IconButton,
	Stack,
} from '@mui/material';

// ----------------------------------------------------------------------

const SOCIALS = [
	{ name: 'FaceBook', icon: facebookFill },
	{ name: 'Google', icon: googleFill },
	{ name: 'Linkedin', icon: linkedinFill },
	{ name: 'Twitter', icon: twitterFill },
];

const LINKS = [
	{
		headline: 'Connect',
		children: [
			{ name: 'Donate', href: '#donate' },
			{ name: 'Invest', href: '#invest' },
			// { name: 'Contact Us', href: '#contact' },
		],
	},
	{
		headline: 'Legal',
		children: [
			{ name: 'Terms and Condition', href: '#' },
			{ name: 'Privacy Policy', href: '#' },
		],
	},
	{
		headline: 'Contact',
		children: [
			{ name: 'support@securesocialmedia.com', href: '#' },
			{ name: 'Street Address will be here', href: '#' },
		],
	},
];

const RootStyle = styled('div')(({ theme }) => ({
	position: 'relative',
	backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

const Footer = () => {
	return (
		<RootStyle sx={{ color: 'grey.300', backgroundColor: 'grey.800' }}>
			<Divider />
			<Container maxWidth='lg' sx={{ pt: 10 }}>
				<Grid
					container
					justifyContent={{ xs: 'center', md: 'space-between' }}
					sx={{ textAlign: { xs: 'center', md: 'left' } }}>
					<Grid item xs={12} sx={{ mb: 3 }}>
						<ScrollLink to='move_top' spy smooth>
							<SyncLockIcon sx={{ color: 'primary.light', fontSize: '2em', marginRight: '.5em' }} />
							{/* <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} /> */}
						</ScrollLink>
					</Grid>
					<Grid item xs={8} md={3}>
						<Typography variant='body1' sx={{ pr: { md: 5 } }}>
							XXII2MANY is dedicated to the military members stationed around the world fighting for our homes.
						</Typography>

						<Stack
							spacing={1.5}
							direction='row'
							justifyContent={{ xs: 'center', md: 'flex-start' }}
							sx={{ mt: 5, mb: { xs: 5, md: 0 } }}>
							{SOCIALS.map((social) => (
								<IconButton key={social.name} color='primary' sx={{ p: 1 }}>
									<Icon icon={social.icon} width={16} height={16} />
								</IconButton>
							))}
						</Stack>
					</Grid>

					<Grid item xs={12} md={7}>
						<Stack
							spacing={5}
							direction={{ xs: 'column', md: 'row' }}
							justifyContent='space-between'>
							{LINKS.map((list) => {
								const { headline, children } = list;
								return (
									<Stack key={headline} spacing={2}>
										<Typography component='p' variant='overline' sx={{ color: 'primary.main' }}>
											{headline}
										</Typography>
										{children.map((link) => (
											<Link
												underline='none'
												to={link.href}
												key={link.name}
												color='inherit'
												variant='body2'
												component={RouterLink}
												sx={{ display: 'block' }}>
												{link.name}
											</Link>
										))}
									</Stack>
								);
							})}
						</Stack>
					</Grid>
				</Grid>

				<Typography
					component='p'
					variant='body2'
					sx={{
						mt: 10,
						pb: 5,
						fontSize: 13,
						textAlign: { xs: 'center', md: 'center' },
					}}>
					© 2022 Drw's Vet Project, LLC. All rights reserved
				</Typography>
			</Container>
		</RootStyle>
	);
};
export { Footer };
