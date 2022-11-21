export enum CHOICE {
  Up = "Priority",
  Down = "Unwanted"
}

export interface Pastrie {
  id: string;
  ref: string;
  name: string;
  description: string;
  quantity: number;
  order: number;
  url?: string;
  tags?: Array<string>
  like?: string;
  choice?: CHOICE | null;
}

export interface List {
  id: string;
  list: Array<string>;
}
