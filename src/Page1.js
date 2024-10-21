import { useLoaderData, Link } from "react-router-dom";

function Page1() {
  const loaderData = useLoaderData();

  return (
    <div>
      <h4>List</h4>

      <ul>
        {loaderData.data.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/page/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Page1;
