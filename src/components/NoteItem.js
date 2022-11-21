import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import DeleteButton from './DeleteButton';

function NoteItem({ title, createdAt, body, id, onDelete}) {
    return (
        <div className="note-item">
            <h2 className="note-item-title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h2>
            <p className="note-item-createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item-body">{body}</p>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteItem;