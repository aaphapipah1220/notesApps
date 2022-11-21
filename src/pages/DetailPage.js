import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import NoteItem from "../components/NoteItem";
import { getNote, deleteNote } from '../utils/api';

function DetailPageWrapper() {
    const navigate = useNavigate();
    const { id } = useParams();

    function homeNavigate() {
        navigate('/')
    }

    return <DetailPage id={id} navigate={homeNavigate} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: null,
            initializing: true,
        };

        this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getNote(this.props.id);

        this.setState(() => {
            return {
                note: data,
                initializing: false,
            }
        })
    }

    async onDeleteClickHandler(id) {
        await deleteNote(id);

        const { navigate } = this.props;
        navigate();
    }

    render() {

        if (this.state.initializing) {
            return <p>Tidak ada catatan</p>;
        }

        if (this.state.note) {
            return (
                <section>
                    <NoteItem {...this.state.note} onDelete={this.onDeleteClickHandler} />
                </section>
            );
        }   
    }
}

DetailPage.propTypes = {
    navigate: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;