import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import React, { forwardRef, RefObject, useEffect, useImperativeHandle, useRef } from 'react'
import Pages from './pages'

type Props = {
  setPage: React.Dispatch<React.SetStateAction<Pages>>
}

export type InputRefs = {
  userNameRef: RefObject<HTMLInputElement>
}

const UserName = forwardRef<InputRefs, Props>((props, ref) => {
  const userNameRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    userNameRef: userNameRef,
  }))

  useEffect(() => {
    userNameRef.current?.focus()
  })

  return (
    <>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="userName"
              label="이름"
              name="userName"
              autoComplete="이름"
              inputRef={userNameRef}
              sx={{ mt: 3, mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          다음
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item></Grid>
        </Grid>
      </Box>
    </>
  )
})
UserName.displayName = 'UserName'

export default UserName
