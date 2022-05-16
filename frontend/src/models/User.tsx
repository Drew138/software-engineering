export interface User {
  id: number;
  username: string;
  first_name?: number;
  last_name?: number;
  rol: string;
  clases?: number[];
  clases_suscritas?: number[];
}