import React, { useState } from "react";
import axios from "axios";

const useFetch = async (url) => {
  const [response, setResponse] = useState(null);
  const res = await axios.get(url);
  setResponse(res.data);
  return response;
};

export default useFetch;
