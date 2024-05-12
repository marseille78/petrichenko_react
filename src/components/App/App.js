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
      {name: 'John C.', salary: 800, increase: false, like: true, id: '0'},
      {name: 'Alex M.', salary: 3000, increase: true, like: false, id: '1'},
      {name: 'Carl W.', salary: 5000, increase: false, like: false, id: '2'},
    ]
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
  };

  render() {
    const {data} = this.state;

    return (
      <div className="app">
        <AppInfo
          employers={data.length}
          likes={data.filter(item => item.like).length}
        />

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList
          data={data}
          onChangeProp={this.changeProp}
          onDeleteUser={this.deleteUser}
        />
        <EmployeesAddForm onAddUser={this.addUser}/>
      </div>
    );
  }
}

export default App;