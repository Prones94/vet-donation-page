import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
	textAlign: 'center',
	minHeight: '80vh',
	paddingTop: theme.spacing(20),
	paddingBottom: theme.spacing(10),
	[theme.breakpoints.up('md')]: {
		textAlign: 'left',
	},
}));

const Invest = () => {
	const theme = useTheme();
	const isLight = theme.palette.mode === 'light';
	const shadow = `-40px 40px 80px ${alpha(
		isLight ? theme.palette.grey[500] : theme.palette.common.black,
		0.48
	)}`;

	return (
		<RootStyle>
			<Container maxWidth='lg'>
				<Grid container spacing={3}>
					{/* <MHidden width="mdDown"> */}
					<Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
						<Grid container spacing={3} alignItems='flex-end'>
							<Grid item xs={6}>
								{/* <MotionInView variants={varFadeInUp}> */}
								<Box
									component='img'
									src='/static/about/what-1.jpg'
									sx={{
										borderRadius: 2,
										boxShadow: shadow,
									}}
								/>
								{/* </MotionInView> */}
							</Grid>
							<Grid item xs={6}>
								{/* <MotionInView variants={varFadeInUp}> */}
								<Box
									component='img'
									src='/static/about/what-2.jpg'
									sx={{ borderRadius: 2 }}
								/>
								{/* </MotionInView> */}
							</Grid>
						</Grid>
					</Grid>
					{/* </MHidden> */}

					<Grid item xs={12} md={6} lg={5}>
						{/* <MotionInView variants={varFadeInRight}> */}
						<Typography variant="h2" sx={{ mb: 3 }}>
								Follow Us!
						</Typography>
						{/* </MotionInView> */}

						{/* <MotionInView variants={varFadeInRight}> */}
						<Typography	sx={{	mb: 5, color: isLight ? 'grey.700' : 'common.white', marginLeft: '1px' }}>
							<Button
								size="large"
								variant='contained'
								component={RouterLink}
								sx={{marginRight: '1rem'}}
								to={'https://www.youtube.com/channel/UCbn3bLdIqEv9uaiFZ-z-ZtA'}
							>Youtube</Button>

							<Button
								size="large"
								variant='contained'
								component={RouterLink}
								to={'https://www.tiktok.com/@countrylife_veteran?_d=secCgYIASAHKAESPgo86TDZ36Li2up7JvB7cpLNCuQbSSJDRZ%2BFzCadXa7QpLUB7Z5r7G9D%2BJPoWF8U2iEJOrAqUanq21OrOpfzGgA%3D&_r=1&checksum=c6c0129597cf1faf8e6c7d62326de5b56d230539aacbc2fcc8959c8963e2005f&language=en&sec_uid=MS4wLjABAAAABF2LuvIISvLLlTMfwcfmSmXF6CCoqHfBxTctnhQaIUbQo3JhpjVcvVb6HxrMr7LS&sec_user_id=MS4wLjABAAAAIJLs7cJotAct52CZls0uM_7sKiqn2yZIZb1AFvwfRpPKBMj4190uvGgLyPl5lVhY&share_app_id=1233&share_author_id=6885437226781230085&share_link_id=10361A1E-E779-420D-B8B0-0D275356AE99&source=h5_m&tt_from=copy&u_code=dh9adg190kdf10&user_id=6934035546155058181&utm_campaign=client_share&utm_medium=ios&utm_source=copy'}
							>Tiktok</Button>
						</Typography>
						{/* </MotionInView> */}

						{/* <MotionInView variants={varFadeInRight}> */}
						<Button
							size='large'
							variant='contained'
							component={RouterLink}
							to={'/'}
						>
							Invest Now
						</Button>
						{/* </MotionInView> */}
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	);
};

export { Invest };
