export const SearchInput = ({ value, onChange }) => {
  return (
    <div>
      <input type="search" value={value} onChange={onChange} />
      <button type="submit">submit</button>
    </div>
  );
};
