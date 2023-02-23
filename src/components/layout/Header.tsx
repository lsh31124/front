import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { setLogout } from '../../store/loginSlice'

export default function ButtonAppBar(): React.ReactElement {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginState = useSelector((state: RootState) => {
    return state.login.isLogged
  })

  const logoutHandler = (): void => {
    axios
      .get(process.env.REACT_APP_BACK_BASE_URL + '/logout')
      .then(() => {
        dispatch(setLogout())
        navigate('/')
      })
      .catch(err => {
        alert(err)
        dispatch(setLogout()) //추후 로그아웃 구현시 제거
        navigate('/') //추후 로그아웃 구현시 제거
      })
  }

  let loggedIn = null
  if (loginState == false) {
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
        <Button color="inherit" onClick={logoutHandler}>
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
