import { useRef, useState } from 'react';

function RefImage() {
  const target = useRef(null);
  const [img, setImg] = useState(null);
  const handleUpload = (e) => {
    const uploaded = e.target.files[0];
    setImg(URL.createObjectURL(uploaded));
    console.log(e.target.files);
  };
  return (
    <div>
      {img !== null && <img src={img} />}
      <button onClick={() => target.current.click()}>Upload File</button>
      <input ref={target} type='file' onChange={(e) => handleUpload(e)} />
    </div>
  );
}

export default RefImage;
