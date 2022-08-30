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
  await fetchExpireDate();
  console.log('Solutions: ' + await localStorage.get(key) ? 'fetched': 'fetch fail');
  console.log('expireDate: ' + new Date(await localStorage.get('expireDate')))
};
const fetchExpireDate = async () =>{
  const key = 'expireDate';
  const fourHour = 4 * 60 * 60 * 1000;
  await localStorage.set(key, fourHour + Date.now());
}
chrome.runtime.onInstalled.addListener(() => {
  fetchSolutionList();
});
chrome.runtime.onMessage.addListener((message)=>{
  if(message === 'updateSolution') fetchSolutionList();
})
