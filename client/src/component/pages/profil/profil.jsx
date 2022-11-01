import React, { useEffect, useState } from 'react';
import Navbar from '../../navigation/navbar';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setgetUsers } from "../../../features/user.reducers";
import Notfound from '../notfound';
import '../../styles/profil.scss'
import { NavLink } from 'react-router-dom';
import Editprofil from './editprofil';
import Postprofil from './postprofil';
import { Icon } from '@mui/material';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { setgetusers } from '../../../features/users.reducers';

const Profil = () => {
    const [editProfil, seteditProfil] = useState(true);
    const [postProfil, setpostProfil] = useState(false);
    const handleModals = (e) => {
        if (e.target.id === 'edit') {
            setpostProfil(false)
            seteditProfil(true)
        }
        else if(e.target.id ==='post') {
            setpostProfil(true)
            seteditProfil(false)
        }
    }
  const dispatch = useDispatch();
 const user = useSelector((state) => state.user.user);
    
    const sendRquest = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_URL_USER}/jwt`,
      {
        withCredentials: true,
      }
    );
    // .catch(err => console.log(err));
    const data = await res.data;
    return data;
    };
    
    useEffect(() => {
        sendRquest().then((data) => {
      dispatch(setgetUsers(data.user));
    });
    })
const users = useSelector((state) => state.users.users);


    const sendRquestUsers = async () => {
      const res = await axios
        .get(`${process.env.REACT_APP_URL_USER}`, {
          withCredentials: true,
        })
        // .catch((err) => console.log(err));
      const data = await res.data;
      return data;
  };
      useEffect(() => {
      sendRquestUsers().then((data) => {
        dispatch(setgetusers(data));
        
      });
    });
 
    return (
        <>
         
            {
                user ? 
                    <>
                        <Navbar />
             
<div id='profil' className="container">
   <div className="row">
      <div className="col-md-12">
         <div id="content" className="content content-full-width">
         
            <div className="profile">
               <div className="profile-header">
               
                  <div className="profile-header-cover"></div>
               
                  <div className="profile-header-content">
             
                     <div className="profile-header-img">
                        <img src={user.picture} alt="" />
                     </div>
                   
                     <div className="profile-header-info">
                                           <h4 className="m-t-10 m-b-5">
                                                <Icon>
                                    <AccountCircleRoundedIcon /> 
                                </Icon> 
                                              {user.nom} {user.prenom}</h4>
                        <p className="m-b-10">  <Icon>
                                    <WorkRoundedIcon /> 
                                </Icon> <span style={{fontWeight:'bold'}}> {user.activite}</span></p>
                                           <p className="m-b-10"> <Icon>
                                    <AddHomeIcon /> 
                                </Icon>  Habite à {user.ville}</p>
                                      
                                           {/* <p>
                                              
                                           <Editprofil/>
                                           </p> */}
                      
                     </div>
                  
                  </div>
              
                  <ul className="profile-header-tab nav nav-tabs">
                                        <li className="nav-item" id='edit' style={{fontSize:'16x',marginRight:'10px',marginTop:'40px',cursor:'pointer',fontWeight:'bolder',textDecoration:'underline'}} onClick={handleModals}>MES POSTS</li>
                                        
                                        <li id='post'style={{fontSize:'16x',marginRight:'10px',marginTop:'40px',cursor:'pointer',fontWeight:'bolder',textDecoration:'underline'}} onClick={handleModals}
                                           className="nav-item nav-link">MON PROFIL</li>
                                        <br></br><br></br><br></br>
                                        
                     {/* <li className="nav-item"><a href="https://www.bootdey.com/snippets/view/profile-photos" target="__blank" className="nav-link_">PHOTOS</a></li>
                     <li className="nav-item"><a href="https://www.bootdey.com/snippets/view/profile-videos" target="__blank" className="nav-link_">VIDEOS</a></li>
                     <li className="nav-item"><a href="https://www.bootdey.com/snippets/view/bs4-profile-friend-list" target="__blank" className="nav-link_ active show">FRIENDS</a></li> */}
                  </ul>
             
               </div>
            </div>
                               <>
                                  
                                               {
             editProfil &&  <Postprofil />
                }
                    {
                        postProfil && <Editprofil/>
                    }
                               
                               </>
         
         </div>
      </div>
   </div>
</div>
                    </>
          
            : 
                    <>
                    <Notfound/>
                    </>
                
   }
        </>
    );
};

export default Profil;