import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import MilFirstLogo from '../../../components/images/Military-First-Image.png'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	padding: theme.spacing(12, 0),
	minHeight: '67vh',
	backgroundImage:
		theme.palette.mode === 'light'
			? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
					theme.palette.grey[300]
			  } 100%)`
			: 'none',
}));

const ContentStyle = styled('div')(({ theme }) => ({
	width: '100%',
	textAlign: 'center',
	marginBottom: theme.spacing(10),
	[theme.breakpoints.up('md')]: {
		textAlign: 'left',
		marginBottom: 0,
	},
}));

//const ScreenStyle = styled('div')(({ theme }) => ({
// 	paddingRight: 2,
// 	paddingBottom: 1,
// 	maxWidth: 160,
// 	borderRadius: 8,
// 	backgroundColor:
// 		theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
// 	[theme.breakpoints.up('sm')]: {
// 		maxWidth: 320,
// 		paddingRight: 4,
// 		borderRadius: 12,
// 	},
// 	'& img': {
// 		borderRadius: 8,
// 		[theme.breakpoints.up('sm')]: {
// 			borderRadius: 12,
// 		},
// 	},
// }));

// const COMMON = {
// 	scaleX: 0.86,
// 	skewY: 8,
// 	skewX: 0,
// 	scaleY: 1,
// 	translateX: 0,
// 	translateY: 0,
// 	opacity: 0,
// };

// const variantScreenLeft = {
// 	initial: COMMON,
// 	animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
// };
// const variantScreenCenter = {
// 	initial: COMMON,
// 	animate: { ...COMMON, opacity: 1 },
// };
// const variantScreenRight = {
// 	initial: COMMON,
// 	animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
// };

// ----------------------------------------------------------------------

const Donate = () => {
	const theme = useTheme();
	const isLight = theme.palette.mode === 'light';
	// const isRTL = theme.direction === 'rtl';
	const shadow = `-40px 40px 80px ${alpha(
		isLight ? theme.palette.grey[500] : theme.palette.common.black,
		0.48
	)}`;

	return (
		<RootStyle>
			<Container maxWidth='lg'>
				<Grid container spacing={5} justifyContent='center'>
					<Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
						<ContentStyle>
							{/* <MotionInView variants={varFadeInUp}> */}
							<Typography variant="h2" sx={{ mb: 3 }}>
								Give
							</Typography>
							{/* </MotionInView> */}

							{/* <MotionInView variants={varFadeInUp}> */}
							<Typography	sx={{	mb: 5, color: isLight ? 'grey.700' : 'common.white', }}>
								Your support helps all branches of the military, including first responders!
							</Typography>
							{/* </MotionInView> */}

							{/* <MotionInView variants={varFadeInUp}> */}
							<Button
								size='large'
								variant='contained'
								component={RouterLink}
								to={'/'}
							>
								Donate now
							</Button>
							{/* </MotionInView> */}
						</ContentStyle>
					</Grid>
					{/* <Grid item xs={12} md={8} dir='ltr'>
						<img src={image} alt='image' />
					</Grid> */}
					<Grid item xs={8} md={6}>
						{/* <MotionInView variants={varFadeInUp}> */}
						<Box
							component='img'
							src={MilFirstLogo}
							sx={{
								borderRadius: 2,
								boxShadow: shadow,
							}}
						/>
						{/* </MotionInView> */}
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	);
};
export { Donate };
