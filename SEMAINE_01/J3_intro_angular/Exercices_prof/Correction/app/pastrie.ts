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
}

export interface List {
  id: string;
  list: Array<string>;
}
