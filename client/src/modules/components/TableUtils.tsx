export type Order = 'asc' | 'desc';

export function comparator<T>(
  a: T,
  b: T,
  orderBy: keyof T,
  order: Order = 'desc',
) {
  if (a[orderBy] === null) {
    return 1;
  }
  if (b[orderBy] === null) {
    return -1;
  }

  if (b[orderBy] < a[orderBy]) {
    return order === 'desc' ? -1 : 1;
  }

  if (b[orderBy] > a[orderBy]) {
    return order === 'desc' ? 1 : -1;
  }

  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string | null },
  b: { [key in Key]: number | string | null },
) => number {
  return (a, b) => comparator(a, b, orderBy, order);
}
