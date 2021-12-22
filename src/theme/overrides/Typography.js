// ----------------------------------------------------------------------

export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        "h2": {
          [theme.breakpoints.up("lg")]: {
            fontSize: '4rem'
          }
        },
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(1)
        }
      }
    }
  };
}
