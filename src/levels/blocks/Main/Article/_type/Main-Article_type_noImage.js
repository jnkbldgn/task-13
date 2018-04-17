import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

import ArticleTitle from 'e:ArticleTitle';
import ArticleChannel from 'e:ArticleChannel';
import ArticleDescription from 'e:ArticleDescription';
import ArticleActions from 'e:ArticleActions';

export default declMod({ type: 'noImage' }, {
  block: 'Main',
  elem: 'Article',
  content() {
    const { title, titleColor, description, channelName } = this.props.data
    return (
      <Fragment>
        <ArticleTitle title={ title } titleColor= { titleColor } />
        <ArticleDescription description={ description } quantityLine={10} />
        <ArticleChannel channelName={channelName} />
        <ArticleActions />
      </Fragment>
    )
  }
});