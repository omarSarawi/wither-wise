import React from 'react';
import logo from './images/v2_69.png';

const Navbar = () => (
  <nav style={styles.navbar}>
    <ul style={styles.navbarNav}>
      <NavItem link="/">
        <Logo />
      </NavItem>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/components/Jordan">Landmarks</NavItem>
      <NavItem link="/signin">SignIn</NavItem>
      <NavItem link="/signup">SignUp</NavItem>
    </ul>
  </nav>
);

const NavItem = ({ link, children }) => (
  <li style={styles.navItem}>
    <NavLink href={link}>{children}</NavLink>
  </li>
);

const NavLink = ({ href, children }) => (
  <a href={href} style={styles.navLink}>
    {children}
  </a>
);

const Logo = () => (
  <div style={styles.logoContainer}>
    <img src={logo} alt="Logo" style={styles.logo} />
  </div>
);

const styles = {
  navbar: {
    backgroundColor: '#3b494d',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navbarNav: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#bebebe',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  },
  logoContainer: {
    marginRight: '20px',
  },
  logo: {
    width: '150px',
    height: 'auto',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: '24px', // Increase the size of the icon
    color: '#fff', // Change the color of the icon
    marginLeft: '5px', // Adjust the margin to move the icon to the left
    transition: 'color 0.3s ease', // Add transition for hover effect
  },
};

export default Navbar;
