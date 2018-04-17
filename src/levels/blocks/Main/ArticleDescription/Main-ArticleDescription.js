import React from 'react';
import { decl } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';


export default decl({
  block: 'Main',
  elem: 'ArticleDescription',
  tag: 'div',
  content() {
    return (
      <TextTruncate
          className="YSText-Regular"
          truncateText='...'
          text = {this.props.description}
          line={this.props.quantityLine}
        />
    );
  }
});