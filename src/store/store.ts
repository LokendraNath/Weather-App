import { create } from "zustand";

const apiKey = "534c015ba3f8d1d4c3eef5bf65e20fdb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  wind: { speed: number };
  weather: { main: string }[];
}
interface WeatherStore {
  city: string;
  weather: WeatherData | null;
  error: string;
  saveCites: string[];
  fetchWeather: (city: string) => void;
  addCity: (city: string) => void;
  removeCity: (city: string) => void;
}

const useStore = create<WeatherStore>((set) => ({
  city: "",
  weather: null,
  error: "",
  saveCites: [],
  fetchWeather: async (city) => {
    try {
      const res = fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (!(await res).ok) {
        set({ error: "Invalid City", weather: null });
        return;
      }
      const data: WeatherData = await (await res).json();
      set({ city: data.name, error: "", weather: data });
    } catch {
      set({ error: "Something Wend Wrong", weather: null });
    }
  },
  addCity: (city) =>
    set((state) => ({
      saveCites: state.saveCites.includes(city)
        ? state.saveCites
        : [...state.saveCites, city],
    })),
  removeCity: (city) =>
    set((state) => ({
      saveCites: state.saveCites.filter((c) => c !== city),
    })),
}));
