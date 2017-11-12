import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import NewsList from '../NewsList';

describe('<NewsList/>', () => {
  const newsList = [
    {
      id: 'news-item-1',
      index: 1,
      pubDate: '2017-01-01',
      title: 'This is a news feed',
      thumbnail: 'src',
    },
    {
      id: 'news-item-2',
      index: 2,
      pubDate: '2017-02-01',
      title: 'This is another news feed',
      thumbnail: 'src',
    },
  ];
  const buildProps = (news = newsList) => ({ news });

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
    expect(wrapper.find('div.feed-container__my-gallery').length).toBeGreaterThan(0);
  });

  it('should have props for news', () => {
    const wrapper = mount(<NewsList {...buildProps()} />);
    const props = wrapper.props();
    expect(props.news).toEqual(newsList);
  });

  it('should have props for news and render a NewsItem', () => {
    const wrapper = mount(<NewsList {...buildProps()} />);
    const props = wrapper.props();
    const newsItems = wrapper.find('NewsItem');

    expect(props.news).toEqual(newsList);
    expect(newsItems.length).toBe(2);
    expect(newsItems.at(0).props().index).toBe(1);
    expect(newsItems.at(0).props().title).toBe('This is a news feed');
    expect(newsItems.at(1).props().index).toBe(2);
    expect(newsItems.at(1).props().title).toBe('This is another news feed');
  });

  it('should render an h2 with .error-message class', () => {
    const wrapper = mount(<NewsList {...buildProps([])} />);
    const props = wrapper.props();
    const errorMessage = wrapper.find('.error-message');
    expect(props.news).toEqual([]);
    expect(errorMessage.length).toBe(1);
  });
});
