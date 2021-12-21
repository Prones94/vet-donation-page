import PropTypes from "prop-types";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
// material
import { useTheme, styled, alpha } from "@mui/material/styles";
import {
  Box,
  Grid,
  Card,
  Stack,
  Container,
  Typography
} from "@mui/material";
// ----------------------------------------------------------------------
const LICENSES = ["Security", "Freedom", "Support"];
const options = [
  "One Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.",
  "Two Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
  "Three Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
]
const icons = [
  <LockOutlinedIcon sx={{ color: 'primary.light' }} fontSize="large" />,
  <PanToolOutlinedIcon sx={{ color: 'primary.light' }} fontSize="large" />,
  <RecommendOutlinedIcon sx={{ color: 'primary.light' }} fontSize="large" />
]
const PLANS = [...Array(3)].map((_, index) => ({
  license: LICENSES[index],
  commons: ["One end products", "12 months updates", "6 months of support"],
}));
const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(15)
  }
}));
// ----------------------------------------------------------------------
PlanCard.propTypes = {
  cardIndex: PropTypes.number,
  plan: PropTypes.shape({
    license: PropTypes.any,
    commons: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string)
  })
};

const PlanCard = ({ plan, cardIndex }) => {
  const theme = useTheme();
  const { license } = plan;
  const isLight = theme.palette.mode === "light";
  return (
    <Card sx={{
      padding: '1em',
      boxShadow: '0 19px 40px rgba(33, 33, 33, .1)',
      borderRadius: '10px',
      maxWidth: "500px",
      margin: '0 auto'
    }}>
      <Box
        sx={{
          p: 5,
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto",
          borderRadius: '10px',
          boxShadow: (theme) =>
            `0px 15px 40px ${alpha(
              isLight ? theme.palette.grey[500] : theme.palette.common.black,
              0.24
            )}`
        }}
      >
        <Stack spacing={5}>
          <Typography>{icons[cardIndex]}</Typography>
          <div>
            <Typography variant="h5" sx={{marginBottom: '-1em'}}>{license}</Typography>
          </div>
          <Stack direction="row" justifyContent="flex-end"></Stack>
          <Typography size="large" variant="p">
            {options[cardIndex]}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}
function Features() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Typography
            component="p"
            variant="overline"
            sx={{ mb: 2, color: "text.secondary" }}
          >
            features
          </Typography>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Secure Social Media best features
          </Typography>
        </Box>
        <Grid container spacing={5}>
          {PLANS.map((plan, index) => (
            <Grid key={plan.license} item xs={12} md={4}>
              <PlanCard plan={plan} cardIndex={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
export { Features };
