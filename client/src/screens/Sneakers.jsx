import { Link } from "react-router-dom";
import './Sneakers.css';


export default function Sneakers(props) {
  return (
    <>
      <Link to="/sneakers/new"><div class="ui animated button" tabindex="0">
  <div class="visible content">Add to Collection!</div>
  <div class="hidden content">
    <i class="right arrow icon"></i>
  </div>
</div>
        
      </Link>
    <div className="container">
      {props.sneakers.map((sneaker) => (
        <div key={sneaker.id}>
          <Link to={`/sneakers/${sneaker.id}`}>
            <div class="ui card">
              <div class="content">{sneaker.name}</div>
              <div class="image">
                <img src={sneaker.image} alt={ sneaker.name }/>
              </div>
              <div class="content">
                <span class="right floated">
                  <i class="heart outline like icon"></i>
                  17 likes
                </span>
                <i class="comment icon"></i>3 comments
              </div>
              <div class="extra content">
                <div class="ui large transparent left icon input">
                  <Link to={`/sneakers/${sneaker.id}/edit`}>
                    <button>Edit</button>
                    <button
                      onClick={() => props.handleSneakerDelete(sneaker.id)}
                      >
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
      </>
  );
}
