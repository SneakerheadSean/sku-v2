import { Link } from "react-router-dom";
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <div class="ui huge menu">
  <a class="active item">
      <div>
        <Link to="/" exact>
          <h1>SKu</h1>
        </Link>
      </div>
    
  </a>
  <a class="item">
      {props.currentUser && (
        <>
          <div>
            <Link to="/sneakers">My Collection</Link>
          </div>

         
        </>
      )}
  </a>
  <div class="right menu">
   
    <div class="item">
        {props.currentUser ? (
          <div>
            <p>Welcome, {props.currentUser.username}!</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <div class="ui primary button">
          <Link to="/login" class="ui primary button">Login/Register</Link>
          
          </div>
        )}
    </div>
  </div>
      </div>
      <div className="body">
 {props.children}

      </div>
 </>
  );
}
