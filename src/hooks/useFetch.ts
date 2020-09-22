import { useEffect, useState } from 'react';

const useFetch = (path: string): any => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:4321/${path}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [path]);

  return data;
};

export default useFetch;
