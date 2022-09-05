export const getSolutions = async() =>{
  const URL = 'https://raw.githubusercontent.com/codeisneverodd/programmers-coding-test/v0.3.0/api.json'
  try{
    const response =  await fetch(URL);
    return response.json();
  }catch(e){
    console.error(e)
  }
}

