const useApi = () => {
  const requestFileContent = async (download_url) => {
    const response = await fetch(download_url);
    return await response.text();
  };
  return {
    requestFileContent,
  };
};

const useSessionStorage = () => {
  const setSolution = (value) => {
    sessionStorage.setItem("solution", JSON.stringify(value));
  };
  const getSolution = () => JSON.parse(sessionStorage.getItem("solution"));
  return {
    setSolution,
    getSolution,
  };
};

const useUtil = () => {
  const formattedFileName = (fileName) =>
    fileName.replace(/-/g, " ").replace(".js", "").trim();
  const splitCodeToSolutions = (code) => {
    if (code === undefined) return [];
    const splitter = /\/\/[ ]*정답/;
    const solutions = code.split(splitter);
    const formattedSolutions = solutions.map((solution) => "//" + solution);
    return formattedSolutions.slice(1);
  };
  return {
    formattedFileName,
    splitCodeToSolutions,
  };
};

const usePage = () => {
  const problemTitle = document
    .querySelector("li.nav-item.algorithm-nav-link.algorithm-title")
    .textContent.trim();
  return {
    problemTitle,
  };
};

const useSolution = () => {
  const { problemTitle } = usePage();
  const { formattedFileName, splitCodeToSolutions } = useUtil();
  const { requestFileContent } = useApi();
  const { setSolution } = useSessionStorage();

  const fetchSolutionToSessionStorage = (solutionList) => {
    const solution = solutionList.find(
      (file) => formattedFileName(file.name) === problemTitle
    );

    if (solution) {
      requestFileContent(solution.download_url).then((response) => {
        setSolution(splitCodeToSolutions(response));
      });
    } else {
      setSolution([]);
    }
  };
  return {
    fetchSolutionToSessionStorage,
  };
};

const init = () => {
  const { fetchSolutionToSessionStorage } = useSolution();
  const { getSolution } = useSessionStorage();
  chrome.runtime.sendMessage("getSolutionList", (solutionList) => {
    fetchSolutionToSessionStorage(solutionList);
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "getSolution") {
      const solutions = getSolution();
      if (solutions[0]) {
        sendResponse(solutions[0]);
      } else {
        sendResponse("noSolution");
      }
    }
  });
};

init();
