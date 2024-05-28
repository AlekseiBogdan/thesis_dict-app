import { useRouteError } from "react-router-dom";

import Sidebar from "./sidebar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="flex flex-col flex-wrap w-[600px] m-auto text-center content-center justify-center"
        id="error-page"
      >
        <h1 className="font-bold text-lg">Oops!</h1>
        <p className="font-bold">Произошла ошибка :(</p>
        <p>
          <i>
            {error.status === 404
              ? "Такая страница не найдена. Если вы считаете, что данное слово необходимо добавить в словарь — отправьте запрос через форму обратной связи."
              : error.status + error.message}
          </i>
        </p>
      </div>
    </div>
  );
}
