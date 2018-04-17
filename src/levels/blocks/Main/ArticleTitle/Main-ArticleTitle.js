import React from 'react';
import { decl, Bem } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';

export default decl({
  block: 'Main',
  elem: 'ArticleTitle',
  tag: 'div',
  content() {
    return (
      <Bem
        elem="ArticleTitleText"
        tag="div"
        title={this.props.title}
        style={{color: this.props.titleColor}}
        >
        <TextTruncate
          className="YSText-Bold"
          truncateText='...'
          text = {this.props.title}
          line={3}
        />
      </Bem>
    );
  }
});