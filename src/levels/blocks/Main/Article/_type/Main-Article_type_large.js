import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

import ArticleTitle from 'e:ArticleTitle';
import ArticlePicture from 'e:ArticlePicture';
import ArticleDescription from 'e:ArticleDescription';
import ArticleActions from 'e:ArticleActions';

export default declMod({ type: 'large' }, {
  block: 'Main',
  elem: 'Article',
  content() {
    const { title, titleColor, image, description } = this.props.data
    return (
      <Fragment>
        <ArticleTitle title={ title } titleColor= { titleColor } />
        <ArticlePicture src= { image } />
        <ArticleDescription description={ description } quantityLine={6} />
        <ArticleActions />
      </Fragment>
    )
  }
});