export const requestToContentScript = async (key) => {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [currentTab] = await chrome.tabs.query(queryOptions);
  return await chrome.tabs.sendMessage(currentTab.id, key);
};
