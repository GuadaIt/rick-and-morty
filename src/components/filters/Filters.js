import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterAction } from '../../redux/filterDuck';
import { getCharactersAction } from '../../redux/charactersDuck';
import { getLocationsAction } from '../../redux/locationsDuck';
import { getEpisodesAction } from '../../redux/episodesDuck';

import './Filters.css';

const Filters = ({ getCharactersAction, getEpisodesAction, getLocationsAction, filterAction }) => {

  const handleChange = e => filterAction(e.target.id);

  const handleClick = () => {
    getCharactersAction();
    getEpisodesAction();
    getLocationsAction();
  };

  return (
    <aside className="filters-aside">
      <form className="filters-form" onChange={handleChange}>
        
        <label htmlFor="characters" className="check-container">Characters
          <input type="radio" id="characters" name="radio" value="characters" defaultChecked/>
          <span className="checkmark"/>
        </label>
        
        <label htmlFor="locations" className="check-container">Locations
          <input type="radio" id="locations" name="radio" value="locations" />
          <span className="checkmark"/>
        </label>
        
        <label htmlFor="episodes" className="check-container">Episodes
          <input type="radio" id="episodes" name="radio" value="episodes" />
          <span className="checkmark"/>
        </label>
      </form>
      <button onClick={handleClick} type="button" name="reset" className="reset-btn">Reset</button>
    </aside>
  )
};

Filters.propTypes = {
  getCharactersAction: PropTypes.func,
  getEpisodesAction: PropTypes.func,
  getLocationsAction: PropTypes.func,
  filterAction: PropTypes.func
};

export default connect(null, { getCharactersAction, getEpisodesAction, getLocationsAction, filterAction })(Filters);