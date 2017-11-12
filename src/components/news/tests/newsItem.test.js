import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import NewsItem from '../NewsItem';

describe('<NewsItem />', () => {
  const buildProps = () => ({
    index: 1,
    pubDate: '2017-01-01',
    title: 'This is a news feed',
    thumbnail: 'src',
  });

  it('should have a div', () => {
    const wrapper = mount(<NewsItem {...buildProps()} />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should have the props the were set', () => {
    const wrapper = mount(<NewsItem {...buildProps()} />);
    const props = wrapper.props();

    expect(props.index).toBe(1);
    expect(props.pubDate).toBe('2017-01-01');
    expect(props.title).toBe('This is a news feed');
    expect(props.thumbnail).toBe('src');
  });
});
