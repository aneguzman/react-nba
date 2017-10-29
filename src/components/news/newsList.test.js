import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import NewsList from './NewsList';

describe('<NewsList/>', () => {
  let props;

  beforeEach(() => {
    props = {
      news: [],
    };
  });

  it('should have a div', () => {
    const wrapper = shallow(<NewsList {...props} />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should have props for news', () => {
    const wrapper = shallow(<NewsList {...props} />);
    expect(wrapper.unrendered.props.news).toExist();
  });

  it('should have news array with no childs', () => {
    props.news = [];
    const wrapper = shallow(<NewsList {...props} />);
    expect(wrapper.unrendered.props.news).toEqual([]);
  });

  it('should call map function', () => {
    const news = [{
      guid: {
        text: '34234234',
      },
      pubDate: {},
      title: {},
    }];
    props.news = news;
    const wrapper = shallow(<NewsList {...props} />);
    expect(wrapper.unrendered.props.news).toEqual(news);
  });
});
