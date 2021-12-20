import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Link } from '@mui/material';
import { InvestPlanCard } from './InvestPlanCard';
import { plans } from './plans';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
	minHeight: '100%',
	paddingTop: theme.spacing(15),
	paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

const Invest = () => {
	return (
		<RootStyle>
			<Container maxWidth='lg'>
				<Typography variant='h3' align='center' paragraph>
					Invest plans for your
					<br />
					community's size and needs
				</Typography>
				<Typography align='center' sx={{ color: 'text.secondary' }}>
					Choose your plan and make modern online conversation magic
				</Typography>

				{true && (
					<Box>
						<Typography align='center'>
							if you want to invest and checkout,&ensp;
							<Link>login here</Link>
						</Typography>
					</Box>
				)}

				<Grid container spacing={3} sx={{ mt: 1 }}>
					{plans?.map((card, index) => (
						<Grid item xs={12} md={4} key={card.payment}>
							<InvestPlanCard card={card} index={index} />
						</Grid>
					))}
				</Grid>
			</Container>
		</RootStyle>
	);
};

export { Invest };
