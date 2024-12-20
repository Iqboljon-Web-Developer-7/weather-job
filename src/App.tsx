import { useEffect, useState } from "react";
import Header from "./components/Header";
import axiosFun from "@/API/index";
import logo from "@/assets/icons/main/logo.svg";
import Hero from "./components/Hero";

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
  console.log(currentWeather);

  return (
    <main className="bg-white dark:bg-bgMain transition-all min-h-screen">
      <div className="max-w-screen-xl mx-auto p-4">
        <Header />
        <Hero city={city} currentWeather={currentWeather} />
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7-Day Forecast</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {list.map((day: any, index: number) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg text-center shadow-md"
              >
                <p className="font-medium">
                  {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                  className="mx-auto"
                />
                <p className="text-xl font-bold">
                  {Math.round(day.main.temp)}°C
                </p>
                <p className="text-sm text-gray-600">
                  {day.weather[0].description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
