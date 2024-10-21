import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h4>
        {error.status} {error.statusText}
      </h4>
      <p>{error.data}</p>
    </>
  );
}

export default ErrorPage;
