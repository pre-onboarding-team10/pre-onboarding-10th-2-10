import React from 'react';

function KeywordInput({ keyword, setKeyword, keywordListRef }) {
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const press = (e) => {
    //TODOS: 반복 코드 줄이기
    if (e.key === 'ArrowDown') {
      const data = Array.from(keywordListRef.current.children);
      const index = data.findIndex((li) => li.className === 'selected');

      if (index === -1) data[0].className = 'selected';
      else {
        data.forEach((li) => (li.className = ''));
        data[index].nextSibling
          ? (data[index + 1].className = 'selected')
          : (data[index].className = 'selected');
      }
    }
    if (e.key === 'ArrowUp') {
      const data = Array.from(keywordListRef.current.children);
      const index = data.findIndex((li) => li.className === 'selected');

      if (index === -1) data[0].className = 'selected';
      else {
        data.forEach((li) => (li.className = ''));
        if (data[index].previousSibling) data[index - 1].className = 'selected';
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={keyword}
        onKeyDown={press}
        onChange={onChangeKeyword}
      />
      <button>검색</button>
    </div>
  );
}

export default KeywordInput;
