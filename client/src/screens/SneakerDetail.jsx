import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneSneaker,  } from '../services/sneakers';

export default function SneakerDetail(props) {
  const [sneakerItem, setSneakerItem] = useState(null);
  const [selectedComment, setSelectedComment] = useState('');
  const { id } = useParams();
  const { comments } = props;

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
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const sneakerItem = await addCommentToSneaker(selectedComment, id);
  //   setSneakerItem(sneakerItem);
  // };

  // return (
  //   <div>
  //     <h3>{sneakerItem?.name}</h3>
  //     {sneakerItem?.comments.map((comment) => (
  //       <p key={comment.id}>{comment.name}</p>
  //     ))}
      /* below is our for for the Comment drop down */
      // <form onSubmit={handleSubmit}>
        // <select onChange={handleChange} defaultValue='default'>
          /* we can set a default value to tell people to select a Comment*/
          /* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */
          /* we also add the "disabled" in the <option> to prevent users from selecting it*/
          // <option disabled value='default'>
            // -- Select a Comment --
          // </option>
          /* now we loop over all Comments and return an <option> tag for each */

          // {comments.map((comment) => (
            // we track the Comment's id as the "value" which will get added to state onChange
            // the Comment's name goes between the open and close tag which is what the user sees
  //           <option value={comment.id}>{comment.name}</option>
  //         ))}
  //       </select>
  //       <button>Add</button>
  //     </form>
  //   </div>
  // );
}