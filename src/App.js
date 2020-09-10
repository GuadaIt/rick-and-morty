import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchBar, Header, MainContainer, Modal, Footer } from './components';

import './App.css';

const App = ({ isModalHidden }) => (  
  <div className="App">
    <Header />
    <SearchBar />
    <MainContainer />
    <Footer />

    {!isModalHidden && <Modal />}

  </div>
);

const mapState = state => ({ isModalHidden: state.modal.isModalHidden });

App.propTypes = { isModalHidden: PropTypes.bool.isRequired };

export default connect(mapState)(App);