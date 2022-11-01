import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


  
const Notfound = () => {
    const [error,setError] = useState('')
    useEffect(() => {
        setError('')
        if (navigator.onLine) {
     setError("Un problème de serveur, ou vous n'ètes plus connecter")
        }
        else {
          setError("Assurez vous d'avoir une connexion internet active ou reconnectez vous")
        }
},[])
    return (
        <div style={{backgroundColor:'#F4F5F4',overflowY:'hidden'}}>
             <NavLink to='/'>
                <i style={{position:'absolute',top:'1%',fontSize:'30px',color:'#000'}} class="fa-solid fa-arrow-left"></i>
            
            </NavLink>
          
            <img style={{ width: '100%', height: '100vh', objectFit: 'contain' }} src='./uploads/profil/pikabu.gif' alt='git_error_404' />
            <h3 style={{ position: 'absolute', top: '20%', left: '20%' , zIndex: '100', color: 'red', fontSize: '22px' }}>{error}</h3>
        </div>
    );
};

export default Notfound;