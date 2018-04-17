import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';


export default decl({
  block: 'Main',
  elem: 'ArticleChannel',
  tag: 'div',
  content() {
    return (
      <Fragment >
        <TextTruncate 
          className='YSText-Bold'
          text = {this.props.channelName }
        />
      </Fragment>

    );
  }
});