import { navLinks } from '../../data/content';

export function NavBar() {
  return (
    <nav>
      <div className="container">
        <a href="#" className="nav-logo">
<<<<<<< HEAD
          Aayan Ahmed Tejani
=======
          YourName.py
>>>>>>> 4d15869c176eb821938e8b9dda3581f108921ee2
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
