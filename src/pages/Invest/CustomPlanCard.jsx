import PropTypes from 'prop-types';
// import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Slider, Card, Button, Typography, Box } from '@mui/material';
// routes
// import { PATH_DASHBOARD } from '../../../routes/paths';
//
// import { Label } from '../../components';

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
    padding: theme.spacing(5)
  }
}));

// ----------------------------------------------------------------------

const CustomPlanCard = ({ card, index }) => {
  const { payment, icon, price, caption, labelAction } = card;

  return (
    <RootStyle>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {payment}
      </Typography>

      <Slider 
        defaultValue={50} 
        step={100}
        min={5}
        max={30}
        aria-label="Default" 
        valueLabelDisplay="non-linear-slider"
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
        { index < 2 && (
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            $
          </Typography>
        )}
        
        <Typography variant="h2" sx={{ mx: 1 }}>
          {price}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: 'primary.main',
          textTransform: 'capitalize'
        }}
      >
        {caption}
      </Typography>

      <Box sx={{ width: 80, height: 80, mt: 3 }}>
        {icon}
      </Box>

      <Button
        // to="/"
        fullWidth
        size="large"
        variant="contained"
        disabled={index === 2}
        // component={RouterLink}
      >
        {labelAction}
      </Button>
    </RootStyle>
  );
}

CustomPlanCard.propTypes = {
  index: PropTypes.number,
  card: PropTypes.object
};

export { CustomPlanCard }