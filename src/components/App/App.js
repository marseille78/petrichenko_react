import AppInfo from '../AppInfo';
import SearchPanel from '../SearchPanel';
import AppFilter from '../AppFilter';
import EmployeesList from '../EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm';

import "./App.css";

const data = [
  {name: "John C.", salary: 800, increase: false, id: "0"},
  {name: "Alex M.", salary: 3000, increase: true, id: "1"},
  {name: "Carl W.", salary: 5000, increase: false, id: "2"},
];

const App = () => {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
};

export default App;