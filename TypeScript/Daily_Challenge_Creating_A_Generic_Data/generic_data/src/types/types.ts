export interface Recipe {
  id: number;
  name: string;
  cuisine?: string;
  difficulty?: string;
  image?: string;
}

export interface RecipesApiResponse {
  recipes: Recipe[];
}

export interface DataState<T> {
  items: T[];
  loading: boolean;
  error: string | null;
}