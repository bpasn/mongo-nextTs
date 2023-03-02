import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAppDispatch, useAppSelector } from '@/redux/Hooks';
import { userAction } from '@/redux/actions/usersAction';
import { useSelector } from 'react-redux';

type Props = {}

const RegisterScreen = (props: Props) => {
    const dispatch = useAppDispatch()
    const userSignin = useAppSelector((state) => state.userSignin)
    const { loading, payload } = userSignin as any
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')?.toString() as string;
        const password = data.get('password')?.toString() as string;
        const firstName = data.get('firstname')?.toString() as string;
        const lastName = data.get('lastname')?.toString() as string;
        const passwordConfirmation = data.get('confirmpassword')?.toString() as string;
        dispatch<any>(userAction({ email, password, firstName, lastName, passwordConfirmation }))
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="firstname"
                                label="Firstname"
                                name="firstname"
                                autoComplete='firstname'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="lastname"
                                label="Lastname"
                                id="lastname"
                                autoComplete='lastname'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="email"
                                label="Email address"
                                type="email"
                                id="email"
                                autoComplete='email'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="password"
                                type="password"
                                id="password"
                                autoComplete='password'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirmpassword"
                                label="Confirm password"
                                type="password"
                                id="confirm_password"
                                autoComplete='confirmpassword'
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {loading ? '....loading' : 'Sign Up'}
                    </Button>
                </Box>
            </Box>
        </Container>

    )
}

export default RegisterScreen

