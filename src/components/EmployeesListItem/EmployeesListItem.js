import PropTypes from 'prop-types';

import './EmployeesListItem.css';

const EmployeesListItem = ({
  name,
  salary,
  increase = false,
  like = false,
  id,
  onChangeProp,
  onDeleteUser
}) => {

  const cls = ['list-group-item', 'd-flex', 'justify-content-between'];

  increase && cls.push('increase');
  like && cls.push('like');

  return (
    <li className={cls.join(' ')}>
      <span
        className="list-group-item-label"
        data-prop="like"
        onClick={(e) => onChangeProp(id, e.currentTarget.dataset.prop)}
      >
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          data-prop="increase"
          onClick={(e) => onChangeProp(id, e.currentTarget.dataset.prop)}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={() => onDeleteUser(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

EmployeesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  increase: PropTypes.bool,
  like: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChangeProp: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default EmployeesListItem;