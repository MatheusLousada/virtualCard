import React from 'react'
import { ReactComponent as IconLinkedinSVG } from '../../icons/IconLinkedin.svg'

export function IconLinkedin(props) {
  return (
    <div className='h-10 w-10'>
      <IconLinkedinSVG {...props} />
    </div>
  )
}

export default IconLinkedin;