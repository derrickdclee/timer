var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  // this is a function that returns a function
  // a pattern called "currying"
  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },

  render: function() {
    var {countdownStatus, onStatusChange} = this.props;

    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className='button secondary' onClick={onStatusChange('paused')}>Pause</button>;
      } else {
        return <button className='button primary' onClick={onStatusChange('started')}>Start</button>;
      }
    };

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow' onClick={onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
