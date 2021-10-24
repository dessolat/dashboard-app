import React from 'react';
import TestsList from './TestsList';
import DirIcon from './icons/DirIcon';
import PropTypes from 'prop-types'

const TestsTable = ({ tests, sort, setSort }) => {
  const handleHeaderClick = e => {
    setSort(prev => {
      const name = e.target.getAttribute('name');
      const newSort =
        prev.field === name
          ? { ...prev, dir: prev.dir === 'asc' ? 'desc' : 'asc' }
          : { ...prev, field: name };

      return newSort;
    });
  };

  return (
    <table className='tests-table'>
      <thead>
        <tr>
          <th name='name' onClick={handleHeaderClick}>
            NAME{' '}
            {sort.field === 'name' ? (
              sort.dir === 'asc' ? (
                <DirIcon dir={'asc'} />
              ) : (
                <DirIcon dir={'desc'} />
              )
            ) : null}
          </th>
          <th name='type' onClick={handleHeaderClick}>
            TYPE{' '}
            {sort.field === 'type' ? (
              sort.dir === 'asc' ? (
                <DirIcon dir={'asc'} />
              ) : (
                <DirIcon dir={'desc'} />
              )
            ) : null}
          </th>
          <th name='sortPriority' onClick={handleHeaderClick}>
            STATUS{' '}
            {sort.field === 'sortPriority' ? (
              sort.dir === 'asc' ? (
                <DirIcon dir={'asc'} />
              ) : (
                <DirIcon dir={'desc'} />
              )
            ) : null}
          </th>
          <th name='formattedUrl' onClick={handleHeaderClick}>
            SITE{' '}
            {sort.field === 'formattedUrl' ? (
              sort.dir === 'asc' ? (
                <DirIcon dir={'asc'} />
              ) : (
                <DirIcon dir={'desc'} />
              )
            ) : null}
          </th>
        </tr>
      </thead>
      <TestsList tests={tests} />
    </table>
  );
};

TestsTable.propTypes = {
	tests: PropTypes.array.isRequired, 
	sort: PropTypes.object.isRequired, 
	setSort: PropTypes.func.isRequired
}

export default TestsTable;
