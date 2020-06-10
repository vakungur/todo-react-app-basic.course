import React, { Component } from 'react';

import './post-add-form.css'

class PostAddForm extends Component {
  state = {
    text: '',
  };

  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    console.log(this.props);
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="О чем Вы дуаетет сейчас?"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  }
}

export default PostAddForm;
