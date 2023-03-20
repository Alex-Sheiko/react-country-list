type BadgeLabel = 'area' | 'population';

interface Country {
  flag: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

interface CountryApi {
  flags: CountryFlagsApi;
  name: CountryNameApi;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface CountryFlagsApi {
  png: string;
  svg: string;
}

interface CountryNameApi {
  common: string;
  official: string;
  nativeName: CountryNativeNameApi;
}

interface CountryNativeApi {
  official: string;
  common: string;
}

interface CountryNativeNameApi {
  [key: string]: CountryNativeApi | undefined;
}

export type { BadgeLabel, Country, CountryApi };
