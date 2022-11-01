import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SignIn from './SignIn';

const Resetpassword = () => {
      const href = window.location.href;
    const token = href.slice(45) 
    const resetLink = token;
    
   
        const [newPass, SetnewPass] = useState('');
    const [controlPassword, setControlPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
         const [eye, seteye] = useState(true);
  
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
    const [request, setRequest] = useState(false);
    const sendRquest = async () => {
        


 const res =  await axios
            .put(`${process.env.REACT_APP_URL_USER}/reset-password`,
                
 {
 
     resetLink,
     newPass
   
              }
 ).catch(error => {

     console.log(error)
     setErrorPassword('')
       if (error.response.data.message.includes("Incorect Token ou votre token est expirer")) {
           setErrorPassword("Le temps de validation a expirer, reprenez svp.")
   }  
       if (error.response.data.message.includes("L'utilisateur avec ce token n'existe pas")) {
           setErrorPassword("Votre compte n'existe pas.")
     }  
       if (error.response.data.message.includes("Erreur de changement de mot de passe")) {
           setErrorPassword("Erreur de changement de mot de passe")
     }  
       if (error.response.data.message.includes("authentification erreur")) {
           setErrorPassword("Erreur d'authentifcation, reprenez svp.")
     }  
     
 })
                
    const data = await res.data;
    return data;
}
    const handleSubmit = async (e) => {

        e.preventDefault();
     
           setErrorPassword('')
   if (newPass !== controlPassword) return setErrorPassword('les mots de passe ne correspondent pas')
   
        if (newPass.length <= 6) return setErrorPassword('Le Mot de passe est trop faible')
        
    
 else sendRquest().then(() => setRequest(true) )
        
        
      
  }
    return (
        <div>
            {
                request ? <>
                    <SignIn /> 
                    
                </> : 
                    
                    <>
                        
                   <form method='post' onSubmit={handleSubmit}>
              <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={7} padding={3} borderRadius={5}
                    boxShadow={'1px 2px 6px 2px #ccc'}
                    
                    // sx={{
                    //     ":hover": {
                    //         boxShadow: '10px 10px 20px #ccc',
                            
                    //     }
                    // }}
                >
                    <Typography  variant='h6' padding={3} textAlign='center'>
      Mettez un nouveau mot de passe.
                    </Typography>
                   
                                <TextField margin='normal' id='password' type={'text'} variant='outlined' required label='Nouveau mot de passe' value={newPass} onChange={(e) => SetnewPass(e.target.value)} />
                                 <i onClick={Eyeclick}  className={eye ? "fa-solid fa-eye-slash": "fa-solid fa-eye" }  style={{position:'relative',right:'-80px',top:'-45px',fontSize:'16px',cursor:'pointer'}}  aria-hidden="true"  type="button" id="eye"></i>
                    <TextField margin='normal' type={'password'} variant='outlined' required label='Confirmez votre nouveau mot de passe' value={controlPassword} onChange={(e) => setControlPassword(e.target.value)} />
                      <Typography variant='body1' color='error' id='error' >{errorPassword}</Typography>
    
                    <Button type='submit' sx={{marginTop:3,borderRadius:1}} variant='contained'>Envoyer</Button>
           <NavLink style={{textAlign:'right',margin:'15px',position:'relative',right:'-80px',top:'15px'}} to='/'>Go to home</NavLink>
          </Box>
       </form>
                    </>
               }
        </div>
    );
};

export default Resetpassword;