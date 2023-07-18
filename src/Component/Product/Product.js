import React, { useState, useEffect } from 'react';
import "./Product.css";

import db from './db'; 

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.query('SELECT * FROM items', (err, results) => {
      if (err) throw err;
      setData(results);
    });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default ExampleComponent;