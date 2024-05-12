import PropTypes from 'prop-types';
import EmployeesListItem from '../EmployeesListItem';

import './EmployeesList.css';

const EmployeesList = ({data, onChangeProp, onDeleteUser}) => {
  const elements = data.map(item => {
    return (
      <EmployeesListItem
        key={item.id}
        {...item}
        onChangeProp={onChangeProp}
        onDeleteUser={onDeleteUser}
      />);
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

EmployeesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

export default EmployeesList;