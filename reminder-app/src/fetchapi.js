import React, { useState, useEffect } from 'react';

function FetchAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:9090/reminderList')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Reminder List:</h1>
          <ul>
            {data.map(item => (
              <li key={item._id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FetchAPI;
