import AppInfo from '../AppInfo';
import SearchPanel from '../SearchPanel';
import AppFilter from '../AppFilter';
import EmployeesList from '../EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm';

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList/>
      <EmployeesAddForm/>
    </div>
  );
};

export default App;