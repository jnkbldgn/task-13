import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';
import LogoPathSrcSet from './zen_logo@3x.png';
import LogoPathSrc from './zen_logo@2x.png';


export default decl({
  block: 'App',
  elem: 'Logo',
  tag: 'div',
  content() {
    return (
      <Fragment>
        <Bem tag="picture" elem="Picture" >
          <Bem tag="source" elem="Source"  media="(min-width: 680px)" srcSet={LogoPathSrcSet} />
          <Bem tag="img" elem="Image" alt="Яндекс Дзен" src={LogoPathSrc} />
        </Bem>
      </Fragment>
    );
  }
});
