import React from 'react';
import { BrowserRouter as Router, Redirect, Navigate } from 'react-router-dom';
import Form from './Form';

import './App.css';


class App extends React.Component {

  state = {
    name: '',
    surname: '',
    peselNumber: '',
    nipNumber: '',
    peselVisible: true,
    nipVisible: true,
    checked: true,
    image: null,
    formErrors: { name: '', surname: '' },
    nameValid: false,
    surnameValid: false,
    formValid: false
  }

  render() {
    const { name, surname, peselNumber, nipNumber, peselVisible, nipVisible, image } = this.state;
    return (

      <div className="main">
        <Router>

          <Form
            name={name}
            surname={surname}
            peselNumber={peselNumber}
            nipNumber={nipNumber}
            peselVisible={peselVisible}
            nipVisible={nipVisible}
            image={image}

            checked={this.checkRadioValue}
            click={this.handleButtonClick}
            change={this.handleInputChange}
            img_file={this.onImageChange}

            fields={this.handleInputChange}
            errors={this.handleInputChange}
          />

        </Router>
      </div>

    )
  }
  handleButtonClick = (e) => {
    e.preventDefault();
    console.log("Send form!");

  }

  handleInputChange = (e) => {
    const fieldType = e.target.id;
    console.log(e.target.id);
    console.log(e.target.value);

    switch (fieldType) {

      case 'name':
        this.setState({
          name: e.target.value
        },
          () => { this.validateField(fieldType, e.target.value) }
        ); break;

      case 'surname':
        this.setState({
          surname: e.target.value
        }); break;

      case 'peselNumber':
        this.setState({
          peselNumber: e.target.value
        }); break;

      case 'nipNumber':
        this.setState({
          nipNumber: e.target.value
        }); break;

      default: console.log("Error!!!");
    }
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let surnameValid = this.state.surnameValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.length > 2;
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      case 'surname':
        surnameValid = value.length > 2;
        fieldValidationErrors.surname = surnameValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      surnameValid: surnameValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.nameValid && this.state.surnameValid });
  }

  checkRadioValue = (e) => {
    console.log(e.target.value);
    this.setState({
      checked: this.state.checked
    })
    if (e.target.value === 'type-person') {
      this.setState({
        peselVisible: true,
        nipVisible: false
      })
    } else {
      this.setState({
        peselVisible: false,
        nipVisible: true
      })
    }
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}

export default App;