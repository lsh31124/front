import SideToolbar from '../layout/SideToolbar'
import Box from '@mui/material/Box'
import JobList from './JobList'

export default function UserInterest(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', width: '90%', margin: '0 auto' }}>
      <SideToolbar />
      <JobList />
    </Box>
  )
}
