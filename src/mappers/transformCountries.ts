import { Country, CountryApi } from '../types/types';

export const transformCountries = (countries: CountryApi[]): Country[] => {
  return countries.map((country) => ({
    flag: country.flags.svg,
    name: country.name.common,
    capital: country.capital[0],
    region: country.region,
    area: country.area,
    population: country.population,
  }));
};
