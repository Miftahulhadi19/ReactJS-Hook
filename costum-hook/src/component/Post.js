import CustomData from '../custom-hook/CustomData';

function Post() {
  const post = CustomData('posts');
  const [datas, isReady, isError] = post;
  if (isError) {
    return <p>Error while loading data, error: {isError}</p>;
  }
  if (!isReady) {
    return <p>Loading Data...</p>;
  }
  return (
    <div>
      <h3>Post</h3>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <h4>{data.title}</h4>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
