export const requestToContentScript = async (key) => {
  try {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [currentTab] = await chrome.tabs.query(queryOptions);
    return await chrome.tabs.sendMessage(currentTab.id, key);
  } catch (e) {
    return false;
  }
};
export const localStorage = {
  async get(key) {
    const response = await chrome.storage.local.get(key);
    return response[key];
  },
  async set(key, value) {
    return await chrome.storage.local.set({ [key]: value });
  },
};

export const linkTo = (url) => {
  return chrome.tabs.create({ url });
};
