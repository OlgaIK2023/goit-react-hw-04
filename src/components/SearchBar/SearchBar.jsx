
import css from "./SearchBar.module.css";

const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <label className={css.label}>
      Find images by name
      <input placeholder="Search..." value={filter} onChange={onChangeFilter} />
    </label>
  );
};

export default SearchBox;