import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import NewsList from './NewsList';

describe('<NewsList/>', () => {
  let props;

  beforeEach(() => {
    props = {
      news: [],
    };
  });

  it('should have a div', function () {
    const wrapper = shallow(<NewsList {...props}/>);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should have props for news', function () {
    const wrapper = shallow(<NewsList {...props}/>);
    expect(wrapper.props.news).toExist;
  });

  it('should have news array with no childs', function () {
    props.news = [];
    const wrapper = shallow(<NewsList {...props}/>);
    expect(wrapper.unrendered.props.news).toEqual([]);
  });

  it('should call map function', function () {
    var news = [{
      guid: {
        text: '34234234',
      },
      pubDate: {},
      title: {}
    }];
    props.news = news;
    const wrapper = shallow(<NewsList {...props}/>);
    expect(wrapper.unrendered.props.news).toEqual(news);
  });
  
});