import * as React from 'react'
import List from '@mui/material/List'
import { Box } from '@mui/material'
import UserInterestItem from './UserInterestItem'
import CircularProgress from '@mui/material/CircularProgress'
import { dummyData } from './DummyList'

export default function UserInterestList(): React.ReactElement {
  const data = dummyData
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <Box sx={{ width: '70%', marginLeft: '2rem' }}>
      <h2 style={{ marginTop: '2rem' }}>찜한공고</h2>
      <List sx={{ width: '100%' }}>
        {loading ? (
          <Box style={{ textAlign: 'center' }}>
            <CircularProgress size={'10rem'} />
          </Box>
        ) : (
          <Box>
            {data &&
              data.map((item, idx) => {
                return <UserInterestItem key={idx} item={item} />
              })}
          </Box>
        )}
      </List>
    </Box>
  )
}
