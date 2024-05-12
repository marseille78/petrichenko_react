import PropTypes from 'prop-types';

import "./SearchPanel.css";

const SearchPanel = ({search, onChangeFilter}) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={search}
      onChange={onChangeFilter}
    />
  );
};

SearchPanel.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
}

export default SearchPanel;