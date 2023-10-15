import React,{useState} from 'react'
import Classes from './admin.module.scss'

const AdminLoginForm = ({setIsLoggedIn}) => {

    const [loginData, setLoginData] = useState({email: '', password: ''})

    const handleInputChange = (e)=>{
        if(e.target.name==='email'){
            setLoginData({...loginData, email: e.target.value});
        }else if(e.target.name==='password'){
            setLoginData({...loginData, password: e.target.value});
        }
    }

    const onLoginClick = async()=>{
        try{
            const response = await fetch(process.env.REACT_APP_API_BASE_URL+'/auth/login',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if(response.ok && response.status === 200){
                const data = await response.json();
                const token = data.token;
                window.localStorage.setItem('token',token)
                window.sessionStorage.setItem('login', 'true')
                setIsLoggedIn('true')
                setLoginData({email: '', password: ''});
            }else{
                console.log('An error occured while login 1', response)
            }
        }catch(error){
            console.log('An error occured while login', error)
        }
    }

  return (
    <div className={Classes.circle}>
    <div className={Classes.internalCircle}>
    <div className={Classes.contactForm}>
        <div className={Classes.email}> 
            <input type='text' name='email' value={loginData.email} onChange={handleInputChange}/>   
            <label>Email address</label>  
        </div>
        <div className={Classes.mobile}>
            <input type='password' name='password' value={loginData.password} onChange={handleInputChange}/> 
            <label>Enter Password</label>
        </div>
        <button className={Classes.contactFormBtn} onClick={onLoginClick}>Login</button>
    </div>
    </div>
    </div>
  )
}

export default AdminLoginForm