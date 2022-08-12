const useApi = () => {
  const GET_SOLUTION_LIST_BASE_URL = `https://api.github.com/repos/codeisneverodd/programmers-coding-test/contents/`;
  const requestSolutionList = async (level) => {
    const url = GET_SOLUTION_LIST_BASE_URL + `level-${level}`;
    const response = await fetch(url);
    return await response.json();
  };
  return {
    requestSolutionList,
  };
};

const useLocalStorage = () => {
  const setSolutionList = (value) => {
    localStorage.setItem("solutionList", JSON.stringify(value));
  };
  const getSolutionList = () =>
    JSON.parse(localStorage.getItem("solutionList"));
  return {
    setSolutionList,
    getSolutionList,
  };
};

const useSolutionList = () => {
  const POSSIBLE_LEVEL = [1, 2, 3, 4, 5];
  const { requestSolutionList } = useApi();
  const { setSolutionList, getSolutionList } = useLocalStorage();

  const fetchSolutionListToLocalStorage = () => {
    setSolutionList([]);
    POSSIBLE_LEVEL.forEach((level) => {
      requestSolutionList(level).then((response) => {
        setSolutionList([...getSolutionList(), ...response]);
      });
    });
  };

  return {
    fetchSolutionListToLocalStorage,
  };
};

const init = () => {
  const { fetchSolutionListToLocalStorage } = useSolutionList();
  const { getSolutionList } = useLocalStorage();
  fetchSolutionListToLocalStorage();

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "getSolutionList") {
      const solutionList = getSolutionList();
      sendResponse(solutionList);
    }
  });
};

init();
