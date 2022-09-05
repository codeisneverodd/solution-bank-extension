import { localStorage } from "../shared/utils/chrome.js";

const init = async () => {
  const expireDate = await localStorage.get('expireDate')
  const id = window.location.pathname.split('/').at(-1);
  const solutions = await localStorage.get('solutions');
  const solution = solutions.find(solution => solution.id === id).code;
  if(expireDate < Date.now()) chrome.runtime.sendMessage('updateSolution');

  chrome.runtime.onMessage.addListener(
    async (message, sender, sendResponse) => {
      if (message === "getSolution") {
        if (solutions[0]) {
          sendResponse(solution);
        } else {
          sendResponse("noSolution");
        }
      }
    }
  );
};

init();
