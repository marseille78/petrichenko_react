import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppInfo from '../AppInfo';
import SearchPanel from '../SearchPanel';
import AppFilter from '../AppFilter';
import EmployeesList from '../EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm';

import './App.css';

class App extends Component {

  state = {
    data: [
      {name: 'John C.', salary: 800, increase: false, rise: true, id: '0'},
      {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: '1'},
      {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: '2'},
    ],
    search: "",
  }

  changeProp = (id, prop) => {
    this.setState(({data}) => {
      const newArr = data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]};
        }
        return item;
      });
      return {
        data: newArr,
      }
    });
  }

  deleteUser = (id) => {
    this.setState(({data}) => {
      const newData = data.filter(item => item.id !== id);
      return {
        data: newData,
      }
    });
  }

  addUser = ({name, salary}) => {
    const newUser = {
      name,
      salary: Number(salary),
      increase: false,
      like: false,
      id: nanoid(),
    };

    this.setState(({data}) => {
      return {
        data: [...data, newUser],
      };
    });
  }

  getVisibleList = () => {
    const {data, search} = this.state;

    return data.filter(item => {
      return item.name.toLowerCase().search(search.trim().toLowerCase()) !== -1;
    });
  }

  changeFilter = ({target}) => {
    this.setState({
      search: target.value,
    });
  }

  render() {
    const {data, search} = this.state;

    return (
      <div className="app">
        <AppInfo
          employers={data.length}
          increases={data.filter(item => item.increase).length}
        />

        <div className="search-panel">
          <SearchPanel search={search} onChangeFilter={this.changeFilter}/>
          <AppFilter/>
        </div>

        <EmployeesList
          data={this.getVisibleList()}
          onChangeProp={this.changeProp}
          onDeleteUser={this.deleteUser}
        />
        <EmployeesAddForm onAddUser={this.addUser}/>
      </div>
    );
  }
}

export default App;