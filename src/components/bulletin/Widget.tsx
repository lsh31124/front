import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import classes from './Widget.module.css'

const Widget = () => {
  return (
    <div className={classes.widgets}>
      <div className={classes.widgets__header}>
        <h2>title</h2>
        <InfoIcon />
      </div>
    </div>
  )
}

export default Widget
