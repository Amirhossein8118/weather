const $ = document;

const Body = $.querySelector("body");
const loading = $.querySelector(".loader-container");
const InputElm = $.querySelector("input");
const bgItem = $.querySelector(".bg-item");
const cityElm = $.querySelector(".city");
const dateElm = $.querySelector(".date");
const now = new Date();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const tempElm = $.querySelector(".temp");
const weatherIcon = $.querySelector(".weather-icon");
const infoContainer = $.querySelector(".info-container");
const Humidity = $.querySelector(".Humidity");
const feelsLike = $.querySelector(".feels-like");
const windSpeed = $.querySelector(".wind-Speed");
const pressure = $.querySelector(".pressure");
const forecastContainer = $.querySelector("main");
const forecastElm = $.querySelectorAll(".forecast");
const description = $.querySelector(".description");

window.addEventListener("load", function () {
    loading.classList.replace("flex", "hidden");
    InputElm.classList.add(
        "animate-[fade-in-top_0.6s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
    );
});

function icon(item, where) {
    switch (item) {
        case "01d":
            where.innerHTML = `<i class="bi bi-brightness-high"></i>`;
            break;
        case "01n":
            where.innerHTML = `<i class="bi bi-moon"></i>`;
            break;
        case "02d":
            where.innerHTML = `<i class="bi bi-cloud-sun"></i>`;
            break;
        case "02n":
            where.innerHTML = `<i class="bi bi-cloud-moon"></i>`;
            break;
        case "03d":
        case "03n":
            where.innerHTML = `<i class="bi bi-cloud"></i>`;
            break;
        case "04d":
        case "04n":
            where.innerHTML = `<i class="bi bi-clouds"></i>`;
            break;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
            where.innerHTML = `<i class="bi bi-cloud-rain"></i>`;
            break;
        case "11d":
        case "11n":
            where.innerHTML = `<i class="bi bi-cloud-lightning"></i>`;
            break;
        case "13d":
        case "13n":
            where.innerHTML = `<i class="bi bi-cloud-snow"></i>`;
            break;
        default:
            where.innerHTML = `<i class="bi bi-tornado"></i>`;
            break;
    }
}

