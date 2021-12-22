import { styled } from '@mui/material/styles';
import { Box, Button, Divider, Container, Typography } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
	paddingTop: theme.spacing(1),
	[theme.breakpoints.up('md')]: {
		paddingBottom: theme.spacing(15),
		marginTop: theme.spacing(0),
	},
}));

const Contact = () => {
	return (
		<RootStyle>
			<Divider />
			<Container maxWidth='lg' sx={{ backgroundColor: 'grey.300' }}>
				<Box
					sx={{
						alignItems: 'center',
						backgroundColor: 'grey.300',
					}}>
					<Box sx={{ p: 5, mt: 10, textAlign: 'center' }}>
						<div>
							<Typography variant='h3'>Still have questions?</Typography>
						</div>

						<div>
							<Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
								Please describe your case to receive the most accurate advice.
							</Typography>
						</div>

						<div>
							<Button
								size='large'
								variant='contained'
								href='mailto:support@securesocialmedia.com?subject=[Feedback] from Customer'>
								Contact us
							</Button>
						</div>
					</Box>
				</Box>
			</Container>
		</RootStyle>
	);
};
export { Contact };
