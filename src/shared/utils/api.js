export const getSolutionListByLevel = async (level) => {
  const GET_SOLUTION_LIST_BASE_URL = `https://api.github.com/repos/codeisneverodd/programmers-coding-test/contents/`;
  try {
    const url = GET_SOLUTION_LIST_BASE_URL + `level-${level}`;
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(e.error + "Getting solution list by level has been failed");
  }
};
export const getFileContentAPI = async (download_url) => {
  const response = await fetch(download_url);
  return await response.text();
};
