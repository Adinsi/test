import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setgetUsers } from '../../features/user.reducers';
import Navbar from '../navigation/navbar';
import Notfound from './notfound';

const Help = () => {
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
    return (
        <>
            { user ?
                <>
            <Navbar />  
            je suis help
                </> : <>
<Notfound/>
            </>
        }
        </>
    );
};

export default Help;