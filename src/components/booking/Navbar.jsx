import { Link, useLocation } from "react-router-dom";
import '../../App.css';

const navText = ['Home', 'Tickets', 'Contact']

export const Navbar = () => {
  const location = useLocation();

  // Don't render the Navbar on the Homepage
  if (location.pathname === '/home') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="logo bg-indigo-600 border-radius-32 flex w-auto h-32 justify-center">
        <a href="/home" className="logo bg-indigo-600 border-radius-32 flex w-auto h-32 justify-center"><img src="/logo-foo.png" alt="logo"/></a>
      </div>
      <div className="links flex flex-col justify-center bg-indigo-600 py-2 px-2">
        {navText.map((text, index) => (
          <NavButton text={text} key={index} currentPath={location.pathname}/>
        ))}
      </div>
    </nav>
  );
};

export const NavButton = ({ text, currentPath }) => {
  const textLower = text.toLowerCase();
  const isActive = currentPath === '/' + textLower;

  if (text === 'Contact') {
    return (
      <a 
        href="https://egerhards.github.io/portfolio/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="custom-link"
      >
        {text}
      </a>
    );
  }

  return (
    <Link 
    to={"/" + textLower} 
    className="custom-link"
>
    {text}
</Link>
  );
}
