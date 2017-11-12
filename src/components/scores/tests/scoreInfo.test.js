import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import ScoreInfo from '../ScoreInfo';

describe('<ScoreInfo />', () => {
  const buildProps = () => ({
    triCode: 'CLE',
    score: '80',
  });

  it('should have a div', () => {
    const wrapper = mount(<ScoreInfo {...buildProps()} />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should render a container with .Row class', () => {
    const wrapper = mount(<ScoreInfo {...buildProps()} />);
    expect(wrapper.find('.Row').length).toBeGreaterThan(0);
  });

  it('should have the props the were set', () => {
    const wrapper = mount(<ScoreInfo {...buildProps()} />);
    const props = wrapper.props();

    expect(props.triCode).toBe('CLE');
    expect(props.score).toBe('80');
  });
});
