import { NavLink } from 'react-router-dom'
import logo from '/logo.png'
function NavBar() {
  return (
    <nav className='nav'>
      <img src={logo} />
      <ul className='navBar'>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'selected' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/exercises' className={({ isActive }) => (isActive ? 'selected' : '')}>
            Exercises
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
