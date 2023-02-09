import CreateIcon from '@material-ui/icons/Create'
import { default as CalendarViewDayIcon, default as ImageIcon } from '@material-ui/icons/Image'
import { CircularProgress } from '@mui/material'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { FeedDTO } from '../../dto/feed'
import feedService from '../../service/feedService'
import classes from './Feed.module.css'
import InputOpion from './InputOpion'
import Post from './Post'
const getFeedFn = async (): Promise<FeedDTO[]> => {
  return await feedService.getFeed()
}

const Feed: FC = () => {
  const { data } = useQuery(['feed'], () => getFeedFn())
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
      {data?.map(eachFeedData => <Post key={eachFeedData.feedId} {...eachFeedData} />) ?? <CircularProgress />}
    </div>
  )
}

export default Feed
