import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import StandingRow from '../StandingRow';

describe('<StandingRow />', () => {
  const buildProps = () => ({
    win: '12',
    loss: '5',
    winPct: '50',
    gamesBehind: '5',
    teamId: '123',
  });

  it('should have a tr', () => {
    const wrapper = mount(<StandingRow {...buildProps()} />);
    expect(wrapper.find('tr').length).toBeGreaterThan(0);
  });

  it('should have the props the were set', () => {
    const wrapper = mount(<StandingRow {...buildProps()} />);
    const props = wrapper.props();

    expect(props.win).toBe('12');
    expect(props.loss).toBe('5');
    expect(props.winPct).toBe('50');
    expect(props.gamesBehind).toBe('5');
    expect(props.teamId).toBe('123');
  });
});
