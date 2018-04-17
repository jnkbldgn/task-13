import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';


export default decl({
  block: 'Main',
  elem: 'ArticleActions',
  tag: 'div',
  content() {
    return (
      <Fragment>
        <Bem tag="div" elem="Main-ArticleActions-Options"/>
        <Bem tag="div" elem="Main-ArticleActions-Like"/>
      </Fragment>
    );
  }
});