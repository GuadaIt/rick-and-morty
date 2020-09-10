import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { getCharactersAction } from '../../redux/charactersDuck';
import { getLocationsAction } from '../../redux/locationsDuck';
import { getEpisodesAction } from '../../redux/episodesDuck';
import { LoadingSpinner, ErrorPage, Card } from '../';
import './Results.css';

const Results = ({ characters, episodes, locations, filter, getCharactersAction, getLocationsAction, getEpisodesAction }) => {

  const filters = { characters, locations, episodes };

  const pages = filters[filter].pages;

  const handleChange = (e, value) => {
    if (filter === 'characters') {
      getCharactersAction(value);
    } else if (filter === 'locations') {
      getLocationsAction(value);
    } else {
      getEpisodesAction(value);
    };
  };

  if (filters[filter].fetching) return <LoadingSpinner />;

  return (
    <section className="cards-section">
      {!filters[filter].err ?
        <>
          <div className="cards-container">
            {filters[filter].array.map(item => <Card key={item.id} info={item} />)}
          </div>
          <Pagination count={pages} variant="outlined" shape="rounded" onChange={handleChange} />
        </>
        : <ErrorPage err={filters[filter].err} />
      }

    </section>
  )
};

const mapState = state => ({
  characters: state.characters,
  locations: state.locations,
  episodes: state.episodes,
  filter: state.filter.searcher
});

Results.propTypes = {
  characters: PropTypes.object.isRequired,
  episodes: PropTypes.object.isRequired,
  locations: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  getCharactersAction: PropTypes.func,
  getLocationsAction: PropTypes.func,
  getEpisodesAction: PropTypes.func
};

export default connect(mapState, { getCharactersAction, getLocationsAction, getEpisodesAction })(Results);