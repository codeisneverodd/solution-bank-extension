const getFileContentAPI = async (download_url) => {
  const response = await fetch(download_url);
  return await response.text();
};

const utils = {
  formattedFileName: (fileName) =>
    fileName.replace(/-/g, " ").replace(".js", "").trim(),
  splitCodeToSolutions: (code) => {
    if (code === undefined) return [];
    const splitter = /\/\/[ ]*정답/;
    const solutions = code.split(splitter);
    const formattedSolutions = solutions.map((solution) => "//" + solution);
    return formattedSolutions.slice(1);
  },
};

const getTitleFromPage = () => {
  return document
    .querySelector("li.nav-item.algorithm-nav-link.algorithm-title")
    .textContent.trim();
};

const getSolution = async (solutionList) => {
  const problemTitle = getTitleFromPage();
  console.log(problemTitle);
  const { formattedFileName, splitCodeToSolutions } = utils;
  console.log(solutionList);
  const solution = solutionList.find(
    (file) => formattedFileName(file.name) === problemTitle
  );
  if (solution)
    return splitCodeToSolutions(await getFileContentAPI(solution.download_url));
  return [];
};

const init = async () => {
  const localStorage = chrome.storage.local;
  const key = "solutionList";
  const solutionList = await localStorage.get(key);
  const solutions = await getSolution(solutionList[key]);
  chrome.runtime.onMessage.addListener(
    async (message, sender, sendResponse) => {
      console.log(solutions);
      if (message === "getSolution") {
        if (solutions) {
          sendResponse(solutions[0]);
        } else {
          sendResponse("noSolution");
        }
      }
    }
  );
};

init();
