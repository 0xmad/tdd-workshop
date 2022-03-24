import fc from 'fast-check';

import { sortList } from '../sort';

describe('utils/sort', () => {
  test('should sort properly', () => {
    const result = sortList([1, 5, 6, 7, 10, -1]);

    expect(result).toStrictEqual([-1, 1, 5, 6, 7, 10]);
  });

  test('should check double sort property', () => {
    fc.assert(
      fc.property(fc.array(fc.nat()), (list: number[]) => {
        const sorted = sortList(list);
        const result = sortList(sorted);

        return result.every((num, index) => sorted[index] === num);
      }),
    );
  });
});
