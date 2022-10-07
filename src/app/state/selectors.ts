import { createFeatureSelector } from "@ngrx/store";
import { FiltersState } from "./store";

export const getFiltersState =
  createFeatureSelector<FiltersState>('filtersState');