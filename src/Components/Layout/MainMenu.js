import {Link} from "react-router-dom"

function MainMenu () {

  return (
    <header>
      <div>Main Menu</div>
      <nav>
        <ul>
          <li><Link to="/newmeetup">Create New Meet Up</Link></li>
          <li><Link to="/allmeetups">View All Meet Ups</Link></li>
          <li><Link to="/favoritemeetups">View Favorite Meet Ups</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainMenu