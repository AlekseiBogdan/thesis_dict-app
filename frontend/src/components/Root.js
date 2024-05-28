import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Pagination from "./Pagination";
import Sidebar from "./sidebar";
import WordWrapper from "./wordWrapper";
import WordList from "./word_list";

async function getdata() {
  const resp = await fetch("http://localhost:8000/");
  const info = await resp.json();
  return info;
}

const info = await getdata();

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [word, setWord] = useState(undefined);

  return (
    <SearchContext.Provider value={{ word, setWord }}>
      {children}
    </SearchContext.Provider>
  );
};

export default function Root() {
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 1;

  return (
    <div className="root flex">
      <SearchContextProvider>
        <Sidebar />
        <div className="m-7 flex flex-col relative w-4/5">
          <h1 className="text-4xl font-bold mb-7">Список лексем</h1>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <WordList
                    info={info}
                    currentPage={currentPage}
                    wordsPerPage={wordsPerPage}
                  />
                  <Pagination
                    totalWords={info.length}
                    wordsPerPage={wordsPerPage}
                    setCurrentPage={setCurrentPage}
                  />
                </>
              }
            />
            <Route path="/word">
              <Route path=":id" element={<WordWrapper wordInfo={info} />} />
            </Route>
          </Routes>
        </div>
      </SearchContextProvider>
    </div>
  );
}
