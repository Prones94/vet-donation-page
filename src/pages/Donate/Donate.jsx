import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { DonatePlanCard } from './DonatePlanCard';
import { plans } from './plans';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const Donate = () => {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" paragraph>
          We thank you for your donations
        </Typography>
        <Typography align="center" sx={{ color: 'text.secondary' }}>
          Choose your donation amount or enter a custom amount
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          { plans?.map((card) => (
            <Grid item xs={12} md={4} key={card.subscription}>
              <DonatePlanCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
};

export { Donate }