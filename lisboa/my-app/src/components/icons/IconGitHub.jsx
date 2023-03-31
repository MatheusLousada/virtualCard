import React from 'react'
import { ReactComponent as IconGitHubSVG } from '../../icons/IconGitHub.svg'

export function IconGitHub(props) {
  return (
    <div className='h-10 w-10'>
      <IconGitHubSVG {...props} />
    </div>
  )
}

export default IconGitHub;