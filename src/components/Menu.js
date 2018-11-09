import { Link } from 'react-router';
import FaHome from 'react-icons/lib/fa/home'
import FaCalendarPlusO from 'react-icons/lib/fa/calendar-plus-o'
import FaTable from 'react-icons/lib/fa/table'

export const Menu = () =>
  <nav className="menu">
      <Link to="/" activeClassName="selected">
      <FaHome />
      </Link>
      <Link to="/add-day" activeClassName="selected">
      <FaCalendarPlusO />
      </Link>
      <Link to="/list-days" activeClassName="selected">
      <FaTable />
      </Link>
  </nav>