import React from 'react';
import Repos from './github/repos';
import UserProfile from './github/userprofile';
import Notes from './notes/notes';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://github-note-taker-pete.firebaseio.com/');

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        }
    }
    init(username) {
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'notes'
        });

        getGithubInfo(username).then((data) => {
            this.setState({
                bio: data.bio,
                repos: data.repos
            });
        });
    }
    componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init(nextProps.params.username);
    }
    componentDidMount() {
        this.init(this.props.params.username);
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    handleAddNote(newNote) {
        base.post(this.props.params.username, {
            data: this.state.notes.concat([newNote])
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes 
                        username={this.props.params.username}
                        notes={this.state.notes}
                        addNote={(newNote) => this.handleAddNote(newNote)}
                        />
                </div>
            </div>
        )
    }
}

export default Profile;