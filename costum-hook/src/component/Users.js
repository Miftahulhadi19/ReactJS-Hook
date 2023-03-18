import CustomData from '../custom-hook/CustomData';

function Users() {
  const users = CustomData('users');
  const [datas, isReady, isError] = users;
  if (isError) {
    return <p>Error while loading data, error: {isError}</p>;
  }
  if (!isReady) {
    return <p>Loading Data...</p>;
  }
  return (
    <div>
      <h3>Users</h3>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <h4>{data.name}</h4>
            <p>{data.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
