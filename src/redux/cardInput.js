import React from 'react';

class CardInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      content: props.content || '',
      link: props.link || '',
      imageUrl: props.imageUrl || '',
      type: props.type || '',
      id: props.id || ''
    };

    this.saveInput = this.saveInput.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      title: props.title || '',
      content: props.content || '',
      link: props.link || '',
      imageUrl: props.imageUrl || '',
      type: props.type || '',
      id: props.id || ''
    });
  }

  saveInput(e) {
    e.preventDefault();
    this.props.saveInput(this.state);
  }

  updateInput(name, value) {
    this.setState({[name]: value});
  }

  cancelInput(e) {
    e.preventDefault();
    this.props.cancelInput();
  }

  render() {
    return (
      <div className="cardInput">
        <form onSubmit={(e) => {this.saveInput(e);}}>
          <label>Title</label><br />
          <input type="text" name="title" onChange={(e) => this.updateInput('title', e.target.value)} value={this.state.title} /><br />

          <label>Hero or Villian</label><br />
          <select value={this.state.type} onChange={(e) => this.updateInput('type', e.target.value)} name="type">
            <option value="hero">Hero</option>
            <option value="villain">Viilain</option>
          </select><br />

          <label>Content</label><br />
          <textarea type="text" name="content" onChange={(e) => this.updateInput('content', e.target.value)} value={this.state.content} /><br />

          <label>Image Url</label><br />
          <input type="text" name="imageUrl" onChange={(e) => this.updateInput('imageUrl', e.target.value)} value={this.state.imageUrl} /><br />

          <label>Link</label><br />
          <input type="text" name="link" onChange={(e) => this.updateInput('link', e.target.value)} value={this.state.link} /><br />

          <input type="hidden" name="id" onChange={(e) => this.updateInput('id', e.target.value)} value={this.state.id} />

          <input type="submit" value="save" /> <button onClick={(e) => this.cancelInput(e)}>Cancel</button>
        </form>
      </div>
    );
  }
}
export default CardInput;
