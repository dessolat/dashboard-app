import React from 'react';
import SearchIcon from '../components/SearchIcon';
import PropTypes from 'prop-types';


const SearchPanel = ({ isLoading, count, search, setSearch }) => {

  return (
    <div className='search-wrapper'>
      <div className='search-content'>
        <SearchIcon />
        <form className='search-form'>
          <input type='text' placeholder='What test are you looking for?' value={search} onChange={e => setSearch(e.target.value)}/>
        </form>
        <span className='search-info'>{!isLoading && `${count} tests`}</span>
      </div>
    </div>
  );
};

SearchPanel.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	count: PropTypes.number.isRequired,
	search: PropTypes.string.isRequired,
	setSearch: PropTypes.func.isRequired
}

export default SearchPanel;
