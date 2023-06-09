import { useContext } from 'react';
import { UserContext, ThemeContext } from '../App';

const Footer = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      Footer
      <h1>
        Id: {user.id}
        <br />
        Name : {user.name}
        <br />
        Email: {user.email}
      </h1>
    </div>
  );
};

export default Footer;
