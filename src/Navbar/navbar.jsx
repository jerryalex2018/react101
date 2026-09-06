import { Link } from "react-router-dom";

export default function Navbar(){
    return (
      <>
        <div className="container">
          <nav className="nav">
            <Link to="/" className="logo">
              Title
            </Link>
            <ul className="list">
              
                <CustomLink to="/about">one</CustomLink>
              
              
                <CustomLink to="/pricing">two</CustomLink>
              
            </ul>
          </nav>
        </div>
      </>
    );
}

function CustomLink({to,children,...props}){
    const path = window.location.pathname;
  return (
    <>
      <li className={path===to?"active":""}>
        <Link to={to}>{children}</Link>
      </li>
    </>
  );
}