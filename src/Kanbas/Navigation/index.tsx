import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaHistory, FaQuestionCircle, FaTv, FaTachometerAlt, FaEnvelope, FaCalendarAlt, FaRegUserCircle, FaBook, FaUsers } from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 red-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 red-icon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 red-icon" />           },
    { label: "Groups",   icon: <FaUsers className="fs-2 red-icon" />           },
    { label: "Calendar",   icon: <FaCalendarAlt className="fs-2 red-icon" />           },
    { label: "Inbox",   icon: <FaEnvelope className="fs-2 red-icon" />           },
    { label: "History",   icon: <FaHistory className="fs-2 red-icon" />           },
    { label: "Studio",   icon: <FaTv className="fs-2 red-icon" />           },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2 red-icon" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;