import { useLoaderData } from "react-router-dom";

function Page2() {
  const { id, data } = useLoaderData();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default Page2;
