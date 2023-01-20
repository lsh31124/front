import React from 'react'
import SideBar from './SideBar'
import classes from './Bulletin.module.css'
import Feed from './Feed'
import Widget from './Widget'

const Bulletin: React.FC = () => {
  return (
    <div className={classes.bulletin}>
      <div className={classes.bulletin__body}>
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </div>
  )
}

export default Bulletin
