import React from 'react'
import Facebook from "./facebook.png"
import Google from "./google.png"
import Github from "./github.png"
import Button from '@material-ui/core/Button';
function Login() {
  return (
    <div className='login'>
    <h1 className='loginTitle' style={{fontFamily:"sans-serif"}}>Choose a login method</h1>
    <div className='wrapper'>
        <div className='left'>
        <div className='loginButton facebook'> 
          <img src={Facebook} alt='' className='icon'/>  Facebook
        </div>
        <div className='loginButton google'>
           <img src={Google}  alt='' className='icon'/> Google
       </div>
       <div className='loginButton github'>
          <img src={Github} alt='' className='icon'/> Github
       </div>
        </div>
        <div className='center'>
        <div className='line' />
       </div>
        <div className='right'>
             <label htmlFor='username'>Username</label>
            <input name="username" type="text"/>
            <label htmlFor='password'>Password</label>
            <input name="password" type="password"/>
            <Button style={{backgroundColor:"#25316D", color:"white", width:"100px"}}>Login</Button>
        </div>
    </div>
    </div>
  )
}

export default Login