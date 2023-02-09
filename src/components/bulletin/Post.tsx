import { Avatar } from '@mui/material'
import { FC } from 'react'
import { FeedDTO } from '../../dto/feed'
import classes from './Post.module.css'

export type PostProps = FeedDTO

const Post: FC<PostProps> = ({ userName, content, profileSrc, message }) => {
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <Avatar src={profileSrc} />
        <div className={classes.post__info}>
          <h2>{userName}</h2>
          <p>{content}</p>
        </div>
      </div>
      <div className={classes.post__body}>
        <p>{message}</p>
      </div>
      {/* <div className="post__buttons">
        <InputOpion Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
      </div> */}
    </div>
  )
}

export default Post
