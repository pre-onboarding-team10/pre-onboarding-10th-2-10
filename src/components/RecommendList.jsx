import { useState } from 'react';

const RecommendList = ({ options, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    onChange(options[index]);
  };

  const hadleKeyDown = (event) => {
    const { keyCode } = event;

    switch (keyCode) {
      case 13:
        handleSelect(selectedIndex);
        break;
      case 38:
        setSelectedIndex((prevIndex) =>
          prevIndex === 0 ? options.length - 1 : prevIndex - 1
        );
        break;
      case 40:
        setSelectedIndex((prevIndex) =>
          prevIndex === options.length - 1 ? 0 : prevIndex - 1
        );
        break;
      default:
        break;
    }
  };

  if (options.length < 1) {
    return <p>No Data</p>;
  } else {
    return (
      <div className="dropdown">
        <span>추천 검색어</span>
        <ul className="dropdown-menu" role="listbox" onKeyDown={hadleKeyDown}>
          {options.map((option, index) => (
            <li
              key={option.id}
              role="option"
              aria-selected={index === selectedIndex}
              onClick={() => handleSelect(index)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default RecommendList;
