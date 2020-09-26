import React, { useEffect } from 'react'


const Auth =(Component)=>{
    
    const Main = (props)=>{

        useEffect(()=>{
            const auth = localStorage.getItem('token')
            if(auth !==null){
                props.history.push('/home')
            }else{
                props.history.push('/')
            }
        },[])

        return(
            <Component  {...props} />
        )
    }

    return Main
}

export default Auth