import { CountryList } from './components/CountryList';
import countries from './data/country-data.json';
import { transformCountries } from './mappers/transformCountries';
import { Country } from './types/types';

export const App = () => {
  const transformedCountries: Country[] = transformCountries(countries);

  return (
    <div className="container">
      <h1 className="m-3">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
