import { Country } from '../types/types';
import { Badge } from './Badge';

interface CountryItemProps {
  country: Country;
}

export const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: CountryItemProps) => {
  return (
    <li className="list-group-item d-flex row align-items-center justify-content-between">
      <img className="col-1" src={flag} alt="flag" width="105" height="50" />
      <p className="col-2 p-0">{name}</p>
      <p className="col-2 p-0">{capital}</p>
      <p className="col-2 p-0">{region}</p>

      <Badge color="primary" value={area} label="area" />
      <Badge color="secondary" value={population} label="population" />
    </li>
  );
};
