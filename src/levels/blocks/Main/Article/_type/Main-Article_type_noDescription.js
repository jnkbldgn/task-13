import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

import ArticleTitle from 'e:ArticleTitle';
import ArticlePicture from 'e:ArticlePicture';

export default declMod({ type: 'noDescription' }, {
  block: 'Main',
  elem: 'Article',
  content() {
    const { title, titleColor, image } = this.props.data
    return (
      <Fragment>
        <ArticleTitle title={ title } titleColor= { titleColor } />
        <ArticlePicture src= { image } >
        </ArticlePicture>
      </Fragment>
    )
  }
});