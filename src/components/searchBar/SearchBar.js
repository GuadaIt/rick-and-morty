import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchCharAction } from '../../redux/charactersDuck';
import { searchLocAction }  from '../../redux/locationsDuck';
import { searchEpAction } from '../../redux/episodesDuck';

import './SearchBar.css';

const SearchBar = ({ filter, searchCharAction, searchLocAction, searchEpAction }) => {

  const entity = {
    'characters': searchCharAction,
    'locations': searchLocAction,
    'episodes': searchEpAction
  };

  const [type, setType] = useState('name');
  
  const handleChange = e => {
    if(e.target.name === 'search-term' && e.target.value.length > 2) {
      entity[filter](e.target.value, type);
    } else if (e.target.name === 'search-type') {
      setType(e.target.value)
    };
  };

  return (
    <div className="search-form">
      <input onChange={handleChange} type="text" placeholder="Search..." name="search-term"/> 
      <select name="search-type" className="search-type" onChange={handleChange}>
        <option value="name">Name</option>
        <option value="type">Type</option>
      </select>
    </div>
  )
};

const mapState = state => ({ filter: state.filter.searcher });

SearchBar.propTypes = {
  filter: PropTypes.string.isRequired,
  searchCharAction: PropTypes.func,
  searchLocAction: PropTypes.func,
  searchEpAction: PropTypes.func
};

export default connect(mapState, { searchCharAction, searchLocAction, searchEpAction })(SearchBar);