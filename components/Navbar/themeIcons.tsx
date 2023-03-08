import { useEffect } from "react";
import cn from "classnames";
import { SunLight, HalfMoon } from "iconoir-react";
import { lightAnimation, darkAnimation } from "./animations";
import { useTheme } from "next-themes";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();

  const toggleMode = async () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (theme == "dark") {
      darkAnimation();
    } else {
      lightAnimation();
    }
  }, [theme]);
  return (
    <button
      className={cn(
        " w-10 h-10 rounded-full ",
        "hover:bg-light-container-3",
        "dark:hover:bg-dark-container-3",
        "flex items-center justify-center"
      )}
      onClick={toggleMode}
    >
      {theme == "dark" ? (
        <HalfMoon id='moon' className='h-6 w-6' />
      ) : (
        <SunLight id='sun' className='h-6 w-6' />
      )}
    </button>
  );
};

export default ThemeIcon;
