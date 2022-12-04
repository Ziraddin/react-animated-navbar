import React from 'react'
import Button from '@material-ui/core/Button';
function Card({post}) {
  return (
    <div className='card'>
      <span className='title'>{post.title}</span>
      <img src={post.img} alt="postImage" className='img'/>
      <p className='desc'>{post.desc}</p>
      <Button style={{ backgroundColor:"transparent", color: "#5F6F94", cursor: "pointer"}} href={"/post/"+post.id}>Read More</Button>
    </div>
  )
}

export default Card