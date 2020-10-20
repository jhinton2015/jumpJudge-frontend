import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface AthleteTableItem {
  name: string;
  id: number;
  team: string;
  entry: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: AthleteTableItem[] = [
  {id: 1, name: 'Will Claye', entry: 27.6, team: 'Adidas'},
  {id: 2, name: 'Mike Powell', entry: 29.3, team: 'Puma'},
  {id: 3, name: 'Carl Lewis', entry: 28.1, team: 'Asics'},
  {id: 4, name: 'Christian Taylor', entry: 26.2, team: 'Nike'},
  {id: 5, name: 'Bob Beamon', entry: 29.1, team: 'New Balance'},
  {id: 6, name: 'Jesse Owens', entry: 26.8, team: 'USA'},
  {id: 7, name: 'Tajay Gayle', entry: 28.5, team: 'Jamaica'},
];

/**
 * Data source for the AthleteTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AthleteTableDataSource extends DataSource<AthleteTableItem> {
  data: AthleteTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<AthleteTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: AthleteTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: AthleteTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'entry': return compare(+a.entry, +b.entry, isAsc);
        case 'team': return compare(a.team, b.team, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
