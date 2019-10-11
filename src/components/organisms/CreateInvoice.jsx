import React, { PureComponent } from 'react';

import LeftBar from '../atoms/LeftBar';
import Statistics from '../atoms/Statistics';
import TopBar from '../atoms/TopBar/';
import NewInvoiceModal from '../atoms/NewInvoiceModal';
import { Grid } from '../molecules/Grid';
import 'react-datepicker/dist/react-datepicker.css';

class CreateInvoice extends PureComponent {
  state = {
    showModal: false,
    startDate: new Date()
  };

  handleChange = date => this.setState({ startDate: date });

  handleOpenModal = () => this.setState({ showModal: true });

  handleCloseModal = () => this.setState({ showModal: false });

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <TopBar />
        <Grid>
          <LeftBar openModal={this.handleOpenModal} />
          <Statistics />
        </Grid>
        <NewInvoiceModal showModal={showModal} handleCloseModal={this.handleCloseModal}/>
      </div>
    );
  }
}

export default CreateInvoice;
