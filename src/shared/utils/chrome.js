export const requestToContentScript = async (key) => {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [currentTab] = await chrome.tabs.query(queryOptions);
  return await chrome.tabs.sendMessage(currentTab.id, key);
};
export const localStorage = {
  async get(key) {
    const response = await chrome.storage.local.get(key);
    return response[key];
  },
  async set(key, value) {
    const response = await chrome.storage.local.set({ [key]: value });
    return response;
  },
};
