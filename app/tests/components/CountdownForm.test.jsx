var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  // good data
  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();

    // inject the spy
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // set the value
    countdownForm.refs.seconds.value = '108';
    // simulate
    TestUtils.Simulate.submit($el.find('form')[0]);
    // see if the spy has been called with an expected value
    expect(spy).toHaveBeenCalledWith(108);
  });

  // bad data
  it('should NOT call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();

    // inject the spy
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // set the value
    countdownForm.refs.seconds.value = '1a08';
    // simulate
    TestUtils.Simulate.submit($el.find('form')[0]);
    // see if the spy has been called with an expected value
    expect(spy).toNotHaveBeenCalled();
  });
});
