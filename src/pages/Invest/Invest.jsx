// material
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { InvestPlanCard } from './InvestPlanCard';
import { CustomPlanCard } from './CustomPlanCard'
//
import { plans } from './plans';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

const Investment = () => {
  return (
    <RootStyle title="Pricing | Minimal-UI">
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" paragraph>
          Investment plans for your
          <br /> community&apos;s size and needs
        </Typography>
        <Typography align="center" sx={{ color: 'text.secondary' }}>
          Choose your plan and make modern online conversation magic
        </Typography>

        <Grid container spacing={3}>
          {/* {plans?.map((card, index) => (
            <Grid item xs={12} md={4} key={card.payment}>
              { (index < 2) && <InvestPlanCard card={card} index={index} />}
            </Grid>
          ))} */}
          <Grid item xs={12} md={4}>
            <InvestPlanCard card={plans[0]} index={0} />
          </Grid>
          <Grid item xs={12} md={4}>
            <InvestPlanCard card={plans[1]} index={1} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomPlanCard card={plans[2]} index={2} />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

export { Investment }