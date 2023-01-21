/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react'
import List from '@mui/material/List'
import { Box } from '@mui/material'
import UserInterestItem from './UserInterestItem'
import CircularProgress from '@mui/material/CircularProgress'
import useAxios from '../../hooks/UseAxios'

export default function UserInterestList() {
  const apiKey = process.env.REACT_APP_JOBAPI_KEY
  const { response, loading } = useAxios({
    method: 'get',
    url: `/4050000/realtmeplymt/getRealtmeplymt?serviceKey=${apiKey}&numOfRows=20&pageNo=1`,
    config: {
      params: {
        duty_cn: '웹',
      },
    },
  })

  return (
    <Box sx={{ width: '70%', marginLeft: '2rem' }}>
      <h2 style={{ marginTop: '2rem' }}>찜한공고</h2>
      <List sx={{ width: '100%' }}>
        {loading ? (
          <Box colSpan={6} sx={{ textAlign: 'center' }}>
            <CircularProgress size={'10rem'} />
          </Box>
        ) : (
          <Box>
            {response &&
              response.items.slice(0, 5).map((item, idx) => {
                return <UserInterestItem key={idx} item={item} />
              })}
          </Box>
        )}
      </List>
    </Box>
  )
}
