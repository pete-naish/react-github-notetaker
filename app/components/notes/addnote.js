var React = require('react');

var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    setRef: function(ref) {
        this.note = ref;        
    },
    handleSubmit: function(e) {
        var newNote = this.note.value;
        e.preventDefault();
        this.note.value = '';
        this.props.addNote(newNote);
    },
    render: function() {
        return (
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">Submit</button>
                </span>
            </form>
        )
    }
});

module.exports = AddNote;