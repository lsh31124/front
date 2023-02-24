import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React, { useRef, useState } from 'react'
import Pages from './pages'
import styles from './SignUp.module.css'
import UserId, { UserIdRef } from './UserId'
import UserName, { InputRefs } from './UserName'
const theme = createTheme()

export default function SignUp(): React.ReactElement {
  const [page, setPage] = useState<Pages>(Pages.userId)
  const userIdRef = useRef<UserIdRef>(null)
  const userNameRef = useRef<InputRefs>(null)

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
          <Typography component="h1" variant="h5"></Typography>
          Sign Up
          <React.Fragment>
            <Box className={styles.mount1}>
              {page == Pages.userId && <UserId setPage={setPage} ref={userIdRef}></UserId>}
              {page === Pages.userName && <UserName setPage={setPage} ref={userNameRef}></UserName>}
            </Box>
          </React.Fragment>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
declare module '*.module.css'
