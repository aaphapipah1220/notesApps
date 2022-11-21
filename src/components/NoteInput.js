import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Buat Catatan</h2>
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <p value={this.state.date} onChange={this.showFormattedDate }></p>
                    <input type="text" placeholder="Description.." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Input</button>
            </form>
            </div>
        );
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;