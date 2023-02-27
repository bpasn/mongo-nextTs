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
import { useAppDispatch } from '@/redux/Hooks';
import { userAction } from '@/redux/actions/usersAction';

type Props = {}

const LoginScreen = (props: Props) => {
    const dispatch = useAppDispatch()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email') || '';
        const password = data.get('password') || ''
        if (data.get('email') !== '' || data.get('password') !== '') {
            dispatch<any>(userAction(email.toString(), password.toString()))
        }
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
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>

    )
}

export default LoginScreen

