import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError();
  console.log(error);

  return <div>{error.data}</div>;
}

export default Error;
