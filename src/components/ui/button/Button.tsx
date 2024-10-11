import React from 'react'

interface ButtonProps {
  onClick?: () => void
  classNames: string
  type?: 'button' | 'submit' | 'reset'
  text: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  classNames,
  type = 'button',
  text
}) => {
  return (
    <button onClick={onClick} className={classNames} type={type}>
      {text}
    </button>
  )
}

export default Button
