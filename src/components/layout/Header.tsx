import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { logoutAction } from '../../store/loginSlice'
import instance from '../../util/http'

export default function ButtonAppBar(): React.ReactElement {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: RootState) => {
    return state.login.token === null
  })

  let loggedIn = null
  if (isLoggedIn === true) {
    loggedIn = (
      <>
        <Button color="inherit" onClick={(): void => navigate('/signUp')}>
          Sign Up
        </Button>
        <Button color="inherit" onClick={(): void => navigate('/login')}>
          Login
        </Button>
      </>
    )
  } else {
    loggedIn = (
      <>
        <Button
          color="inherit"
          onClick={() => {
            {
              instance
                .get('/logout', {
                  validateStatus: status => {
                    return status >= 200 && status <= 302
                  },
                })
                .then(() => {
                  dispatch(logoutAction())
                  navigate('/')
                })
                .catch(err => {
                  console.log(err)
                })
            }
          }}
        >
          logout
        </Button>
      </>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">main</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/test">test</Link>
          </Typography>
          <Button color="inherit" onClick={(): void => navigate('/job')}>
            Job
          </Button>
          {loggedIn}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
