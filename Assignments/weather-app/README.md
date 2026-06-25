# Weather Search Application

A React-based weather lookup tool built as an assignment for the Internship. This application allows users to search for a city and retrieve its current weather details by utilizing API chaining with the Open-Meteo API.

## Features

* **City Search:** Users can enter any city name to retrieve weather conditions.
* **API Chaining:** First, fetches the latitude and longitude of the requested city using the Open-Meteo Geocoding API. Then, uses those coordinates to fetch the weather data via the Open-Meteo Forecast API.
* **Real-Time Data:** Displays the current Temperature, Wind Speed, and Time of Observation.
* **Dynamic UI:** Includes conditional rendering to display a loading state while fetching data and an error message if the city is invalid or the fetch fails.

## Technologies Used

* **Frontend:** React (Functional Components, Hooks like `useState`)
* **Build Tool:** Vite
* **API:** [Open-Meteo](https://open-meteo.com/) (Geocoding API & Forecast API)
* **Asynchronous Logic:** `async/await`, Fetch API
