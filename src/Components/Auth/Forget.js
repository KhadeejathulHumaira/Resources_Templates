import React, { useState } from 'react'
import style from './Forget.module.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function Forget() {
   const [password,setPassword]=useState({
    newPassword:'',
    confirmPassword:''
    })
   const [passwordShow,setPasswordShow]=useState({isShow:false})
   const [confirmPasswordShow,setConfirmPasswordShow]=useState({isShow:false})
   const [error,setError]=useState({message:false})


   const handleChange=(e)=>{
       setPassword({
           ...password,
           [e.target.name]:e.target.value
       })
   }

   const handleClick=(e)=>{
       console.log(password)
       password.newPassword===password.confirmPassword?
       setError({message:false}):setError({message:true})
       e.preventDefault()
       setPassword({
        newPassword:'',
        confirmPassword:''
       })
   }

   const showPassword=(e)=>{
       setPassword({...password})
       setPasswordShow({isShow:!passwordShow.isShow})
   }
   const reEnterPasswordShow=()=>{
       setPassword({...password})
       setConfirmPasswordShow({isShow:!confirmPasswordShow.isShow})
   }
    return (
        <div className={style.body}>
            <h3 className={style.h3}>Forget Password</h3>
            <div>
                <h4 className={style.h4}>Enter Password</h4>
                <div className={style.password}>
                <input type={passwordShow.isShow?'text':'password'}
                name="newPassword"
                className={style.input}
                value={password.newPassword}
                onChange={handleChange}/>
                {passwordShow.isShow?<VisibilityIcon onClick={showPassword}/>:<VisibilityOffIcon onClick={showPassword}/>}
            </div>
            </div>
            <div>
                <h4 className={style.h4}>Re-Enter Password</h4>
                <div className={style.password}>
                    <input type={confirmPasswordShow.isShow?'text':'password'}
                    name="confirmPassword"
                    className={style.input}
                    value={password.confirmPassword}
                    onChange={handleChange}
                    />
                    {confirmPasswordShow.isShow?<VisibilityIcon onClick={reEnterPasswordShow}/>:<VisibilityOffIcon onClick={reEnterPasswordShow}/>}
                </div>
            </div>
            <div className={style.submit}>
            <button onClick={handleClick} className={style.button}>
                Submit
            </button>
            </div>
            <div>{error.message?<p>Password doesn't match</p>:null}</div>
           
        </div>
    )
}

export default Forget