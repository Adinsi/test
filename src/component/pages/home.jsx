import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navigation/navbar';
import { useDispatch, useSelector } from 'react-redux';
import Notfound from './notfound';
import { setgetUsers } from '../../features/user.reducers';
axios.defaults.withCredentials = true;
const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

  const sendRquest = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_URL_USER}/jwt`,
      {
        withCredentials: true,
      }
    )
      .catch(err => {
       
     
      })
  ;
    const data = await res.data;
    return data;
    };
    
    useEffect(() => {
        sendRquest().then((data) => {
      dispatch(setgetUsers(data.user));
    });
    })
    
    return (
        <>
         
            {
                user ? (
                    <>
              <Navbar />
              je suis accueil
                    </>
                ) : 
                    <>
                    <Notfound/>
                    </>
                
   }
        </>
    );
};

export default Home;