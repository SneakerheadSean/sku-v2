import { Link } from "react-router-dom";


export default function Layout(props) {
  return (
    <>
       <header>
        <Link to="/" exact>
          <h1>SKu</h1>
        </Link>
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
        <hr />
        {props.currentUser && (
          <div>
            <Link to="/sneakers">Sneakers</Link>
          </div>
        )}
      </header>
      {props.children}
    </>
  );
}
