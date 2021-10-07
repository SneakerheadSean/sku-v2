import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneSneaker, addCommentToSneaker } from '../services/sneakers';


export default function SneakerDetail(props) {
  const [sneakerItem, setSneakerItem] = useState(null);
  const [selectedComment, setSelectedComment] = useState('');
  const { id } = useParams();
  // const { comments } = props;

  useEffect(() => {
    const fetchSneakerItem = async () => {
      const sneakerData = await getOneSneaker(id);
      setSneakerItem(sneakerData);
    };
    fetchSneakerItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedComment(value);
  };

  // Our handle submit for adding the Comment to our Sneaker
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sneakerItem = await addCommentToSneaker(selectedComment, id);
    setSneakerItem(sneakerItem);
  };

  return (
    <div>

      <h1>Test</h1>
      <h3>{sneakerItem?.name}</h3>
      {sneakerItem?.comments.map((comment) => (
        <p key={comment.id}>{comment.description}</p>
      ))}
      
     <form onSubmit={handleSubmit}>
        <input onChange={handleChange}  />
         
           
          
      
        <button>Add</button>
      </form>
    </div>
  );
}