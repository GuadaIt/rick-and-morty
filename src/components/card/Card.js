import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModalAction } from '../../redux/modalDuck';
import './Card.css';

const Card = ({ info, showModalAction }) => {

  const handleClick = e => showModalAction(e.target.id, info.__typename);

  const renderCard = () => {
    switch (info.__typename) {
      case 'Character':
        return (
          <article id={info.id} className="card" onClick={handleClick}>
            <div className="img-container">
              <img id="card-img" src={info.image} alt={info.name} />
            </div>
            <p>{info.name}</p>
          </article>
        )
      case 'Episode':
        return (
          <article id={info.id} className="card" onClick={handleClick}>
            <p>{info.name}</p>
            <p className="blue-text">{info.episode}</p>
          </article>
        )
      case 'Location':
        return (
          <article id={info.id} className="card" onClick={handleClick}>
            <p className="underlined-text">{info.name}</p>
            <p>Type: {info.type}</p>
          </article>
        )
      default:
        return (
          <article id={info.id} className="card" onClick={handleClick}>
            <p className="underlined-text">{info.name}</p>
          </article>
        )
    };
  };

  return renderCard();
};

Card.propTypes = {
  info: PropTypes.object.isRequired,
  showModalAction: PropTypes.func
};

export default connect(null, { showModalAction })(Card);