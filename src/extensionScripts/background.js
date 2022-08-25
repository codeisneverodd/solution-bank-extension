import { localStorage } from "../shared/utils/chrome.js";
import { getSolutionListByLevel } from "../shared/utils/api.js";

const fetchSolutionList = async () => {
  const POSSIBLE_LEVEL = [1, 2, 3, 4, 5];
  const key = "solutionList";
  await localStorage.set(key, []);
  for (const level of POSSIBLE_LEVEL) {
    const response = await getSolutionListByLevel(level);
    const prevSolutionList = await localStorage.get(key);
    await localStorage.set(key, [...prevSolutionList, ...response]);
  }
  console.log(await localStorage.get(key));
};
chrome.runtime.onInstalled.addListener(() => {
  fetchSolutionList();
});
