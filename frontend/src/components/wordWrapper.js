import React from "react";
import { useParams } from "react-router-dom";

import Word from "./word";

export default function WordWrapper({ wordInfo }) {
  let { id } = useParams();
  id = parseInt(id);
  return <Word wordInfo={wordInfo[id - 1]} />;
}
