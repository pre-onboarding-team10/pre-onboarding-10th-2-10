import { useEffect, useState } from 'react';
import apiClient from '../api/apiClient';
import Suggestions from './Suggestions';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [focusIndex, setFocusIndex] = useState(-1);
  const [isComposing, setIsComposing] = useState(false);

  const isEmptyInput = searchTerm.trim() === '';

  const inputChangeHandler = (e) => {
    setSearchTerm(e.target.value);
    setFocusIndex(-1);
  };

  const inputKeyDownHandler = (e) => {
    if (isComposing) return;
    if (e.key === 'ArrowDown') {
      setFocusIndex((prevFocusIndex) =>
        prevFocusIndex < suggestions.length - 1 ? prevFocusIndex + 1 : 0
      );
    }
    if (e.key === 'ArrowUp') {
      setFocusIndex((prevFocusIndex) =>
        prevFocusIndex > 0 ? prevFocusIndex - 1 : suggestions.length - 1
      );
    }
    if (e.key === 'Enter' && focusIndex > -1) {
      const { name } = suggestions[focusIndex];
      setSearchTerm(name);
      setFocusIndex(-1);
    }
  };

  useEffect(() => {
    if (isEmptyInput) return;

    const updateSuggestions = async () => {
      try {
        const suggestions = await apiClient.getSuggestions(searchTerm);
        setSuggestions(suggestions);
      } catch (error) {
        console.error(error);
      }
    };

    updateSuggestions();
  }, [isEmptyInput, searchTerm]);

  return (
    <>
      <input
        type="text"
        placeholder="질환명을 입력해 주세요."
        value={searchTerm}
        onChange={inputChangeHandler}
        onKeyDown={inputKeyDownHandler}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <Suggestions
        suggestions={suggestions}
        focusIndex={focusIndex}
        isEmptyInput={isEmptyInput}
        setFocusIndex={setFocusIndex}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
};

export default SearchBox;
