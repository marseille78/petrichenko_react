import PropTypes from 'prop-types';

import "./AppFilter.css";

const AppFilter = ({mode, onChangeFilter}) => {

  const btnList = [
    {label: "Все сотрудники", value: "all"},
    {label: "На повышение", value: "rise"},
    {label: "З/П больше 1000$", value: "moreThen1000"},
  ];

  const buttons = btnList.map(({label, value}) => {

    var clsCurrent = mode === value
      ? "btn-light"
      : "btn-outline-light";

    return (
      <button
        key={value}
        type="button"
        className={`btn ${clsCurrent}`}
        onClick={() => onChangeFilter(value)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      { buttons }
      {/*<button type="button"
              className="btn btn-light">
        Все сотрудники
      </button>
      <button type="button"
              className="btn btn-outline-light">
        На повышение
      </button>
      <button type="button"
              className="btn btn-outline-light">
        З/П больше 1000$
      </button>*/}
    </div>
  );
};

AppFilter.propTypes = {
  mode: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default AppFilter;