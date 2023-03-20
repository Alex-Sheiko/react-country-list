import { Country } from '../types/types';
import { Badge } from './Badge';

interface ItemProps {
  country: Country;
}

export const CountryItem = ({ country }: ItemProps) => {
  return (
    <li className="list-group-item d-flex row align-items-center justify-content-between">
      <img
        className="col-1"
        src={country.flag}
        alt="flag"
        width="105"
        height="50"
      />
      <div className="col-2 p-0">{country.name}</div>
      <div className="col-2 p-0">{country.capital}</div>
      <div className="col-2 p-0">{country.region}</div>

      <Badge color="primary" value={country.area} label="area" />
      <Badge color="secondary" value={country.population} label="population" />
    </li>
  );
};
