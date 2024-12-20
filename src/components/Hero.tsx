import getWeatherIcon from "@/utils/GetWeatherIcon";

import temperatureIcon from "@/assets/icons/main-status/temp.svg";
import pressureIcon from "@/assets/icons/main-status/fallout.svg";
import humidityIcon from "@/assets/icons/main-status/pressure.svg";
import windIcon from "@/assets/icons/main-status/wind.svg";
import cloudsImg from "@/assets/icons/main-status/Cloud-img.svg";

const Hero = ({ city, currentWeather }: { city: any; currentWeather: any }) => {
  const dt = new Date(currentWeather?.dt_txt);
  const year = dt.getFullYear();
  const month = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");

  const weatherMain = currentWeather?.weather[0]?.main || "Clear";
  const weatherIcon = getWeatherIcon(weatherMain);

  return (
    <div className="hero flex items-center justify-between flex-col md:flex-row gap-3 lg:gap-[5%] dark:text-slate-200">
      <div className="hero__main w-full md:w-auto min-w-72 shadow-md p-5 rounded-xl grid gap-4">
        <div className="hero__main--info max-w-56 grid grid-cols-2 gap-x-10">
          <div className="flex flex-col">
            <h1 className="text-8xl font-medium text-primary">
              {Math.round(currentWeather?.main.temp - 273.15)}°
            </h1>
          </div>
          <img
            src={weatherIcon}
            width={120}
            height={120}
            alt="weather-status"
            className="w-full h-full max-w-28 max-h-28"
          />
          <p className="text-2xl text-gray-600 col-span-2">{`${year}-${month}-${day}`}</p>
        </div>
        <div className="font-light flex md:flex-col flex-row gap-5 md:gap-0">
          <p className="text-2xl text-fadedPrimary leading-10">
            Время: {new Date().getHours()}:{new Date().getMinutes()}
          </p>
          <p className="text-2xl text-fadedPrimary leading-10">
            Город: {city?.name}
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('${cloudsImg}')`,
          backgroundSize: "60%",
        }}
        className="hero__info flex-grow shadow-md px-4 py-7 lg:px-10 self-stretch rounded-xl flex justify-center flex-col gap-5 bg-no-repeat bg-contain bg-right-top"
      >
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center shadow-md rounded-full">
            <img src={temperatureIcon} alt="temp icon" />
          </div>
          <span className="min-w-20 lg:min-w-28 text-greyAccent font-light text-sm">
            Температура
          </span>
          <p className="text-sm">
            {(currentWeather?.main?.temp - 273.15).toFixed(2)} - ощущается как{" "}
            {(currentWeather?.main?.feels_like - 273.15).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center shadow-md rounded-full">
            <img src={humidityIcon} alt="humidity icon" />
          </div>
          <span className="min-w-20 lg:min-w-28 text-greyAccent font-light text-sm">
            Давление
          </span>
          <p className="text-nowrap text-sm">
            {currentWeather?.main?.humidity} мм ртутного столба - нормальное
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center shadow-md rounded-full">
            <img src={pressureIcon} alt="pressure icon" />
          </div>
          <span className="min-w-20 lg:min-w-28 text-greyAccent font-light text-sm">
            Без осадков
          </span>
          <p className="text-nowrap text-sm">
            {(currentWeather?.main?.temp - 273.15).toFixed(2)} - ощущается как{" "}
            {(currentWeather?.main?.feels_like - 273.15).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center shadow-md rounded-full">
            <img src={windIcon} alt="wind icon" />
          </div>
          <span className="min-w-20 lg:min-w-28 text-greyAccent font-light text-sm">
            Ветер
          </span>
          <p className="text-nowrap text-sm">
            {currentWeather?.wind?.speed}м/с юго-запад - легкий ветер
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
