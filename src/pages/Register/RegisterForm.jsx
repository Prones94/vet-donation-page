import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
// import { useSnackbar } from 'notistack';
// error messages after hitting register
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Stack, TextField, IconButton, InputAdornment, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';


// ---------------------------------------------
// To add later *Troy
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from '../../graphql';
import tokenAuth from '../../auth/webtoken';
// -----------------------------------------------




const RegisterForm =()=> {
  const [registerUser, { error }] = useMutation(REGISTER_USER);
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: async ({firstName, lastName, email, password}, { setErrors, setSubmitting }) => {

// -------------------------------------------------------------------------
        try {
            const  {data}  = await registerUser({ variables: {firstName, lastName, email, password} });
            tokenAuth.login(data.register.token);
            setSubmitting(false); 
          } catch (e) {
            console.log(error instanceof Error);
            console.error(e);
            setErrors(true);
          }
        // needs: setSubmitting hook, setErrors hook
// ---------------------------------------------------------------------------

// snackbar optional
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
           <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Confirm Password"
            {...getFieldProps('confirmPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
          {error && <div>Signup failed</div>}
        </Stack>
      </Form>
    </FormikProvider>
  );
}

export {RegisterForm};