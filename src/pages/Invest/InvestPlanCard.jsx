import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Slider, Card, Button, Typography, Box } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

// import axios from 'axios';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
	maxWidth: 480,
	margin: 'auto',
	display: 'flex',
	position: 'relative',
	alignItems: 'center',
	flexDirection: 'column',
	padding: theme.spacing(3),
	[theme.breakpoints.up(414)]: {
		padding: theme.spacing(5),
	},
}));

// ----------------------------------------------------------------------

const InvestPlanCard = ({ card }) => {
	const { payment, icon, share, custom } = card;

	const [value, setValue] = useState(share);
	const [isAuth] = useState(false);

	const totalShare = useMemo(
		() => (value * 2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
		[value]
	);

	const totalPrice = useMemo(
		() =>
			new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value),
		[value]
	);

	const handleSliderChange = (event, newValue) => {
		if (typeof newValue === 'number') setValue(newValue);
	};

	const handleInputChange = (event) => {
		if (event.target.value) setValue(Number(event.target.value));
	};

	//const submitToCheckout = async () => {
	// 	if (!isAuth) return;
	// 	try {
	// 		const response = await axios.post('URL', { quantity: value });
	// 		console.log(response);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	return (
		<RootStyle>
			<Typography variant='overline' sx={{ color: 'text.secondary' }}>
				{payment}
			</Typography>

			<Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
				<Typography variant='h2' sx={{ mx: 1 }}>
					{totalShare}
				</Typography>

				<Typography
					gutterBottom
					component='span'
					variant='subtitle2'
					sx={{ alignSelf: 'flex-end', color: 'text.secondary' }}>
					shares
				</Typography>
			</Box>

			{!custom && (
				<Typography
					variant='caption'
					sx={{ color: 'primary.main', textTransform: 'capitalize' }}>
					{totalPrice} Total
				</Typography>
			)}

			{custom && (
				<>
					<Slider
						step={100}
						min={3000}
						max={100000}
						value={value}
						onChange={handleSliderChange}
						aria-label='Default'
					/>
					<FormControl fullWidth sx={{ m: 1 }} variant='standard'>
						<InputLabel htmlFor='amount'>Total Amount</InputLabel>
						<Input
							type='number'
							id='amount'
							value={value}
							onChange={handleInputChange}
							inputProps={{ step: 100, min: 3000, max: 100000 }}
							startAdornment={
								<InputAdornment position='start'>$</InputAdornment>
							}
						/>
					</FormControl>
				</>
			)}

			<Box sx={{ width: 80, height: 80, my: 3 }}>{icon}</Box>

			<Button
				// to="/"
				fullWidth
				size='large'
				variant='contained'
				disabled={isAuth}
				// component={RouterLink}
			>
				Invest Checkout
			</Button>
		</RootStyle>
	);
};

InvestPlanCard.propTypes = {
	index: PropTypes.number,
	card: PropTypes.object,
};

export { InvestPlanCard };
