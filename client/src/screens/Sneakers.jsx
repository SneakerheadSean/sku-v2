import { Link } from 'react-router-dom';

export default function Sneakers(props) {
  return (
    <div>
      <h3>Sneakers</h3>
      <Link to='/sneakers/'>
        <button>Add to Collection!</button>
      </Link>
      {props.sneakers.map((sneaker) => (
        <div key={sneaker.id}>
          <Link to={`/sneakers/${sneaker.id}`}>
            <p>{ sneaker.name }</p>
            <p><img src={sneaker.image} alt="retro5" /></p>
          </Link>
          <Link to={`/sneakers/${sneaker.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => props.handleSneakerDelete(sneaker.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}