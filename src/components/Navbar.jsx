import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">My App</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Register</Link>
        <Link to="/setup" className="hover:underline">Organisation</Link>
        <Link to="/integration" className="hover:underline">Chatbot</Link>
      </div>
    </nav>
  );
}

export default Navbar;
