import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import React, { FocusEvent, forwardRef, RefObject, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pages from './pages'

type Props = {
  setPage: React.Dispatch<React.SetStateAction<Pages>>
}

export type UserIdRef = {
  emailRef: RefObject<HTMLInputElement>
  userPwRef: RefObject<HTMLInputElement>
}

const UserId = forwardRef<UserIdRef, Props>((props, ref) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const userPwRef = useRef<HTMLInputElement>(null)

  const [emailValid, setEmailValid] = useState<boolean>(true)

  const navigate = useNavigate()

  useImperativeHandle(ref, () => ({
    emailRef: emailRef,
    userPwRef: userPwRef,
  }))

  useEffect(() => {
    if (emailRef.current?.value == '') {
      emailRef.current?.focus()
    }
  })

  const isEmail = (val: string): boolean => {
    const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    const result: boolean = expression.test(val) // true

    setEmailValid(false)
    return result
  }

  const emailCheck = (email: string): void => {
    const baseURL = process.env.REACT_APP_BACK_BASE_URL

    const option = {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': "application/json';charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
      }),
    }

    // axios
    //   .post(baseURL + '/emailCheck', option)
    //   .then(response => {
    //     if (response.data == false) {
    //       setEmailValid(true)
    //     } else if (response.data == true) {
    //       setEmailValid(false)
    //     }
    //   })
    //   .catch(err => {
    //     alert(err)
    //     setEmailValid(false)
    //   })
    setEmailValid(true)
  }

  const onChangeEmail = (e: FocusEvent<HTMLInputElement>): void => {
    const val = e.target.value

    if (isEmail(val)) {
      emailCheck(val)
    }
  }

  const submit = (): void => {
    if (emailValid === true && userPwRef.current?.value != '') {
      const baseURL = process.env.REACT_APP_BACK_BASE_URL

      const data = {
        email: emailRef.current?.value,
        password: userPwRef.current?.value,
      }

      axios
        .post(baseURL + '/register', data, {
          headers: {
            'Content-Type': `application/json`,
          },
        })
        .then(() => {
          navigate('/login', {
            state: {
              email: emailRef.current?.value,
              userPw: userPwRef.current?.value,
            },
          })
        })
        .catch(err => {
          alert(err)
        })
    }
  }

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      submit()
    }
  }

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            error={emailValid === false ? true : false}
            id="email"
            label="이메일 주소"
            name="email"
            autoComplete="email"
            onBlur={onChangeEmail}
            inputRef={emailRef}
            helperText={emailValid ? '' : '유효하지 않은 이메일 형식입니다'}
            onKeyPress={handleOnKeyPress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            type="password"
            id="userPw"
            label="비밀번호"
            autoComplete="new-password"
            inputRef={userPwRef}
            onKeyPress={handleOnKeyPress}
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        onClick={(): void => {
          submit()
        }}
        sx={{ mt: 3, mb: 2 }}
      >
        다음
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item></Grid>
      </Grid>
    </Box>
  )
})

UserId.displayName = 'UserId'
export default UserId
