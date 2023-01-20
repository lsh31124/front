import { Avatar } from '@mui/material'
import React from 'react'
import classes from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__top}>
        <img src="" alt="" />
        <Avatar className={classes.sidebar__avatar} />
        <h2>회원 아이디</h2>
        <div className={classes.sidebar__profile}>
          <button>프로필 수정하기 </button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
