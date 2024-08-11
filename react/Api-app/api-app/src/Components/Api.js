import React, { useState } from "react";

export default function Api() {
  const [data, setData] = useState(null);
  let url = "http://hn.algolia.com/api/v1/search?query";
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchApiData(url);
  return (
    <div>
      <input type="text"></input>
      <p id="output"></p>
    </div>
  );
}
