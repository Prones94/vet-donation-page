import React from 'react'
import { Icon } from '@iconify/react';
import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// utils
// import { MHidden } from '../@material-extend';
// import { varFadeInUp, varFadeInRight, MotionInView } from '../animate';

// ----------------------------------------------------------------------

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
          {/* <MHidden width="mdDown"> */}
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={6}>
                {/* <MotionInView variants={varFadeInUp}> */}
                <Box
                  component="img"
                  src="/static/about/what-1.jpg"
                  sx={{
                    borderRadius: 2,
                    boxShadow: shadow
                  }}
                />
                {/* </MotionInView> */}
              </Grid>
              <Grid item xs={6}>
                {/* <MotionInView variants={varFadeInUp}> */}
                <Box component="img" src="/static/about/what-2.jpg" sx={{ borderRadius: 2 }} />
                {/* </MotionInView> */}
              </Grid>
            </Grid>
          </Grid>
          {/* </MHidden> */}

          <Grid item xs={12} md={6} lg={5}>
            {/* <MotionInView variants={varFadeInRight}> */}
            <Typography variant="h2" sx={{ mb: 3 }}>
              Invest in our product
            </Typography>
            {/* </MotionInView> */}

            {/* <MotionInView variants={varFadeInRight}> */}
            <Typography
              sx={{
                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
              }}
            >
              Our theme is the most advanced and user-friendly theme you will find on the market, we have
              documentation and video to help set your site really easily, pre-installed demos you can import in one
              click and everything from the theme options to page content can be edited from the front-end. This is
              the theme you are looking for.
            </Typography>
            {/* </MotionInView> */}

            {/* <MotionInView variants={varFadeInRight}> */}
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ marginTop: 4, fontWeight: 'bold' }}
              // endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
            >
              Invest Now
            </Button>
            {/* </MotionInView> */}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

export { Invest }