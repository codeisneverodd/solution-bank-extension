import { useEffect, useState } from "react";
import { useContentScript } from "../../hooks";
import Success from "./components/Success";
import Retry from "./components/Retry";
import { NoSolution } from "./components";
import React from 'react';

const CopySolution = () => {
  const { requestToContentScript, responseFromContent } = useContentScript();
  const statusString = {
    copied: "copied",
    retry: "retry",
    noSolution: "noSolution",
  };
  const [status, setStatus] = useState(statusString.copied);

  useEffect(() => {
    requestToContentScript("getSolution");
  }, []);

  useEffect(() => {
    if (responseFromContent) {
      if (responseFromContent === "noSolution") {
        setStatus(statusString.noSolution);
      } else {
        setStatus(statusString.copied);
        navigator.clipboard.writeText(responseFromContent);
      }
    } else {
      setStatus(statusString.retry);
    }
  }, [responseFromContent]);

  return (
    <>
      {status === statusString.copied && <Success />}
      {status === statusString.retry && <Retry />}
      {status === statusString.noSolution && <NoSolution />}
    </>
  );
};
export default CopySolution;
