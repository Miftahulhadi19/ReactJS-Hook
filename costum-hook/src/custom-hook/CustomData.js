import { useState, useEffect } from 'react';

function CustomData(path) {
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(null);
  const [datas, setDatas] = useState(null);

  const getData = async () => {
    try {
      console.log('from custom data');
      const mainURL = 'https://jsonplaceholder.typicode.com/' + path;
      const request = await fetch(mainURL);
      const jsonData = await request.json();
      setDatas(jsonData);
      setIsReady(true);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return [datas, isReady, isError];
}

export default CustomData;
