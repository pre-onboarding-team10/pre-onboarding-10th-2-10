import React from 'react';

const Result = ({ data }) => {
  return (
    <>
      {data?.length ? (
        data.map((item) => {
          return (
            <>
              <ul key={item.id}>
                <div>돋보기</div>
                <li>{item.name}</li>
              </ul>
            </>
          );
        })
      ) : (
        <div>검색결과 없음</div>
      )}
    </>
  );
};

export default Result;
