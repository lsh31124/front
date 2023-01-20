import React from 'react'
import classes from './InputOpion.module.css'
import ImageIcon from '@material-ui/icons/Image'

interface InputOpionProps {
  Icon: typeof ImageIcon
  title: string
  color: string
}

const InputOpion: React.FC<InputOpionProps> = ({ Icon, title, color }) => {
  return (
    <div className={classes.inputOption}>
      <Icon style={{ color: color }} />
      <h4> {title} </h4>
    </div>
  )
}

export default InputOpion
