import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function SideToolbar(): JSX.Element {
  const navigate = useNavigate()

  function moveRoute(i: number): void {
    if (i === 0) navigate('/job')
    else navigate('/job/userinterest')
  }
  return (
    <Box sx={{ width: '20%', minHeight: '95vh' }}>
      <Toolbar
        sx={{
          backgroundColor: '#1976d221',
          alignItems: 'flex-start',
          height: '100%',
          width: '80%',
          position: 'relative',
        }}
      >
        <List sx={{ width: '100%' }}>
          {['채용공고', '찜한공고'].map((text, index) => (
            <ListItem key={index} disablePadding sx={{ whiteSpace: 'nowrap' }}>
              <ListItemButton onClick={() => moveRoute(index)}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </Box>
  )
}
