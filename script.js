// API link => GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokebtn");
// ---------------------------------------------------
// there are 2 method to use api
// 1.Ajax call using XMLHttpRequest
// 2.fetch api
//   i.PROMISE
//   ii.async-await

// ---------------------------------------------------
//  (i) using PROMISE
// ---------------------------------------------------

// const generateJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) => res.json())
//     .then((data) => (jokes.innerHTML = data.joke))
//     .catch((error) => console.log(error));
// };

// ---------------------------------------------------
//  (ii) async await
// ---------------------------------------------------

async function generateJokes() {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(`the error is ${error}`);
  }
}

// ---------------------------------------------------

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
