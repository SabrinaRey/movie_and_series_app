import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [url]);

  return info;
};

export default useFetch;
