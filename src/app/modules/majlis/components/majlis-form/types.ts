export interface IMajlisForm {
  name: string;
  city: number;
  district: number;
  status: boolean;
  image: string;
}

export interface ILookupItem {
  id: number;
  name: string;
}

export interface INestedLookupItem {
  cityId: number;
  items: ILookupItem[];
}
