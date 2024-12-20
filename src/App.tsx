import { useEffect, useState } from "react";
import Header from "./components/Header";
import axiosFun from "@/API/index";
import logo from "@/assets/icons/main/logo.svg";
import Hero from "./components/Hero";
import WeatherDays from "./components/WeatherDays";

const App = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentWeather, setCurrentWeather] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosFun.get("", {
          params: { location: "London", days: "7" },
        });
        setWeatherData(response.data);
        setCurrentWeather(response.data.list[0]);
        setLoading(false);
      } catch (err: any) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
    );
  if (error) return <p>{error}</p>;

  const { city, list } = weatherData;

  const uniqueDays = Array.from(
    new Map(list.map((item: any) => [item.dt_txt.slice(0, 10), item])).values()
  );

  return (
    <main className="bg-white dark:bg-bgMain transition-all min-h-screen">
      <div className="max-w-screen-xl mx-auto p-4">
        <Header />
        <Hero city={city} currentWeather={currentWeather} />
        <WeatherDays uniqueDays={uniqueDays} />
      </div>
    </main>
  );
};

export default App;
