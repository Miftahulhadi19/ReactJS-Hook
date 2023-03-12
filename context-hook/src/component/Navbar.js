import Navbarlink from './NavbarLink';
import NavbarUser from './NavbarUser';

function Navbar(props) {
  console.log(props);
  return (
    <div>
      <nav>
        <Navbarlink>Download</Navbarlink> | <Navbarlink>Products</Navbarlink>
        <Navbarlink>
          <NavbarUser />
        </Navbarlink>
      </nav>
    </div>
  );
}

export default Navbar;
