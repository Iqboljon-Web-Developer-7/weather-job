import logo from "@/assets/icons/main/logo.svg";
import themeSwitcher from "@/assets/icons/main/theme-switcher.svg";
import { useState } from "react";

const Header = ({
  setLocation,
}: {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleThemeSwitch = () => {
    document.body.classList.toggle("dark");
  };

  const [search, setSearch] = useState("");

  return (
    <header className="header flex items-center justify-between py-5 px-2 gap-2">
      <div className="header__main flex items-center justify-center gap-5">
        <img width={65} height={65} src={logo} alt="website-logo" />
        <h2 className="uppercase text-2xl font-bold tracking-wider text-primary">
          React Weather
        </h2>
      </div>
      <div className="header__nav flex items-center justify-center gap-5">
        <button onClick={() => handleThemeSwitch()} className="flex-shrink-0">
          <img src={themeSwitcher} alt="theme-switcher" />
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLocation(search);
          }}
        >
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Выбрать город"
            className="bg-bgPrimary py-2 px-4 rounded-2xl placeholder:text-black dark:text-white dark:placeholder:text-white"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
