import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Box, Button,TextField, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Forgetpassword = () => {
    const [email, Setemail] = useState('');
    const [request, setRequest] = useState(false);
    const [erroremail, Seterroremail] = useState('');
   
    const sendRquest = async () => {
    
 const res =  await axios
            .put(`${process.env.REACT_APP_URL_USER}/forget-password`,
                
 {
 
   email,
   
              }
 ).catch(error => {


        Seterroremail('')
   if (error.response.data.message.includes("L'utilisateur avec cet email n'existe pas")) {
           Seterroremail(error.response.data.message)
   }  
 })
                
    const data = await res.data;
    return data;
}
    const handleSubmit = async (e) => {

    e.preventDefault();
    
 
sendRquest().then(() => setRequest(true) )
        
        
      
  }
    return (
        <>
            {
                request ?
                    <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'center'} justifyContent={'center'}    margin='auto' marginTop={7} padding={3} borderRadius={5}
                    boxShadow={'1px 2px 6px 2px #ccc'}
                    
                    // sx={{
                    //     ":hover": {
                    //         boxShadow: '10px 10px 20px #ccc',
                            
                    //     }
                    // }}
                    >
                             <CheckCircleIcon sx={{fontSize:'38px',color:'green'}} />
                    <Typography sx={{color:'green'}} variant='h6' padding={3} textAlign='center'>
  Nous avons envoyé un e-mail à l'adresse enregistrée avec ce compte contenant des instructions supplémentaires pour récupérer votre mot de passe.
Vous rencontrez toujours des difficultés pour vous connecter ? Veuillez contacter l'assistance.
                    </Typography>
                     <NavLink style={{textAlign:'right',margin:'15px',position:'relative',right:'-80px',top:'15px'}} to='/'>Go to home</NavLink>
             
                    
    
               
       
          </Box>
                : 
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
      Changer votre mot de passe avec votre email.
                    </Typography>
                   
                    <TextField margin='normal' type={'email'} variant='outlined' required label='Votre Email' value={email} onChange={(e) => Setemail(e.target.value)} />
                      <Typography variant='body1' color='error' id='error' >{erroremail}</Typography>
    
                    <Button type='submit' sx={{marginTop:3,borderRadius:1}} variant='contained'>Envoyer</Button>
            <NavLink style={{textAlign:'right',margin:'15px',position:'relative',right:'-80px',top:'15px'}} to='/'>Go to home</NavLink>
          </Box>
       </form>
                    </>
                    

             
       }
        </>
   );
};

export default Forgetpassword;