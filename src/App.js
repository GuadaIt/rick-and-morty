import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchBar, Header, MainContainer, Modal, Footer } from './components';

import './App.css';

const App = ({ hidden }) => {  

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MainContainer />
      <Footer />

      {!hidden && <Modal />}

    </div>
  );
};

const mapState = state => {
  return {
    hidden: state.modal.hidden
  }
};

App.propTypes = {
  hidden: PropTypes.bool.isRequired
};

export default connect(mapState)(App);