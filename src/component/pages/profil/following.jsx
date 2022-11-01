/* eslint-disable array-callback-return */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { setgetusers } from '../../../features/users.reducers';
import Handlerfollow from './handlerfollow';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Following() {
    const [expanded, setExpanded] = React.useState(false);
        const userData = useSelector((state) => state.user.user);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //MEs fonctions
 
  const users = useSelector((state) => state.users.users);
console.log(users,userData.following)

     const dispatch = useDispatch();
    const sendRquest = async () => {
      const res = await axios
        .get(`${process.env.REACT_APP_URL_USER}`, {
          withCredentials: true,
        })
        // .catch((err) => console.log(err));
      const data = await res.data;
      return data;
  };
  React.useEffect(() => {
      sendRquest().then((data) => {
        dispatch(setgetusers(data));
        
      });
    });

  return (
    <Card sx={{ maxWidth: 345, height: 300 }}>
      
      <CardHeader
      

      />
      
      {
        users.map((user) => {
          
          for (let i = 0; i < userData?.following.length; i++){
            if (user._id === userData.following[i]) {
              return (
                <>
                  <li style={{backgroundColor:'whitesmoke',listStyle:'none'}} key={user._id}>

                    <img width={40} height={40} style={{borderRadius:'100%'}} src={user.picture} alt='image_Profil' />
                    <span style={{marginLeft:'30px'}} >{user.nom} {user.prenom}</span>
                          <h4>
                              <Handlerfollow />
                          </h4>

                  </li>
                </>
              )
            }
          }
        }
        )
     }

    </Card>
  );
}
