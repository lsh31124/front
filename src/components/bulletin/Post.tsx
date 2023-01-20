import { Avatar } from '@mui/material'
import React from 'react'
import InputOpion from './InputOpion'
import classes from './Post.module.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'

{
  /* { name, description, message } */
}
const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <Avatar />
        <div className={classes.post__info}>
          <h2>Name</h2>
          <p>Description</p>
        </div>
      </div>
      <div className={classes.post__body}>
        <p>Message goes here</p>
      </div>
      {/* <div className="post__buttons">
        <InputOpion Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
      </div> */}
    </div>
  )
}

export default Post
