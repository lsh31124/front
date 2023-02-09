/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import SideToolbar from '../layout/SideToolbar'
import { Box } from '@mui/material'
import UserInterestList from './UserInterestList'

export default function Job() {
  return (
    <Box sx={{ display: 'flex', width: '90%', margin: '0 auto' }}>
      <SideToolbar />
      <UserInterestList />
    </Box>
  )
}
