import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Stack, TextField, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
//For backend routes
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql';
import tokenAuth from '../../auth/webtoken';

// ----------------------------------------------------------------------

const LoginForm = () => {
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async ({email, password}, { setErrors, setSubmitting }) => {
      try {
        const {data} = await loginUser({variables: {email, password}});
        console.log(data);
        tokenAuth.login(data.login.token);
        setSubmitting(false);
      } catch (e) {
        console.log(error instanceof Error);
        console.error(e);
        setErrors(true);
        setSubmitting(false);
      }
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && (
            <Alert severity='error'>{errors.afterSubmit}</Alert>
          )}

          <TextField
            fullWidth
            autoComplete='username'
            type='email'
            label='Email address'
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete='current-password'
            type={'password'}
            label='Password'
            {...getFieldProps('password')}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            loading={isSubmitting}
          >
            Sign in
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export { LoginForm };
