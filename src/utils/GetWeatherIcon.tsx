import sunny from "@/assets/icons/status/sun.svg";
import cloudy from "@/assets/icons/status/cloudy.svg";
import rainy from "@/assets/icons/status/rain.svg";
import snowy from "@/assets/icons/status/small-rain.svg";
import thunderstorm from "@/assets/icons/status/small-rain.svg";
import mist from "@/assets/icons/status/sunshower.svg";

const getWeatherIcon = (weatherMain: string): string => {
  switch (weatherMain) {
    case "Clear":
      return sunny;
    case "Clouds":
      return cloudy;
    case "Rain":
    case "Drizzle":
      return rainy;
    case "Snow":
      return snowy;
    case "Thunderstorm":
      return thunderstorm;
    case "Mist":
    case "Fog":
    case "Haze":
      return mist;
    default:
      return sunny; // Fallback to sunny if no match
  }
};

export default getWeatherIcon;
