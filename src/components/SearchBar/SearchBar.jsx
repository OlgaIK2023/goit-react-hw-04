
import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <label className={css.label}>
      Finde contacts by name
      <input placeholder="Search..." value={filter} onChange={onChangeFilter} />
    </label>
  );
};

export default SearchBox;