import { NO_DATA, RECOMMEND_KEYWORD } from '../constants';

const RecommendList = ({ options, onChange }) => {
  const handleSelect = (index) => {
    onChange(options[index]);
  };

  if (options.length < 1) {
    return <p>{NO_DATA}</p>;
  } else {
    return (
      <div className="dropdown">
        <span>{RECOMMEND_KEYWORD}</span>
        <ul className="dropdown-menu" role="listbox">
          {options.map((option, index) => (
            <li key={option.id} onClick={() => handleSelect(index)}>
              <span>{option.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default RecommendList;
