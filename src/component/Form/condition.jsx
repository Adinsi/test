import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Condition = () => {
    return (
        <>
        <AppBar position="static">
            <NavLink to='/'>
                <i style={{position:'absolute',top:'1%',fontSize:'30px',color:'white'}} class="fa-solid fa-arrow-left"></i>
            
            </NavLink>

         
            <Toolbar sx={{margin:'auto'}} variant="dense">
               
    <Typography  variant="body1" color="inherit" component="div">
    condition d'utilisation de SearchMeri
    </Typography>
  </Toolbar>
            </AppBar>
            <div style={{backgroundColor:'whitesmoke'}}>
                <h2 style={{textAlign:'center',padding:'10px'}}>Politique de Confidentialité</h2>
                <h3 style={{textAlign:'left',padding:'10px',textDecoration:'underline',borderLeft:'3px solid #0E1D34',marginLeft:'10px'}}>Qu’est-ce que la Politique de confidentialité et que couvre-t-elle ?</h3>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>Chez SearchMeri, nous souhaitons que vous compreniez quelles informations nous recueillons et comment nous les utilisons et les partageons. C’est pourquoi nous vous encourageons à lire notre Politique de confidentialité. Cela vous permet d’utiliser les Produits SearchMeri de la manière qui vous convient le mieux.
                    Dans cette Politique de confidentialité, nous expliquons comment nous recueillons, utilisons, partageons, stockons et transférons les informations. </p>
                <h3 style={{textAlign:'left',padding:'10px',textDecoration:'underline',borderLeft:'3px solid #0E1D34',marginLeft:'10px'}}>Quelles informations recueillons-nous ?</h3>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>Sur SeachMeri, vous pouvez faire des recherches, entrez en contact avec des personnes que vous aimerez avoir comme cercle d'ami. Nous appelons « activité » tout ce que vous faites sur nos produits. Nous recueillons des informations relatives à votre activité sur nos Produits ainsi que les , notamment :

                    <ol>
                        <li>
                            Le contenu que vous créez, comme les publications, les commentaires ou les réaction sur des posts.

                        </li>
                     
                    </ol>
                </p>
                <h3 style={{textAlign:'left',padding:'10px',textDecoration:'underline',borderLeft:'3px solid #0E1D34',marginLeft:'10px'}}>Comment utilisons-nous vos informations ?</h3>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>Nous utilisons les informations que nous reccueillons pour vous fournir une expérience personnalisée, par le biais de publicités notamment, ainsi qu’à d’autres fins expliquées en détail ci-dessous.
                    <h4>Pour offrir, personnaliser et améliorer nos Produits</h4>
                </p>
                <h3 style={{textAlign:'left',padding:'10px',textDecoration:'underline',borderLeft:'3px solid #0E1D34',marginLeft:'10px'}}>Combien de temps conservons-nous vos informations ?</h3>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>Nous conservons des informations tant que nous en avons besoin pour fournir nos Produits, respecter des obligations légales, ou protéger nos intérêts ou ceux d’autrui. Nous décidons combien de temps nous avons besoin des informations au cas par cas. Voici les éléments que nous prenons en considération au moment de prendre notre décision :</p>
                <h3 style={{ textAlign: 'left', padding: '10px', textDecoration: 'underline', borderLeft: '3px solid #0E1D34', marginLeft: '10px' }}>  Comment saurez-vous que la politique a été modifiée ?</h3>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>

Nous vous préviendrons avant d’apporter des modifications substantielles à la présente Politique. Vous aurez ainsi la possibilité d’examiner la Politique révisée avant de choisir si vous voulez continuer à utiliser nos Produits.
                </p>
            </div>
        </>
       
    );
};

export default Condition;