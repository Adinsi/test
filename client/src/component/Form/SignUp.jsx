import { Button, Checkbox, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import axios from 'axios';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { NavLink } from 'react-router-dom';
import SignIn from './SignIn';

const SignUp = () => {
     const [formSubmit, setFormSubmit] = useState(false);
  
    const [nom, Setnom] = useState('');
    
  const [prenom, Setprenom] = useState('');

     const [ville, Setville] = useState('');
  const [activite, Setactivite] = useState('');
  const [tel, SetTel] = useState('');
     const [email, Setemail] = useState('');

     const [erroremail, Seterroremail] = useState('');
  const [password, Setpassword] = useState('');
  const [errorpassword, Seterrorpassword] = useState('');
  const [Confimpassword, SetConfirmpassword] = useState('');


 
 
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
  const sendRquest = async () => {
    

    
 const res =  await axios
            .post(`http://localhost:7500/api/user/register`,
                
 {
         nom,
   prenom,
   email,
   ville,
   activite,
   tel,
   password
              }
 ).catch(error => {
     Seterroremail('')
   if (error.response.data.message.includes("L'utilisateur existe déja ! connecter vous")) {
           Seterroremail(error.response.data.message)
   }
      
   
            })
                
    const data = await res.data;
    return data;
}
     const handleSubmit = async (e) => {
         e.preventDefault();

       
       
     
   
     
         Seterrorpassword('')
 
         if (password !== Confimpassword) return Seterrorpassword('Les mots de passe ne correspondent');
         if(password.length<=6) return Seterrorpassword('Le Mot de passe est trop faible')
             
         else return sendRquest().then(() => {
                Seterrorpassword('')
                setFormSubmit(true);
             });
         
       


     
  }

    return (
        <div>
        {
                formSubmit ? (
                    <>
                        <SignIn />
                    </>
                ) : 
                        <>
                            <form  method='post' onSubmit={handleSubmit}>
                            <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={5} padding={3} borderRadius={5}
                                // boxShadow={'5px 5px 10px #ccc'}
                //     sx={{
                //         ":hover": {
                //             boxShadow: '10px 10px 20px #ccc',
                            
                            // }}}
                            >
                    <Typography  variant='h4' padding={3} textAlign='center'>
         Inscrivez vous 
                    </Typography>
                    <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}>

                                    <TextField sx={{ marginRight: 1 }} margin='normal' type={'text'} variant='outlined' required label='nom' value={nom} onChange={(e) => Setnom(e.target.value)
                            
                                    }
                                        
                                   
                  
                        />
                        
                        <TextField margin='normal' type={'text'} variant='outlined' required label=' Prenom' value={prenom} onChange={(e) => Setprenom(e.target.value)}
                   
                        />
                    </Box>

                    <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}>
                        <TextField sx={{ marginRight: 1 }} margin='normal' type={'email'} variant='outlined' required label=' email' value={email} onChange={(e) => Setemail(e.target.value)}
                                        
                                     
                        />
                                    <TextField margin='normal'
                                            maxLength={8} minLength={8} 
                                        type={'text'} variant='outlined' required label='Tel' value={tel}
                                        defaultValue='00000000'
                                        onChange={(e) => SetTel(e.target.value)}
                                        inputProps={{ maxLength: 8}}

                                     
                        />
                                </Box>
                                   <Typography variant='body1' color='error' id='error' >{erroremail}</Typography>
                                <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}
                               
                                >
                        <TextField sx={{ marginRight: 1 }} margin='normal' type={'text'} variant='outlined' required label=' Qaurtier' value={ville} onChange={(e) => Setville(e.target.value)}
                           
                        />
                        <TextField margin='normal' type={'text'} variant='outlined' required label=" domaine d'activité" value={activite} onChange={(e) => Setactivite(e.target.value)}
                  
                        />
                    </Box>
                    <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}>
                                    <TextField sx={{ marginRight: 1 }}  margin='normal' type={'text'} variant='outlined' required label='Mot de passe' value={password} onChange={(e) => Setpassword(e.target.value)}

                                       id='password'
                               
                               
                                    />
                                    <i onClick={Eyeclick}  className={eye ? "fa-solid fa-eye-slash": "fa-solid fa-eye" }  style={{position:'relative',right:'50px',top:'5px',fontSize:'16px',cursor:'pointer'}}  aria-hidden="true"  type="button" id="eye"></i>
                                  
                                    
                        <TextField margin='normal' type={'password'} variant='outlined' required label='confirmez  Mot de passe' value={Confimpassword} onChange={(e) => SetConfirmpassword(e.target.value)}
                       
                        />
                                </Box>
                                <Typography variant='body1' color='error' id='error' >{errorpassword}</Typography>
                        <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}>
                         
                                    <Checkbox
                                        required
 type='checkbox'

  inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <NavLink to='/condtion_generale'>J'accepte les condition générales d'utilisation</NavLink>
                                </Box>
                    
                    <Button type={'submit'} sx={{marginTop:3,borderRadius:1}} variant='contained'>S'inscrire</Button>
                            </Box>
                               
       </form>
                        </>
                    
            
        }
        </div>
    );
};

export default SignUp;