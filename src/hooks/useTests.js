import { useMemo } from 'react';

export const useSortedTests = (tests, sort) =>
  useMemo(
    () =>
      [...tests].sort((a, b) => {
        const { field, dir } = sort;
        return dir === 'asc' ? (a[field] > b[field] ? 1 : -1) : a[field] > b[field] ? -1 : 1;
      }),
    [tests, sort]
  );

export const useTests = (tests, sort, search) => {
  const sortedTests = useSortedTests(tests, sort);

  return useMemo(() => {
    return search !== ''
      ? sortedTests.filter(test => test.name.toLowerCase().includes(search.toLowerCase()))
      : sortedTests;
  }, [sortedTests, search]);
};
