import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setLogin } from '../../store/loginSlice'
import styles from './Login.module.css'
const theme = createTheme()

export default function Login(): React.ReactElement {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const json = {
      email: data.get('email'),
      password: data.get('password'),
    }

    axios
      .post(process.env.REACT_APP_BACK_BASE_URL + '/login', json, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
      .then(res => {
        if (res.data.success == true) {
          const email = json.email != null ? json.email : ''
          dispatch(setLogin(email.toString()))
          navigate('/')
        } else if (res.data.success == false) {
          alert('로그인에 실패하였습니다\n' + 'error :' + res.data.message)
        } else {
          alert(res)
        }
      })
      .catch(err => {
        alert(err)
      })
  }

  const location = useLocation()

  const emailRef = React.useRef<HTMLInputElement>(null)
  const userPwRef = React.useRef<HTMLInputElement>(null)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Login
          </Typography>
          <div className={styles.mount1}>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email 주소"
                name="email"
                autoComplete="email"
                defaultValue={location.state != null ? location.state.email : ''}
                inputRef={emailRef}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                defaultValue={location.state != null ? location.state.userPw : ''}
                inputRef={userPwRef}
                autoComplete="current-password"
              />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

declare module '*.module.css'
