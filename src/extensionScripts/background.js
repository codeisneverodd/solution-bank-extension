import { localStorage } from "../shared/utils/chrome.js";
const getSolutionListByLevel = async (level) => {
  const GET_SOLUTION_LIST_BASE_URL = `https://api.github.com/repos/codeisneverodd/programmers-coding-test/contents/`;
  try {
    const url = GET_SOLUTION_LIST_BASE_URL + `level-${level}`;
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(e.error + "Getting solution list by level has been failed");
  }
};

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
