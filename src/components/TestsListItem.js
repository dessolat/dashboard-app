import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TYPES = {
  CLASSIC: 'Classic',
  MVT: 'MVT',
  SERVER_SIDE: 'Server-side'
};

const TestsListItem = ({ test }) => {
  const nameClass = test.siteId === 1 ? 'red-border' : test.siteId === 2 ? 'purple-border' : 'blue-border';
  const statusClass =
    test.status === 'STOPPED'
      ? 'red-text'
      : test.status === 'ONLINE'
      ? 'green-text'
      : test.status === 'PAUSED'
      ? 'orange-text'
      : '';
  const btnClass = test.status === 'DRAFT' ? 'btn btn-gray' : 'btn btn-green';
  const btnText = test.status === 'DRAFT' ? 'Finalize' : 'Results';
  return (
    <tr>
      <td className={nameClass}>{test.name}</td>
      <td>{TYPES[test.type]}</td>
      <td className={statusClass}>{test.status.toLowerCase()}</td>
      <td>{test.formattedUrl}</td>
      <td>
        <Link to={`/${test.status === 'DRAFT' ? `finalize/${test.id}` : `results/${test.id}`}`} className={btnClass}>
          {btnText}
        </Link>
      </td>
    </tr>
  );
};

TestsListItem.propTypes = {
	test: PropTypes.object.isRequired
}

export default TestsListItem;
