import { useState } from 'react';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="질환명을 입력해주세요"
        value={value}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default SearchInput;
