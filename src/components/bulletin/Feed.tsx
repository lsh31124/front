import React from 'react'
import classes from './Feed.module.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOpion from './InputOpion'
import ImageIcon from '@material-ui/icons/Image'
import CalendarViewDayIcon from '@material-ui/icons/Image'
import Post from './Post'

const Feed = () => {
  return (
    <div className={classes.feed}>
      <div className={classes.feed__inputContainer}>
        <div className={classes.feed__input}>
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={classes.feed__inputOptions}>
          <InputOpion Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOpion Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>
      {/* name="Name" description="description" message="message" */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
