import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getTest } from '../API/fetchData';
import BackIcon from '../components/icons/BackIcon';

const Results = () => {
  const { id } = useParams();
  const [test, setTest] = useState({});
  const history = useHistory();

  useEffect(() => {
    (async function () {
      try {
        const response = await getTest(id);
        setTest(response.data);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, [id]);

  return (
    <div className='unique-page'>
      <div className='page-content'>
        <h1>Results</h1>
        <h2 className='sub-header'>{test.name}</h2>
      </div>
      <button onClick={history.goBack} className='back-btn'>
        <BackIcon /> Back
      </button>
    </div>
  );
};

export default Results;
