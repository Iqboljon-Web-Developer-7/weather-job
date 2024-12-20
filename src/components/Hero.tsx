import getWeatherIcon from "@/utils/GetWeatherIcon";

import temperatureIcon from "@/assets/icons/main-status/temp.svg";
import humidityIcon from "@/assets/icons/main-status/fallout.svg";
import pressureIcon from "@/assets/icons/main-status/pressure.svg";
import windIcon from "@/assets/icons/main-status/wind.svg";

const Hero = ({ city, currentWeather }: { city: any; currentWeather: any }) => {
  const dt = new Date(currentWeather?.dt_txt);
  const year = dt.getFullYear();
  const month = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");

  const weatherMain = currentWeather?.weather[0]?.main || "Clear";
  const weatherIcon = getWeatherIcon(weatherMain);

  console.log(currentWeather);

  return (
    <div className="hero flex items-center justify-between gap-[5%]">
      <div className="hero__main shadow-md p-5 rounded-xl grid gap-5">
        <div className="hero__main--info grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <h1 className="text-8xl font-medium text-primary">
              {Math.round(currentWeather?.main.temp - 273.15)}°
            </h1>
            <p className="text-2xl text-gray-600">{`${year}-${month}-${day}`}</p>
          </div>
          <img
            src={weatherIcon}
            width={120}
            height={120}
            alt="weather-status"
            className="w-full h-full max-w-28 max-h-28"
          />
        </div>
        <div className="font-light">
          <p className="text-2xl text-fadedPrimary leading-10">
            Время: {new Date().getHours()}:{new Date().getMinutes()}
          </p>
          <p className="text-2xl text-fadedPrimary leading-10">
            Город: {city?.name}
          </p>
        </div>
      </div>
      <div className="hero__info flex-grow shadow-md px-10 self-stretch rounded-xl flex justify-center flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center shadow-md rounded-full">
            <img src={temperatureIcon} alt="temp icon" />
          </div>
          <span className="text-greyAccent font-light">Температура</span>
          <p className="text-nowrap">
            {(currentWeather?.main?.temp - 273.15).toFixed(2)} - ощущается как{" "}
            {(currentWeather?.main?.feels_like - 273.15).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center shadow-md rounded-full">
            <img src={temperatureIcon} alt="temp icon" />
          </div>
          <span className="text-greyAccent font-light">Температура</span>
          <p className="text-nowrap">
            {(currentWeather?.main?.temp - 273.15).toFixed(2)} - ощущается как{" "}
            {(currentWeather?.main?.feels_like - 273.15).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center shadow-md rounded-full">
            <img src={temperatureIcon} alt="temp icon" />
          </div>
          <span className="text-greyAccent font-light">Температура</span>
          <p className="text-nowrap">
            {(currentWeather?.main?.temp - 273.15).toFixed(2)} - ощущается как{" "}
            {(currentWeather?.main?.feels_like - 273.15).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center shadow-md rounded-full">
            <img src={temperatureIcon} alt="temp icon" />
          </div>
          <span className="text-greyAccent font-light">Температура</span>
          <p className="text-nowrap">
            {(currentWeather?.main?.temp - 273.15).toFixed(2)} - ощущается как{" "}
            {(currentWeather?.main?.feels_like - 273.15).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
