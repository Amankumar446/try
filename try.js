function GetInfo() {
  const newName = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = "--" + newName.value + "--";
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    newName.value +
    "&appid=fe7baef8dcd28e3dd516811461fdf32a&cnt=5&units=metric";
    console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.list.length; i++) {
        const dateFormatter = Intl.DateTimeFormat("en-IN");
        const date = dateFormatter.format(new Date(data.list[i].dt_txt));
        console.log(date);
        document.getElementById("day" + (i + 1) + "temp").innerHTML =
          "temp" + Number(data.list[i].main.temp).toFixed(2) + "°";
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          "Min" + Number(data.list[i].main.temp_min).toFixed(2) + "°";
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max" + Number(data.list[i].main.temp_max).toFixed(2) + "°";
      }
    })
    .catch((err) => console.error(err));
}
