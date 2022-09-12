import { localStorage } from "../shared/utils/chrome.js";
import { getSolutions } from "../shared/utils/api.js";

const fetchSolutions = async () =>{
  const solutions = await getSolutions();
  localStorage.set('solutions',solutions)
  const fourHour = 4 * 60 * 60 * 1000;
  await localStorage.set('expireDate', fourHour + Date.now());
  return solutions;
}

chrome.runtime.onInstalled.addListener(() => fetchSolutions);

chrome.runtime.onMessage.addListener((message)=>{
  if(message === 'updateSolution') fetchSolutions();
})
