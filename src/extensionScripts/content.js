import { localStorage } from "../shared/utils/chrome.js";
import { getFileContentAPI } from "../shared/utils/api.js";
import {
  formattedFileName,
  splitCodeToSolutions,
} from "../shared/utils/format.js";

const getTitleFromPage = () => {
  return document
    .querySelector("li.nav-item.algorithm-nav-link.algorithm-title")
    ?.textContent.trim();
};

const getSolution = async (solutionList) => {
  const problemTitle = getTitleFromPage();
  const solution = solutionList.find(
    (file) => formattedFileName(file.name) === problemTitle
  );
  if (solution)
    return splitCodeToSolutions(await getFileContentAPI(solution.download_url));
  return [];
};

const init = async () => {
  const key = "solutionList";
  const solutionList = await localStorage.get(key);
  const solutions = await getSolution(solutionList);
  chrome.runtime.onMessage.addListener(
    async (message, sender, sendResponse) => {
      if (message === "getSolution") {
        if (solutions[0]) {
          sendResponse(solutions[0]);
        } else {
          sendResponse("noSolution");
        }
      }
    }
  );
};

init();
