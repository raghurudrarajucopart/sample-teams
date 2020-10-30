import React from 'react'
import PhoneDialer from '8x8_PhoneDialer';

export default class PhoneDialerPad extends React.Component {
  constructor () {
    super();
    this.state = {
      callInfoText: ""
    };
    this.onCloseDialer = this.onCloseDialer.bind(this);
    this.onSubmitNumber = this.onSubmitNumber.bind(this);
  }

  onCloseDialer() {
    window.alert("close");
  }
  onSubmitNumber(phoneNumber) {
    window.console.log(phoneNumber);
    this.setState({ callInfoText: 'CEO - Vikram Verma'});
  }

  render () {
    return (
      <div className="userMeetingDetailsInner phoneDailerPad">
        <PhoneDialer
          onCloseDialer={this.onCloseDialer}
          onSubmitNumber={this.onSubmitNumber}
          onMute={(d, i) => console.log('onMute, d, i: ', d, i)}
          onVideo={(d, i) => console.log('onVideo, d, i: ', d, i)}
          onDialPad={(d, i) => console.log('onDialPad, d, i: ', d, i)}
          onAddCall={(d, i) => console.log('onAddCall, d, i: ', d, i)}
          onTransferCall={(d, i) => console.log('onTransferCall, d, i: ', d, i)}
          onRecord={(d, i) => console.log('onRecord, d, i: ', d, i)}
          onHold={(d, i) => console.log('onHold, d, i: ', d, i)}
          onPark={(d, i) => console.log('onPark, d, i: ', d, i)}
          onHangup={(d, i) => console.log('onHangup, d, i: ', d, i)}
          onCallInfoText={(d, i) => console.log('onCallInfoText, d, i: ', d, i)}
        />
      </div>
    );
  }
}
