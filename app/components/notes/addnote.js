import React from 'react';

class AddNote extends React.Component {
    handleSubmit(e) {
        const newNote = this.note.value;
        e.preventDefault();

        if (newNote) {
            this.note.value = '';
            this.props.addNote(newNote);
        }
    }
    setRef(ref) {
        this.note = ref;
    }
    render() {
        return (
            <form className="input-group" onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">Submit</button>
                </span>
            </form>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
}

export default AddNote;