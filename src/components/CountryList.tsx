import { Country } from '../types/types';
import { CountryItem } from './CountryItem';

interface ListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: ListProps) => {
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
