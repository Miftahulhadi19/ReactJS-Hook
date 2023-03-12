import NavbarUserAvatar from './NavbarUserAvatar';
import NavbarUserText from './NavbarUserText';

function NavbarUser({ user }) {
  return (
    <div>
      <NavbarUserAvatar />
      <NavbarUserText />
    </div>
  );
}

export default NavbarUser;
