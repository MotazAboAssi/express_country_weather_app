// const { defaults } = require("request");

const inputField = document.getElementById("input_city_name");
const spinner = document.querySelector("#input_city_name ~ button.disabled");
const errorAria = document.getElementById("error_aria");
const getWeatherButton = document.querySelector(
  "#input_city_name ~ button:not(:disabled)"
);
const informations = document.getElementById("resault");
const informationsCard = document.querySelectorAll("#resault>div>p:last-child");

inputField.addEventListener("input", (e) => {
  informationsCard[0].textContent = e.target.value;
});

getWeatherButton.addEventListener("click", async (e) => {
  e.preventDefault();
  informations.classList = "none";
  errorAria.classList = "none";
  inputField.setAttribute("disabled", true);

  const country = inputField.value.trim();
  if (country == null || country == "") {
    errorAria.classList = "block";
    errorAria.innerText = "required field";
  } else {
    errorAria.innerText = "";
    getWeatherButton.classList = "none";
    spinner.classList = "disabled";
    await fetchWeather(country);
    spinner.classList = "disabled none";
    getWeatherButton.classList = "block";
  }
  inputField.removeAttribute("disabled");
});

async function fetchWeather(country) {
  try {
    const response = await fetch(
      `http://localhost:3000/weather?country=${country}`
    );
    const data = await response.json();
    if (!data["error"]) {
      console.log(data);
      informations.classList = "";
      informationsCard[1].innerHTML = `${data["latitude"]}<sup>o</sup>deg`;
      informationsCard[2].innerHTML = `${data["longitude"]}<sup>o</sup>deg`;
      informationsCard[3].innerHTML = `${data["temperature"]}<sup>o</sup>C`;
    } else {
      errorAria.classList = "block";
      errorAria.textContent = data["error"];
    }
  } catch (e) {
    errorAria.classList = "block";
    errorAria.textContent = "this country not found in server";
  }
}
