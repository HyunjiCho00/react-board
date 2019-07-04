import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // ES6

const ReactQuill = dynamic(
  import('react-quill'), {
    loading: () => (<div>서버사이드에서 대체되는 영역</div>),
    ssr: false,
  },
);

class BoardForm extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.handleTitleChange = this.handleTitleChange.bind(this)
}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTitleChange(value) {
        this.setState({
            'brdtitle': value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Name" name="brdwriter" onChange={this.handleChange}/>
                <ReactQuill
                    placeholder="내용"
                    onChange={this.handleTitleChange} />

                <button type="submit">Save</button>
            </form>
        );
    }
}

export default BoardForm;
