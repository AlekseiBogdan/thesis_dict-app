import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "./Root";

export default function WordList({ info, currentPage, wordsPerPage }) {
  const { word } = useContext(SearchContext);

  const lastWordIndex = currentPage * wordsPerPage;
  const firstWordIndex = lastWordIndex - wordsPerPage;
  const currentWords = info.slice(firstWordIndex, lastWordIndex);

  return (
    <div className="grid grid-flow-col grid-cols-6 grid-rows-9 gap-x-4 gap-y-5">
      {word && word !== undefined
        ? Object.entries(info)
            .filter((info) => info[1].word.toLowerCase().includes(word))
            .map((info, i) => (
              <Link key={i} to={`/word/${info[1].id}`} className="text-2xl">
                {info[1].word}
              </Link>
            ))
        : Object.entries(currentWords).map((info, i) => (
            <Link key={i} to={`/word/${info[1].id}`} className="text-2xl">
              {info[1].word}
            </Link>
          ))}
    </div>
  );
}
