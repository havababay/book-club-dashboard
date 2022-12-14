import { AgeRange, FilterOptions } from "../../assets/data/report-metadata";

export interface AppState{
  filtersState : FiltersState;
  readsByAgeState : ReadsByAgeState;
}

export interface FiltersState{
  filters: FilterOptions;
}

export const INITIAL_STATE: AppState = {
  filtersState : null,
  readsByAgeState : null
};

export interface ReadsByAgeState {
  loading: boolean;
  data : Map<AgeRange, number>;
  error: string;
}