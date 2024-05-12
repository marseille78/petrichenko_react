import { Component } from 'react';
import PropTypes from 'prop-types';

import "./EmployeesAddForm.css";

class EmployeesAddForm extends Component {

  state = {
    name: "",
    salary: "",
  }

  handlerChange = (field, val) => {
    this.setState(prev => {
      return {
        [field]: val,
      };
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {name, salary} = this.state;

    if (name.trim().length === 0 || salary.trim().length === 0) {
      alert("Please. Enter correct data");
      return;
    }

    this.props.onAddUser({name, salary});
    this.clearState();
  }

  clearState = () => {
    this.setState({
      name: "",
      salary: "",
    });
  }

  render() {

    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            data-add-user="name"
            value={name}
            onChange={({target}) => this.handlerChange(target.dataset.addUser, target.value)}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            data-add-user="salary"
            value={salary}
            onChange={({target}) => this.handlerChange(target.dataset.addUser, target.value)}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

EmployeesAddForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};

export default EmployeesAddForm;