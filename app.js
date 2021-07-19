const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com", config);
  console.log(res);
  console.log(res.data.joke);
  const newLi = document.createElement("li");
  newLi.append(res.data.joke);
  jokes.append(newLi);
};

button.addEventListener("click", () => {
  getDadJoke();
});
