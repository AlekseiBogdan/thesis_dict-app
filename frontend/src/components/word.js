import React from "react";
import { Link } from "react-router-dom";

export default function Word({ wordInfo }) {
  return (
    <div>
      <Link to="/">Вернуться к списку всех лексем</Link>
      <h2 className="text-5xl font-semibold">{wordInfo.word}</h2>
      {wordInfo.is_global ? (
        <h3 className="text-2xl">Глобальный геймерский сленг</h3>
      ) : (
        <h3>Локальный геймерский сленг ({wordInfo.game_origin})</h3>
      )}
      <p className="text-3xl">{wordInfo.meaning}</p>
      <p className="italic text-2xl">Пример</p>
    </div>
  );
}
