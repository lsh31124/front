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
import { JobItemType } from './DummyList'

interface JobInterestItemProps {
  item: JobItemType
}

export default function UserInterestItem({ item }: JobInterestItemProps): React.ReactElement {
  const { conm, regymd, ddlnymd, dutycn } = item

  const [like, setLike] = React.useState(false)
  const handleLike = (): void => setLike(!like)

  return (
    <>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={conm}
          secondary={
            <>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                <span>{regymd}</span>-<span>{ddlnymd}</span>
              </Typography>
              <br />
              {dutycn}
            </>
          }
        />
        <IconButton aria-label="delete" onClick={handleLike} color={like ? 'inherit' : 'primary'}>
          <StarIcon sx={{ fontSize: 35 }} />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}