function CurrentData(cityValue) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=887891154f4cc8050b2c75ba56493b22`,
    )
        .then((res) => res.json())
        .then((data) => {
            switch (data.weather[0].icon) {
                case "01d":
                    weatherIcon.innerHTML = `<i class="bi bi-brightness-high"></i>`;
                    bgItem.innerHTML =
                        '<source src="content/images/weather-bg/cluods-day.png" type="video/mp4">';
                    break;
                case "01n":
                    weatherIcon.innerHTML = `<i class="bi bi-moon"></i>`;
                    Body.style.backgroundImage =
                        "url('./content/images/weather-bg/moon.png')";
                    break;
                case "02d":
                    weatherIcon.innerHTML = `<i class="bi bi-cloud-sun"></i>`;
                    bgItem.innerHTML =
                        '<source src="content/images/weather-bg/cluods-day.png" type="video/mp4">';
                    break;
                case "02n":
                    weatherIcon.innerHTML = `<i class="bi bi-cloud-moon"></i>`;
                    Body.style.backgroundImage =
                        "url('./content/images/weather-bg/moon.png')";
                    break;
                case "03d":
                case "03n":
                    weatherIcon.innerHTML = `<i class="bi bi-cloud"></i>`;
                    bgItem.innerHTML =
                        '<source src="content/images/weather-bg/cluods-day.png" type="video/mp4">';
                    break;
                case "04d":
                case "04n":
                    weatherIcon.innerHTML = `<i class="bi bi-clouds"></i>`;
                    bgItem.innerHTML =
                        '<source src="content/images/weather-bg/cluods-day.png" type="video/mp4">';
                    break;
                case "09d":
                case "09n":
                case "10d":
                case "10n":
                    weatherIcon.innerHTML = `<i class="bi bi-cloud-rain"></i>`;
                    bgItem.innerHTML =
                        '<source src="content/images/weather-bg/rain.mp4" type="video/mp4">';
                    break;
                case "11d":
                case "11n":
                    weatherIcon.innerHTML = `<i class="bi bi-cloud-lightning"></i>`;
                    bgItem.innerHTML =
                        '<source src="content/images/weather-bg/rain.mp4" type="video/mp4">';
                    break;
                case "13d":
                case "13n":
                    weatherIcon.innerHTML = `<i class="bi bi-cloud-snow"></i>`;
                    bgItem.innerHTML =
                        '<source src="content/images/weather-bg/snowfall.png" type="video/mp4">';
                    break;
                default:
                    weatherIcon.innerHTML = `<i class="bi bi-tornado"></i>`;
                    Body.style.backgroundImage =
                        "url('./content/images/weather-bg/moon.png')";
                    break;
            }
            weatherIcon.classList.add(
                "!block",
                "animate-[fade-in-top_0.6s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            tempElm.innerHTML = `${Math.floor(data.main.temp - 273.15)}<span class="text-base align-text-top">°C</span>`;
            tempElm.classList.add(
                "!block",
                "animate-[fade-in-top_0.6s_0.2s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            cityElm.innerHTML = `<i class="bi bi-pin-map"></i> ${cityValue}`;
            cityElm.classList.add(
                "!block",
                "animate-[fade-in-top_0.6s_0.2s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            infoContainer.classList.add(
                "!flex",
                "animate-[fade-in-top_0.6s_0.8s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            Humidity.innerHTML = `<p><i class="bi bi-droplet-fill"></i> Humidity:</p> ${data.main.humidity}%`;
            Humidity.classList.add(
                "animate-[fade-in-top_0.3s_0.9s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            feelsLike.innerHTML = `<p><i class="bi bi-thermometer-half"></i> Feels Like:</p> ${Math.floor(data.main.feels_like - 273.15)}°C`;
            feelsLike.classList.add(
                "animate-[fade-in-top_0.3s_0.9s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            windSpeed.innerHTML = `<p><i class="bi bi-wind"></i> Wind Speed:</p> ${data.wind.speed}m/s`;
            windSpeed.classList.add(
                "animate-[fade-in-top_0.3s_0.9s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            pressure.innerHTML = `<p><i class="bi bi-speedometer2"></i> Pressure:</p> ${data.main.pressure}hPa`;
            pressure.classList.add(
                "animate-[fade-in-top_0.3s_0.9s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            forecastContainer.classList.add(
                "!flex",
                "animate-[fade-in-left_0.6s_1.1s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
            );

            description.innerHTML = data.weather[0].description;

            dateElm.innerHTML = `IR,${showDate()}`;

            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=887891154f4cc8050b2c75ba56493b22`,
            )
                .then((response) => response.json())
                .then((FData) => {
                    var DateCounter = now.getDate();

                    const toDHours = FData.list.filter(
                        (item) =>
                            item.dt_txt.split(" ")[0] ===
                            `${now.getFullYear()}-${now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth()}-${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}`,
                    );

                    const hoursContainer = $.querySelector(".hours-container");
                    hoursContainer.innerHTML = "";
                    toDHours.forEach((data, index) => {
                        var hourIcon;
                        switch (data.weather[0].icon) {
                            case "01d":
                                hourIcon = `<i class="bi bi-brightness-high text-4xl"></i>`;
                                break;
                            case "01n":
                                hourIcon = `<i class="bi bi-moon text-4xl"></i>`;
                                break;
                            case "02d":
                                hourIcon = `<i class="bi bi-cloud-sun text-4xl"></i>`;
                                break;
                            case "02n":
                                hourIcon = `<i class="bi bi-cloud-moon text-4xl"></i>`;
                                break;
                            case "03d":
                            case "03n":
                                hourIcon = `<i class="bi bi-cloud text-4xl"></i>`;
                                break;
                            case "04d":
                            case "04n":
                                hourIcon = `<i class="bi bi-clouds text-4xl"></i>`;
                                break;
                            case "09d":
                            case "09n":
                            case "10d":
                            case "10n":
                                hourIcon = `<i class="bi bi-cloud-rain text-4xl"></i>`;
                                break;
                            case "11d":
                            case "11n":
                                hourIcon = `<i class="bi bi-cloud-lightning text-4xl"></i>`;
                                break;
                            case "13d":
                            case "13n":
                                hourIcon = `<i class="bi bi-cloud-snow text-4xl"></i>`;
                                break;
                            default:
                                hourIcon = `<i class="bi bi-tornado text-4xl"></i>`;
                                break;
                        }
                        hoursContainer.insertAdjacentHTML(
                            "beforeend",
                            `<div class="flex flex-col justify-between items-center w-24 h-32 rounded-2xl p-2 bg-white bg-opacity-20 backdrop-blur-sm animate-[fade-in-left_0.6s_0.${index}s_cubic-bezier(0.390,0.575,0.565,1.000)_both]">
                                <span class="text-lg">${data.dt_txt.split(" ")[1].split("").slice(0, 5).join("")}</span>
                                ${hourIcon}
                                <span class="text-lg">${Math.floor(data.main.temp - 273.15)}°C</span>
                            </div>`,
                        );
                    });

                    forecastElm.forEach((elm, index) => {
                        const FDay = elm.querySelector(".F-day");
                        const FDate = elm.querySelector(".F-date");
                        const FWeather = elm.querySelector(".F-weather");
                        const FTemp = elm.querySelector(".F-temp");
                        const dataDays = FData.list.filter(
                            (item) =>
                                item.dt_txt.split(" ")[0] ===
                                `${now.getFullYear()}-${now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth()}-${DateCounter < 10 ? "0" + DateCounter : DateCounter}`,
                        );

                        let date = FData.list.find(
                            (item) =>
                                item.dt_txt.split(" ")[0] ===
                                `${now.getFullYear()}-${now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth()}-${DateCounter < 10 ? "0" + DateCounter : DateCounter}`,
                        );
                        let Fnow = new Date(date.dt_txt.split(" ")[0]);
                        FDay.innerHTML =
                            index == 0
                                ? "today"
                                : index == 1
                                    ? "tomorrow"
                                    : days[Fnow.getDay()];
                        FDay.classList.add(
                            `animate-[fade-in-top_0.6s_1.${index}s_cubic-bezier(0.390,0.575,0.565,1.000)_both]`,
                        );

                        FDate.innerHTML = `${months[now.getMonth()]} ${DateCounter},${now.getFullYear()}`;
                        FDate.classList.add(
                            `animate-[fade-in-top_0.6s_1.${index}s_cubic-bezier(0.390,0.575,0.565,1.000)_both]`,
                        );

                        function mode(array) {
                            return array
                                .sort(
                                    (a, b) =>
                                        array.filter((item) => item === a).length -
                                        array.filter((item) => item === b).length,
                                )
                                .pop();
                        }

                        let FWeatherIcon = mode(
                            dataDays.map((item) => item.weather[0].icon),
                        );
                        icon(FWeatherIcon, FWeather);

                        FWeather.classList.add(
                            `animate-[fade-in-top_0.6s_1.${index}s_cubic-bezier(0.390,0.575,0.565,1.000)_both]`,
                        );

                        let FTemps = dataDays.map((item) => item.main.temp).sort();
                        FTemp.innerHTML = `${Math.floor(FTemps[0] - 273.15)}°C / ${Math.floor(FTemps[FTemps.length - 1] - 273.15)}°C`;
                        FTemp.classList.add(
                            `animate-[fade-in-top_0.6s_1.${index}s_cubic-bezier(0.390,0.575,0.565,1.000)_both]`,
                        );

                        elm.addEventListener("click", () => {
                            forecastElm.forEach((e) => {
                                e.classList.replace("!bg-[#ededed8c]", "bg-white");
                            });
                            elm.classList.replace("bg-white", "!bg-[#ededed8c]");                           
                            hoursContainer.innerHTML = "";
                            dataDays.forEach((data, index) => {
                                var FHourIcon;
                                switch (data.weather[0].icon) {
                                    case "01d":
                                        FHourIcon = `<i class="bi bi-brightness-high text-4xl"></i>`;
                                        break;
                                    case "01n":
                                        FHourIcon = `<i class="bi bi-moon text-4xl"></i>`;
                                        break;
                                    case "02d":
                                        FHourIcon = `<i class="bi bi-cloud-sun text-4xl"></i>`;
                                        break;
                                    case "02n":
                                        FHourIcon = `<i class="bi bi-cloud-moon text-4xl"></i>`;
                                        break;
                                    case "03d":
                                    case "03n":
                                        FHourIcon = `<i class="bi bi-cloud text-4xl"></i>`;
                                        break;
                                    case "04d":
                                    case "04n":
                                        FHourIcon = `<i class="bi bi-clouds text-4xl"></i>`;
                                        break;
                                    case "09d":
                                    case "09n":
                                    case "10d":
                                    case "10n":
                                        FHourIcon = `<i class="bi bi-cloud-rain text-4xl"></i>`;
                                        break;
                                    case "11d":
                                    case "11n":
                                        FHourIcon = `<i class="bi bi-cloud-lightning text-4xl"></i>`;
                                        break;
                                    case "13d":
                                    case "13n":
                                        FHourIcon = `<i class="bi bi-cloud-snow text-4xl"></i>`;
                                        break;
                                    default:
                                        FHourIcon = `<i class="bi bi-tornado text-4xl"></i>`;
                                        break;
                                }
                                hoursContainer.insertAdjacentHTML(
                                    "beforeend",
                                    `<div class="flex flex-col justify-between items-center w-24 h-32 rounded-2xl p-2 bg-white bg-opacity-20 backdrop-blur-sm animate-[fade-in-left_0.6s_0.${index}s_cubic-bezier(0.390,0.575,0.565,1.000)_both]">
                                        <span class="text-lg">${data.dt_txt.split(" ")[1].split("").slice(0, 5).join("")}</span>
                                        ${FHourIcon}
                                        <span class="text-lg">${Math.floor(data.main.temp - 273.15)}°C</span>
                                    </div>`,
                                );
                            });
                        });

                        DateCounter++;
                    });
                });
        })
        .catch((err) => {
            Swal.fire({
                title: "Support error",
                text: "The selected city is not supported",
                icon: "error",
                heightAuto: false,
            });
        });
}

