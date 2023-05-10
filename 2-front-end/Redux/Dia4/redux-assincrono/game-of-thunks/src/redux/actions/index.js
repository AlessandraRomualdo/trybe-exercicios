export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';

export const startFetch = () => (
  { type: START_FETCH }
);

export const successFetch = (character) => (
  { type: SUCCESS_FETCH, character }
);

export const thunkFetch = (character) => {
  return (dispatch) => {
    dispatch(startFetch());
    fetch(`https://anapioficeandfire.com/api/characters?name=${character}`)
    .then(res => res.json())
    .then( data => dispatch(successFetch(data)));
  };
}