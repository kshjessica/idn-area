import { SortOptions } from '@/sort/sort.service';

export type CommonData = Record<string, unknown> & {
  code: string;
  name: string;
};

export type FindOptions<T extends CommonData> = SortOptions<T> & {
  name?: string;
};

export interface CommonService<T extends CommonData> {
  /**
   * If the name is empty, all data will be returned.
   * Otherwise, it will only return the data with the matching name.
   */
  find(options: FindOptions<T>): Promise<T[]>;

  /**
   * Find a data by its code.
   *
   * @returns A data or `null`.
   */
  findByCode(code: string): Promise<T | null>;
}
