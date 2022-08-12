import { useState } from "react";

const useContentScript = () => {
  const [responseFromContent, setResponseFromContent] = useState("");

  const requestToContentScript = (key) => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const currentTabId = tabs[0].id;
        chrome.tabs.sendMessage(currentTabId, key, (response) => {
          setResponseFromContent(response);
        });
      });
  };
  return {
    responseFromContent,
    requestToContentScript,
  };
};

export default useContentScript;
