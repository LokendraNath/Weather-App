import Card from "./components/Card";
import Error from "./components/Error";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import { useWeatherStore } from "./store/store";

const App = () => {
  const error = useWeatherStore((state) => state.error);

  return (
    <Card>
      <SearchBar />
      {error && <Error error={error} />}
      <Weather />
    </Card>
  );
};
export default App;
