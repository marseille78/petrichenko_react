import PropTypes from 'prop-types';

import "./EmployeesListItem.css";

const EmployeesListItem = ({name, salary, increase=false}) => {

  const cls = ["list-group-item", "d-flex", "justify-content-between"];

  increase && cls.push("increase");

  return (
    <li className={cls.join(" ")}>
      <span className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
                className="btn-cookie btn-sm ">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
                className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

EmployeesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  increase: PropTypes.bool,
};

export default EmployeesListItem;