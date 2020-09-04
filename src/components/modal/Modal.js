import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModalAction } from '../../redux/modalDuck';
import { Searching, Card } from '../';
import './Modal.css';

const Modal = ({ modal, hideModalAction }) => {

  const handleClick = () => hideModalAction();

  const { info, fetching } = modal;

  if (fetching) return <div className="modal"><Searching /></div>;

  if (info.__typename === 'Character') {
    return (
      <div className="modal">
      <button onClick={handleClick} className="close-modal-btn">
        <p id="btn-p" >X</p>
      </button>

      <div className="img-container">
        <img id="modal-img" src={info.image} alt={info.name} />
      </div>

      <h2>{info.name}</h2>
      <p><span>Species:</span> {info.species}</p>
      <p><span>Gender:</span> {info.gender}</p>
    </div>
    )
  };

  if (info.__typename === 'Location') {
    return (
      <div className="modal">
      <button onClick={handleClick} className="close-modal-btn">
        <p id="btn-p" >X</p>
      </button>

      <h2>{info.name}</h2>
      <p><span>Type:</span> {info.__typename}</p>
      <p><span>Dimension:</span> {info.dimension}</p>
      <div className="residents-container">
        {info.residents.map((resident, i) => <Card key={i} info={resident} />)}
      </div>
    </div>
    )
  };

  if (info.__typename === 'Episode') {
    return (
      <div className="modal">
      <button onClick={handleClick} className="close-modal-btn">
        <p id="btn-p" >X</p>
      </button>

      <h2>{info.name}</h2>
      <p><span>Episode:</span> {info.episode}</p>
      <p><span>Release date:</span> {info.air_date}</p>
      <div className="residents-container">
        {info.characters.map((char, i) => <Card key={i} info={char} />)}
      </div>
    </div>
    )
  };
};

const mapState = state => {
  return {
    modal: state.modal
  }
};

Modal.propTypes = {
  modal: PropTypes.object.isRequired,
  hideModalAction: PropTypes.func
};

export default connect(mapState, { hideModalAction })(Modal);