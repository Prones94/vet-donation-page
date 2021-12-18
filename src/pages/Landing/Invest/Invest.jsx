import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  }
}));

const Invest = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={6}>
                <Box
                  component="img"
                  src="/static/about/what-1.jpg"
                  sx={{
                    borderRadius: 2,
                    boxShadow: shadow
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Box component="img" src="/static/about/what-2.jpg" sx={{ borderRadius: 2 }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
              <Typography variant="span" sx={{ color: 'info.light' }}>Invest</Typography> in our product
            </Typography>
            <Typography
              sx={{
                fontSize: 22,
                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ullam neque laudantium, rem
              cum dicta. Nesciunt sit ipsam cupiditate voluptatem!
            </Typography>
            <Button
              sx={{ marginY: 6, backgroundColor: 'info.light' }}
              variant="contained"
              size="large"
              component={RouterLink}
              to={"/"}>
              Invest Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

export { Invest }