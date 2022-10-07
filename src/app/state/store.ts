import { FilterOptions } from "../../assets/data/report-metadata";

export interface AppState{
  filtersState : FiltersState;
}

export interface FiltersState{
  filters: FilterOptions;
}

export const INITIAL_STATE: AppState = {
  filtersState : null
};