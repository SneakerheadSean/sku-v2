import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneSneaker, addCommentToSneaker } from "../services/sneakers";
import { deleteComment } from "../services/comments";

export default function SneakerDetail(props) {
  const [sneakerItem, setSneakerItem] = useState(null);
  const [description, setDescription] = useState("");
  const [toggle, setToggle] =useState(false)
  const { id } = useParams();

  // const { comments } = props;

  useEffect(() => {
    const fetchSneakerItem = async () => {
      const sneakerData = await getOneSneaker(id);
      setSneakerItem(sneakerData);
    };
    fetchSneakerItem();
  }, [id, toggle]);

  const handleChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  // Our handle submit for adding the Comment to our Sneaker
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullDescription = {
      description,
    };
    await addCommentToSneaker(fullDescription, id);
    setDescription("")
    setToggle(prev => !prev);
  };

  const handleCommentDelete = async (commentId) => {
    await deleteComment(commentId);
    setToggle(prev => !prev);
  }

  if (!sneakerItem) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Test 123</h1>
      <h3>{sneakerItem?.name}</h3>
      {sneakerItem?.comments.map((comment) => (
        <>
          <p key={comment.id}>{comment.description}</p>
          <button onClick={() => handleCommentDelete(comment.id)}>
            Delete
          </button>
        </>
        
      ))}

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="description" value={description} />

        <button>Add</button>
      </form>
    </div>
  );
}
