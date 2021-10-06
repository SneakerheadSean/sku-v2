import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <>
      <header>
        <h1>SKu</h1>
        {props.currentUser ? (
          <div>
            <p>{ props.currentUser.username }</p>
          </div>
        )}
      </header>
      </>
  )
}