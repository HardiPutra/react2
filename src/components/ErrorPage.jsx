import { useRouteError } from "react-router-dom";

function ErrorPage() {
  useRouteError();
  return (
    <>
      <div>Error Broo!!!</div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi labore sunt laudantium similique. Nostrum in facilis cupiditate vitae omnis facere, ut necessitatibus molestias, quas
        velit perspiciatis rem, mollitia nihil.
      </p>
    </>
  );
}

export default ErrorPage;
