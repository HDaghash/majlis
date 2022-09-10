export interface IMajlisForm {
  formType?: 'add' | 'edit';
  id?: number;
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
