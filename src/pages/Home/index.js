import { useEffect, useState } from "react";
import Success from "./components/Success";
import Error from "./components/Error";
import { NoSolution } from "./components";
import React from "react";
import { requestToContentScript } from "../../shared/utils/chrome";
import Loading from "./components/Loading";

const CopySolution = () => {
  const statusString = {
    loading: "loading",
    copied: "copied",
    error: "error",
    noSolution: "noSolution",
  };
  const [solution, setSolution] = useState("noSolution");
  const [status, setStatus] = useState(statusString.loading);

  const getSolution = async () => {
    const key = "getSolution";
    const response = await requestToContentScript(key);
    return response ? response : "error";
  };
  const getCurrentStatus = (solution) => {
    if (solution === "noSolution") return statusString.noSolution;
    if (solution === "error") return statusString.error;
    return statusString.copied;
  };

  useEffect(async () => {
    const solution = await getSolution();
    await navigator.clipboard.writeText(solution);
    setSolution(solution);
    setTimeout(() => {
      setStatus(getCurrentStatus(solution));
    }, 500);
  }, []);

  return (
    <>
      {status === statusString.loading && <Loading />}
      {status === statusString.copied && <Success />}
      {status === statusString.error && <Error />}
      {status === statusString.noSolution && <NoSolution />}
    </>
  );
};
export default CopySolution;
