import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import Loading from "../hooks/Loading";
import Error from "../hooks/Error";

const GEO_KEY = "54c4e547777f4955ba85f9c775413a4a";
const GEO_API = "https://ipgeolocation.abstractapi.com/v1/?api_key=" + GEO_KEY;

const WEATHER_KEY = "754e5cabbdbdc93434cf3ad175833a12";

export default function Main() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getLocation = async (url) => {
      try {
        let res = await fetch(url),
          json = await res.json();
        setLocation(json);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    getLocation(GEO_API);
  }, []);

  useEffect(() => {
    if (location !== null) {
      getWeather();
    }
  }, [location]);

  const getWeather = () => {
    const weather = async () => {
      try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${WEATHER_KEY}&units=metric`
          ),
          json = await response.json();

        setWeather(json);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    weather();
  };

  useEffect(() => {
    if (weather !== null) {
      setLoading(false);
    }
  }, [weather]);

  return (
    <>
      <div className="w-100 h-100 background">
        {!loading ? (
          <>
            {!error ? (
              <Weather locationProp={location} weatherProp={weather} />
            ) : (
              <Error/>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
