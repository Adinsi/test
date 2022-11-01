import React, { useState } from 'react';
import {Button} from '@mui/material'
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Box } from '@mui/system';

const Formulaire = () => {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);
    const handleModals = (e) => {
        if (e.target.id === 'register') {
            setSignInModal(false)
            setSignUpModal(true)
        }
        else if(e.target.id ==='login') {
            setSignInModal(true)
            setSignUpModal(false)
        }
    }
    return (
      
        <Box margin='auto' sx={{ marginTop: 3 }}  >
            
            <div style={{display:'flex', margin:'auto', alignItems:'center',justifyContent:'center'}}>
                  <p> <Button  sx={{ marginRight: 1 }}id='register'variant='outlined' className={signUpModal ? 'active-btn':null} onClick={handleModals}>
Inscription
            </Button></p>
                <p>
                         <Button   id='login' variant='outlined'  className={signInModal ? 'active-btn':null} onClick={handleModals} >
Connexion
            </Button> 
       </p>
             </div>

            <div>
                
                    {
                  signUpModal && <SignUp  />
                }
                    {
                        signInModal && <SignIn />
                    }
          </div>
      
                    </Box>
    );
};

export default Formulaire;