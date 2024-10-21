import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState(null);
  const { id } = useLoaderData();

  useEffect(() => {
    // componentDidMount
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const json = await response.json();

    setData(json);
  };

  return (
    <div>
      {data != null && <h1>Data Loaded!</h1>}
      {data == null && <h1>Loading...</h1>}

      {data ? <h1>Data Loaded!</h1> : <h1>Loading...</h1>}
    </div>
  );
}

export default Fetch;
