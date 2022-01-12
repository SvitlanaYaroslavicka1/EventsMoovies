import React, { Component } from 'react';
import Modal from '../Modal/Modal';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        {this.state.show && (
          <Modal handleClose={this.hideModal}>
            <p>Modal</p>
          </Modal>
        )}
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }
}