function showDate() {
    let date = now.getDate();
    let day = days[now.getDay()];
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    let time = new Date().toLocaleTimeString([], {
        hour : "2-digit",
        minute : "2-digit",
    })

    return `${day} ' ${month} ${date} , ${year} , ${time}`;
}

const autoCompleteJS = new autoComplete({
    // API Advanced Configuration Object
    selector: "#autoComplete",
    placeHolder: "Search for city...",
    searchEngine: "strict",
    data: {
        src: async () => {
            // Fetch External Data Source
            const source = await fetch(
                "https://countriesnow.space/api/v0.1/countries",
            );
            const data = await source.json();
            const Data = await data.data[98].cities;
            Data.splice(0, 3);
            Data.push("tehran", "Oryan", "Aliabad");
            // Returns Fetched data
            return Data;
        },
        key: ["cities"],
        cache: true,
    },
    resultsList: {
        element: (list, data) => {
            if (!data.results.length) {
                // Create "No Results" message element
                const message = document.createElement("div");
                // Add class to the created element
                message.setAttribute("class", "no_result");
                // Add message text content
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                // Append message element to the results list
                list.prepend(message);
            }
        },
        noResults: true,
        maxResults: 20,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
                forecastContainer.classList.remove(
                    "!flex",
                    "animate-[fade-in-top_0.6s_1s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                weatherIcon.classList.remove(
                    "!block",
                    "animate-[fade-in-top_0.6s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                tempElm.classList.remove(
                    "!block",
                    "animate-[fade-in-top_0.6s_0.2s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                cityElm.classList.remove(
                    "!block",
                    "animate-[fade-in-top_0.6s_0.2s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                infoContainer.classList.remove(
                    "!flex",
                    "animate-[fade-in-top_0.6s_0.8s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                Humidity.classList.remove(
                    "animate-[fade-in-top_0.3s_0.9s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                feelsLike.classList.remove(
                    "animate-[fade-in-top_0.3s_0.9s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                windSpeed.classList.remove(
                    "animate-[fade-in-top_0.3s_0.9s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                pressure.classList.remove(
                    "animate-[fade-in-top_0.3s_0.9s_cubic-bezier(0.390,0.575,0.565,1.000)_both]",
                );
                CurrentData(selection);
            },
        },
    },
});
