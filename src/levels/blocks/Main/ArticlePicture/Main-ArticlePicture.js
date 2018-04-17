import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';


export default decl({
  block: 'Main',
  elem: 'ArticlePicture',
  tag: 'div',
  content() {
    let { src } = this.props;
    const regexp = /(.+).png/;
    const srcMatch = src.match(regexp)[1];
    
    return (
      <Fragment>
        <Bem tag="picture" elem="Main-ArticlePicture" >
          <Bem tag="source" elem="Main-ArticleSourceMin"  media="('min-width': '172px')" srcSet={require(`../../../../${src}`)} />
          <Bem tag="source" elem="Main-ArticleSourceMax"  media="('min-width': '680px')" srcSet={require(`../../../../${srcMatch}@3x.png`)} />
          <Bem tag="img" elem="Main-ArticleImage" alt="Picture" src={require(`../../../../${srcMatch}@2x.png`)} />
        </Bem>
      </Fragment>
    );
  }
});