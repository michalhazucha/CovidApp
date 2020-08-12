export interface ICountry {
  CountryISO: String;
  Country: String;
  Continent: String;
  Date: String;
  TotalCases: Number;
  NewCases: Number;
  TotalDeaths: Number;
  NewDeaths: Number;
  TotalCasesPerMillion: Number;
  NewCasesPerMillion: Number;
  TotalDeathsPerMillion: Number;
  NewDeathsPerMillion: Number;
  StringencyIndex: Number;
  DailyIncidenceConfirmedCases: Number;
  DailyIncidenceConfirmedDeaths: Number;
  DailyIncidenceConfirmedCasesPerMillion: Number;
  DailyIncidenceConfirmedDeathsPerMillion: Number;
  IncidenceRiskConfirmedPerHundredThousand: Number;
  IncidenceRiskDeathsPerHundredThousand: Number;
  IncidenceRiskNewConfirmedPerHundredThousand: Number;
  IncidenceRiskNewDeathsPerHundredThousand: Number;
  CaseFatalityRatio: Number;
}
