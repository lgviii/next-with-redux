export const LOAD = "load";

export function loadData(dispatch, userId) {
  // needs to dispatch, so it is first argument
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) =>
      //   console.log(data.title)
      dispatch({ type: LOAD, payload: data.title })
    );

  //   return fetch("https://www.google.com/search?q=secret+sauce")
  //     .then((res) => res.json())
  //     .then(
  //       (data) => dispatch({ type: LOAD, data }),
  //       (err) => dispatch({ type: LOAD, err })
  //     );
}
