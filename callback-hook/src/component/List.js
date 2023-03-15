import React, { useState, useEffect } from 'react';

function List({ getItem }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItem(1));
    console.log('updating items');
  }, [getItem]);
  return items.map((item) => <div key={item}>{item}</div>);
}

export default List;
