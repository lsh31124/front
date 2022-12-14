import React from 'react'

export interface TitleProps {
  /**
   * 보여주고 싶은 텍스트입니다
   */
  text?: string
}

/**
 * 타이틀 컴포넌트
 *
 * - 타이틀 컴포넌트입니다
 */
function Title({ text }: TitleProps) {
  return <div>{text}</div>
}

export default Title
