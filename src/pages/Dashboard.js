import React, { useEffect, useState } from 'react';
import { getSites, getTests } from '../API/fetchData';
import SearchPanel from '../components/SearchPanel';
import TestsTable from '../components/TestsTable';
import { useTests } from '../hooks/useTests';

const Dashboard = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({
    field: 'type',
    dir: 'asc'
  });

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await getTests();
        if (response.statusText === 'OK') {
          const testsData = response.data;

          try {
            const response = await getSites();
            if (response.statusText === 'OK') {
              const addedTestsData = testsData.map(test => {
                const findSite = id => response.data.find(site => site.id === id).url;
                const formatSite = url => url.replace(/https?:\/\/(?:www\.|)([\w.-]+).*/gm, '$1');

                return {
                  ...test,
                  formattedUrl: formatSite(findSite(test.siteId)),
                  sortPriority:
                    test.status === 'ONLINE'
                      ? 1
                      : test.status === 'PAUSED'
                      ? 2
                      : test.status === 'STOPPED'
                      ? 3
                      : 4
                };
              });
              setTests(addedTestsData);
              setIsLoading(false);
            }
          } catch (err) {
            setError(err.message);
          }
        }
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  const filteredAndSortedTests = useTests(tests, sort, search);

  return (
    <>
      {error ? (
        <div className='error-msg'>{error}</div>
      ) : isLoading ? (
        <div className='loader'>Loading tests...</div>
      ) : (
        <>
          <h1>Dashboard</h1>
          <div className='search-section'>
            <SearchPanel
              isLoading={isLoading}
              count={filteredAndSortedTests.length}
              search={search}
              setSearch={setSearch}
            />
          </div>

          {filteredAndSortedTests.length > 0 ? (
            <TestsTable tests={filteredAndSortedTests} sort={sort} setSort={setSort} />
          ) : search !== '' ? (
            <div className='not-found-wrapper'>
              <h2 className='not-found-message'>Your search did not match any results.</h2>
              <button className='btn btn-green reset-btn' onClick={() => setSearch('')}>Reset</button>
            </div>
          ) : (
            <div className='tests-message'>No tests loaded...</div>
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
