import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllSneakers, addSneaker, deleteSneaker, updateSneaker } from '../services/sneakers'
import { getAllComments } from '../services/comments';
import Comments from '../screens/Comments';
import Sneakers from '../screens/Sneakers';
import SneakerCreate from '../screens/SneakerCreate';
import SneakerEdit from '../screens/SneakerEdit';
import SneakerDetail from '../screens/SneakerDetail';



export default function MainContainer() {
  const [sneakers, setSneakers] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchSneakers = async () => {
      const sneakerList = await getAllSneakers();
      setSneakers(sneakerList);
    };
    fetchSneakers();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getAllComments();
      setComments(commentList);
    };
    fetchComments();
  }, []);

  const handleSneakerCreate = async (sneakerData) => {
    const newSneaker = await addSneaker(sneakerData);
    setSneakers((prevState) => [...prevState, newSneaker]);
    history.push('/sneakers');
  };

  const handleSneakerDelete = async (id) => {
    await deleteSneaker(id);
    setSneakers((prevState) => prevState.filter((sneakerItem) => sneakerItem.id !== id));
  };

  const handleSneakerUpdate = async (id, sneakerData) => {
    const updatedSneaker = await updateSneaker(id, sneakerData);
    setSneakers((prevState) =>
      prevState.map((sneaker) => {
        return sneaker.id === Number(id) ? updatedSneaker : sneaker;
      })
    );
    history.push('/sneakers');
  };
  

  return (
    <Switch>
       <Route path='/flavors'>
        <Comments comments={comments} />
      </Route>
      <Route path='/foods/:id/edit'>
        <FoodEdit foods={foods} handleFoodUpdate={handleFoodUpdate} />
      </Route>
      <Route path='/foods/:id'>
        <FoodDetail flavors={flavors} />
      </Route>
      <Route path='/foods/new'>
        <FoodCreate handleFoodCreate={handleFoodCreate} />
      </Route> */
      /* <Route path='/sneakers'>
        <Sneakers sneakers={sneakers}  />
      </Route>
    </Switch>
  ); 
}