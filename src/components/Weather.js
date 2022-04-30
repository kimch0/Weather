import React, { useEffect, useState } from "react";
import Icon from "../hooks/Icon";
import Loading from "../hooks/Loading";
import "./Weather.css";

export default function Weather(props) {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLocation(props.locationProp);
    setWeather(props.weatherProp);
  }, []);

  useEffect(() => {
    if (location !== null && weather !== null) {
      setLoading(false);
    }
  }, [location, weather]);

  return (
    <>
      {!loading ? (
        <div>
          <div className="container text-center mt-5 mb-5" id="info">
            <div>
              <p className="fw-bold">The page was made with:</p>
              <ul className="p-0" style={{ listStyleType: "none" }}>
                <li className="fw-bold">React</li>
                <li className="fw-bold">Bootstrap</li>
                <li className="fw-bold">
                  Weather API: &nbsp;
                  <a href="https://openweathermap.org/">Open Weather</a>
                </li>
                <li className="fw-bold">
                  Location API: &nbsp;
                  <a href="https://www.abstractapi.com/">Abstract Api</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container" id="mainCont">
            <div className="text-center">
              <h1 className="mb-4">How is the weather?</h1>

              <div
                className="d-flex justify-content-center w-75 m-auto"
                id="mainInfo"
              >
                <div className="me-5">
                  <Icon code={weather.weather[0].id} />
                </div>

                <div className="d-flex flex-column">
                  <div>
                    <h4>
                      {weather.weather[0].description.charAt(0).toUpperCase() +
                        weather.weather[0].description.slice(1)}
                    </h4>
                  </div>
                  <div className="d-flex" id="temp">
                    <h3>Temperature: {weather.main.temp}</h3>
                    <span>&#8451;</span>
                  </div>
                  <div className="d-flex" id="temp">
                    <h5>"Feels like" Temperature: {weather.main.feels_like}</h5>
                    <span>&#8451;</span>
                  </div>
                </div>
              </div>
              <h3>
                Location: {location.country}, {location.city}
              </h3>

              <a
                className="bn40"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                More details
              </a>

              <div className="collapse" id="collapseExample">
                <div className="container w-100">
                  <div className="row">
                    <div className="col-lg-6 fw-bold g-3" id="col">
                      Atmospheric pressure: {weather.main.pressure} hPa
                    </div>
                    <div className="col-lg-6 fw-bold g-3" id="col">
                      Wind Speed: {weather.wind.speed}m/s
                    </div>
                    <div className="col-lg-6 fw-bold g-3" id="col">
                      Wind Direction: {weather.wind.deg}&#176;
                    </div>
                    <div className="col-lg-6 fw-bold g-3" id="col">
                      Cloud Coverage: {weather.clouds.all}%
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 fw-bold g-3" id="col">
                      Visibility: {weather.visibility}m
                    </div>
                    <div className="col-lg-6 fw-bold g-3" id="col">
                      Atmospheric pressure on the sea level:{" "}
                      {weather.main.sea_level} hPa
                    </div>
                    <div className="col-lg-6 fw-bold g-3" id="col">
                      Atmospheric pressure on the ground level:{" "}
                      {weather.main.grnd_level} hPa
                    </div>
                    <div className="col-lg-6 fw-bold g-3" id="col">
                      Relative Humidity: {weather.main.humidity}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
