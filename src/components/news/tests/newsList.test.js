import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import NewsList from '../NewsList';

describe('<NewsList/>', () => {
  const buildProps = (news = []) => ({ news });

  it('should have a div', () => {
    const wrapper = mount(<NewsList {...buildProps()} />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should have an element with feed-container class', () => {
    const wrapper = mount(<NewsList {...buildProps()} />);
    expect(wrapper.find('div.feed-container').length).toBeGreaterThan(0);
  });

  it('should have an element with masonry class (my-gallery-class)', () => {
    const wrapper = mount(<NewsList {...buildProps()} />);
    expect(wrapper.find('div.my-gallery-class').length).toBeGreaterThan(0);
  });

  it('should have props for news', () => {
    const wrapper = shallow(<NewsList {...buildProps()} />);
    expect(wrapper.unrendered.props.news).toExist();
  });

  it('should have news array with no childs', () => {
    const wrapper = shallow(<NewsList {...buildProps()} />);
    expect(wrapper.unrendered.props.news).toEqual([]);
  });

  it('should have the same news object', () => {
    const news = [{
      guid: {
        text: '34234234',
      },
      pubDate: {},
      title: {},
      media: {},
    }];
    const wrapper = shallow(<NewsList {...buildProps(news)} />);
    expect(wrapper.unrendered.props.news).toEqual(news);
  });
});
