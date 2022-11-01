import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const history = useNavigate();
  const [email, Setemail] = useState('');

  const [password, Setpassword] = useState('');
  const [eye, seteye] = useState(true);
   const [erroremail, Seterroremail] = useState('');
   const [erroremailtwo, Seterroremailtwo] = useState('');
  
  const Eyeclick = () => {
    seteye(!eye);
    const code = document.getElementById("password");
    if (eye) {
     code.setAttribute("type", "password");
      seteye(false);
    } else {
      
       code.setAttribute("type", "text");
    }
  };
        
    const sendRquest = async () => {
 const res =  await axios
            .post(`http://localhost:7500/api/user/login`,
                
 {
 
   email,
   password
              }
 ).catch(error => {
   console.log(error.response.data.message)
     ;
    Seterroremailtwo('')
   if (error.response.data.message.includes("Le mot de passe ou l'émail est invalid")) {
           Seterroremailtwo(error.response.data.message)
   }     
   
  Seterroremail('')
   if (error.response.data.message.includes("Cet émail n'existe pas, Inscrivez vous")) {
           Seterroremail(error.response.data.message)
   }
            })
                
    const data = await res.data;
    return data;
}
    const handleSubmit = async (e) => {

    e.preventDefault();
    

sendRquest().then(() => history('/home') )
        
        
      
  }
    return (
        <div>
            <form method='post' onSubmit={handleSubmit}>
                <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={7} padding={3} borderRadius={5}
                    boxShadow={'1px 2px 6px 2px #ccc'}
                    
                    // sx={{
                    //     ":hover": {
                    //         boxShadow: '10px 10px 20px #ccc',
                            
                    //     }
                    // }}
                >
                    <Typography  variant='h4' padding={3} textAlign='center'>
         Connectez vous 
                    </Typography>
                   
                    <TextField margin='normal' type={'email'} variant='outlined' required label='Email' value={email} onChange={(e) => Setemail(e.target.value)} />
                    
                    <Typography variant='body1' color='error' id='error' >{erroremail}</Typography>
                    
            <TextField margin='normal' type={'text'} variant='outlined' required label='Mot de passe' id='password' value={password} onChange={(e) => Setpassword(e.target.value)} sx={{ marginTop: '40px' }} />
             <i onClick={Eyeclick}  className={eye ? "fa-solid fa-eye-slash": "fa-solid fa-eye" }  style={{position:'relative',right:'-80px',top:'-45px',fontSize:'16px',cursor:'pointer'}}  aria-hidden="true"  type="button" id="eye"></i>
            <Typography variant='body1' color='error' id='error' >{erroremailtwo}</Typography>
            
                    <Button type='submit' sx={{marginTop:3,borderRadius:1}} variant='contained'>Se connecter</Button>
           <NavLink style={{textAlign:'right',margin:'15px',position:'relative',right:'-80px',top:'15px'}} to='/forget_password'>Mot de passe oublié ?</NavLink>
          </Box>
       </form>
        </div>
    );
};

export default SignIn;