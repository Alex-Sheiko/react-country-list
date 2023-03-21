import { Country } from '../types/types';
import { CountryItem } from './CountryItem';

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <div className="container">
      <ul className="list-group">
        {countries.map((country) => {
          return <CountryItem country={country} />;
        })}
      </ul>
    </div>
  );
};
