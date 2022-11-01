import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navigation/navbar';
import Notfound from './notfound';
import '../styles/search.scss';
import { setgetUsers } from '../../features/user.reducers';
import axios from 'axios';

const Search = () => {
       const [search, setSearch] = useState('');
    
  const [all, setAll] = useState(false)
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

    useEffect(() => {
        
    })
    return (
        <>
            {
                user ? <>
            <Navbar />
            je suis recherche
           
                </> : <>
                <Notfound/>
                    </>
        }
        </>
    );
};

export default Search;