async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "18b7aead9bfa5f8a4f6a5f900da2b118";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    const div = document.getElementById("weather");
    console.log(data);
    div.innerHTML = `
    <h1> ${data.name}, ${data.sys.country} </h1>
    <h2> ${data.main.humidity} </h2>
    <h3> ${data.weather[0].description} </h3>
  

    `;
  } catch (error) {
    console.log("Error Occured" + error);
  }
}
