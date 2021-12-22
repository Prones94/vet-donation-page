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
							Join
						</Typography>
						{/* </MotionInView> */}

						{/* <MotionInView variants={varFadeInRight}> */}
						<Typography	sx={{	mb: 5, color: isLight ? 'grey.700' : 'common.white', }}>
							TBD
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
