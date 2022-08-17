import { useState } from "react";

const useContentScript = () => {
  const [responseFromContent, setResponseFromContent] = useState("");

  const requestToContentScript = async (key) => {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [currentTab] = await chrome.tabs.query(queryOptions);
    const response = await chrome.tabs.sendMessage(currentTab.id, key);
    setResponseFromContent(response);
  };
  return {
    responseFromContent,
    requestToContentScript,
  };
};

export default useContentScript;
