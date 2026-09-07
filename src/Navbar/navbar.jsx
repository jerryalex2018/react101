import { Link,useMatch,useResolvedPath } from "react-router-dom";

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
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname,end:true})
  return (
    <>
      <li className={isActive?"active":""}>
        <Link to={to}>{children}</Link>
      </li>
    </>
  );
}