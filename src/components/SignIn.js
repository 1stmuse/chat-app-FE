import React, {useState} from 'react';

const SignIn = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword]= useState('')

    const submit=()=>{
        props.history.push('/home')

    }
    return (
        <div className='signIn'>
            <div><h1>Compare text with ease !!</h1></div>
            <div className='signIn-card'>
                <div className='text-input'>
                    <input 
                        type='text' 
                        value={userName} 
                        placeholder='username'
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
                <div className='password-input'>
                    <input 
                        type='password' 
                        value={password} 
                        placeholder='password'
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className='login-btn'onClick={submit} >Login</div>
            </div>
        </div>
    );
};

export default SignIn;