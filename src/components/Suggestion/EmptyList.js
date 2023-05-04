import SuggestionListTitle from './SuggestionListTitle';

const EmptyList = () => {
  return (
    <div className="empty-list">
      <SuggestionListTitle />
      <span>검색어 없음</span>
    </div>
  );
};

export default EmptyList;
