export default function Navbar(){
    return (
      <>
        <div className="container">
          <nav className="nav">
            <a href="/" className="logo">
              Title
            </a>
            <ul className="list">
              
                <CustomLink href="/about">one</CustomLink>
              
              
                <CustomLink href="/pricing">two</CustomLink>
              
            </ul>
          </nav>
        </div>
      </>
    );
}

function CustomLink({href,children,...props}){
    const path = window.location.pathname;
  return (
    <>
      <li className={path===href?"active":""}>
        <a href={href}>{children}</a>
      </li>
    </>
  );
}