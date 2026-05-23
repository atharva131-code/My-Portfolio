import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-primary text-white p-4 flex gap-6 justify-center z-50">

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>

    </nav>
  );
};

export default Navbar;