import { Pipe, PipeTransform } from '@angular/core';
import { ILookupItem, INestedLookupItem } from 'app/modules/majlis/components/majlis-form/types';

@Pipe({
  name: 'lookupItem'
})
export class LookupItemPipe implements PipeTransform {
  transform(value: number, items: ILookupItem[] | INestedLookupItem[]): string {
    const item = (items as ILookupItem[]).find(i => i.id === value)?.name;

    if (item) {
      return item;
    }

    const nestedItem = (items as INestedLookupItem[]).find(i =>
      i.items.some((nested: ILookupItem) => nested.id === value)
    );

    const nestedTarget = nestedItem?.items.find(i => i.id === value)?.name;

    if (nestedTarget) {
      return nestedTarget;
    }

    return '--';
  }
}
