import React from 'react';
import '../styles/search.css';

const KeywordItem = ({ keyword, isFocus }) => {
  return (
    <div className={'keywordItem' + (isFocus ? ' focus' : '')}>{keyword}</div>
  );
};

export default KeywordItem;
