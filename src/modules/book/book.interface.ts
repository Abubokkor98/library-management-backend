export type Genre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export interface IBook {
  title: string;
  author: string;
  image: string;
  genre: Genre;
  isbn: string;
  description: string;
  price: number;
  copies: number;
  available: boolean;
  updateAvailability?: () => void;
}
