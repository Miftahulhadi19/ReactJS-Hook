import { UserContext } from '../App';

const TopBar = () => {
  return (
    <div>
      Topbar
      <UserContext.Consumer>
        {(value) => {
          return (
            <h1>
              Id: {value.id}
              <br />
              Name : {value.name}
              <br />
              Email: {value.email}
            </h1>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default TopBar;
