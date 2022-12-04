import React from 'react'
function Post({img, title, desc, longDesc}) {

    
  return (
    <div className='post'>
        <img src={img} alt="postImage" className='postImg'/>
        <span className='postTitle'>{title}</span>
        <p className='postDesc'>{desc}</p>
        <p className='postLongDesc'>{longDesc}</p>
    </div>
  )
}

export default Post