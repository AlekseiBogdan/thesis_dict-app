import { Link } from "react-router-dom";

import { useContext } from "react";
import { SearchContext } from "./Root";

export default function Sidebar() {
  const { setWord } = useContext(SearchContext);
  function handle_search(query) {
    setWord(query.toLowerCase());
  }

  return (
    <>
      <div className="sidebar h-screen lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Словарь геймерского сленга
            </h1>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Поиск слова"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            onChange={(e) => {
              handle_search(e.target.value);
            }}
          />
        </div>
        <Link
          to="/"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Главная страница
          </span>
        </Link>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/AlekseiBogdan", "_blank");
          }}
          className="p-2.5 mt-3 w-[284px] flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            GitHub
          </span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/AlekseiBogdan", "_blank");
          }}
          className="p-2.5 mt-3 w-[284px] flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Предложить свое вхождение
          </span>
        </button>
      </div>
    </>
  );
}
