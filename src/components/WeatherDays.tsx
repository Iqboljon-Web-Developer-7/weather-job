import getWeatherIcon from "@/utils/GetWeatherIcon";

const WeatherDays = ({ uniqueDays }: { uniqueDays: any }) => {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {uniqueDays.map((day: any, index: number) => {
          const isToday = index === 0;
          const isTomorrow = index === 1;

          return (
            <div
              key={index}
              className="p-3 rounded-lg shadow-md bg-blue-50 dark:bg-blue-900 dark:shadow-slate-700"
            >
              <p className="text-lg font-medium text-black dark:text-gray-300">
                {isToday
                  ? "Сегодня"
                  : isTomorrow
                  ? "Завтра"
                  : new Date(day.dt * 1000).toLocaleDateString("ru-RU", {
                      weekday: "short",
                      timeZone: "UTC",
                    })}
              </p>
              <p className="text-sm text-greyAccent dark:text-greyAccent">
                {new Date(day.dt * 1000).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "short",
                  timeZone: "UTC",
                })}
              </p>
              <img
                src={getWeatherIcon(day?.weather[0]?.main || "Clear")}
                alt={day.weather[0].description}
                className="my-3"
              />
              <p className="text-lg font-medium text-black dark:text-white">
                {Math.round(day.main.temp_max - 273.15)}°C
              </p>
              <p className="text-xs font-normal text-greyAccent dark:text-gray-400">
                {Math.round(day.main.temp_min - 273.15)}°C
              </p>
              <p className="text-sm text-greyAccent mt-1 dark:text-gray-400">
                {day.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WeatherDays;
