import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="p-4 bg-black text-white flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-xl font-bold">
        <Link to="/">Pocket Japan</Link>
      </div>

      {/* Center-right: Navigation Links */}
      <div className="flex items-center gap-8">
        <div className="flex gap-6 text-lg">
          <Link to="/">Home</Link>
          <Link to="/community">Community</Link>
          <Link to="/shopping">Shop</Link>
          <Link to="/livestream">Livestream</Link>
          <Link to="/profile" className="ml-4">
          <img src="/assets/profile.svg" alt="Profile" width="28" height="28" />
        </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
