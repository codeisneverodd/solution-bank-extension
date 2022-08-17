import { useEffect, useState } from "react";
import Success from "./components/Success";
import Error from "./components/Error";
import { NoSolution } from "./components";
import React from "react";
import { requestToContentScript } from "../../shared/utils/chrome";

const CopySolution = () => {
  const statusString = {
    copied: "copied",
    error: "error",
    noSolution: "noSolution",
  };
  const [solution, setSolution] = useState("noSolution");
  const [status, setStatus] = useState(statusString.copied);

  const getSolution = async () => {
    const key = "getSolution";
    return await requestToContentScript(key);
  };
  const getCurrentStatus = (solution) => {
    if (solution === "noSolution") return statusString.noSolution;
    return solution ? statusString.copied : statusString.error;
  };

  useEffect(async () => {
    const solution = await getSolution();
    await navigator.clipboard.writeText(solution);
    setSolution(solution);
    setStatus(getCurrentStatus(solution));
  }, []);

  return (
    <>
      {status === statusString.copied && <Success />}
      {status === statusString.error && <Error />}
      {status === statusString.noSolution && <NoSolution />}
    </>
  );
};
export default CopySolution;
