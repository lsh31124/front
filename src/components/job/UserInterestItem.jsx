/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import StarIcon from '@mui/icons-material/Star'

export default function UserInterestItem({ item }) {
  const [like, setLike] = React.useState(false)
  const handleLike = () => {
    setLike(!like)
  }
  return (
    <>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.co_nm}
          secondary={
            <>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                <span>{item.reg_ymd}</span>-<span>{item.ddln_ymd}</span>
              </Typography>
              <br />
              {item.duty_cn}
            </>
          }
        />
        <IconButton aria-label="delete" onClick={handleLike} color={like ? 'silver' : 'primary'}>
          <StarIcon sx={{ fontSize: 35 }} />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}
