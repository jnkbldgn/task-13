import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import DATA from './data.js';

import Article from 'e:Article' 

export default decl({
  block: 'App',
  willInit(){
    this.state = { DATA };
  },
  getSize(data) {
    const { size } = data;
    let result = null;
    switch (size) {
      case 'm':
        result = 'medium';
        break;
      case 'l':
        result = 'large';
        break;
      case 's':
        if (data.image && !data.description) {
          result = 'noDescription';
        }
        else if (!data.image && data.description) {
          result = 'noImage';
        }
        break;
      default:
        break;
    }
    return result;
  },
  renderArticles(){
    const { DATA } = this.state; 
    return DATA.map((item, index) => {
      const type = this.getSize(item);
      return <Article key={index} data={item} type={type} />
    })
  },
  elem: 'Main',
  tag: 'main',
  content() {
    const articles = this.renderArticles();
    console.log(articles);
    return (
      <Fragment>
        {articles}
      </Fragment>
    );
  }
});