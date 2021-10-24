import React from 'react';
import TestsListItem from './TestsListItem';
import PropTypes from 'prop-types';

const TestsList = ({ tests }) => {
  return (
    <tbody>
      {tests.map(test => (
        <TestsListItem key={test.id} test={test} />
      ))}
    </tbody>
  );
};

TestsList.propTypes = {
	tests: PropTypes.array.isRequired
}

export default TestsList;
