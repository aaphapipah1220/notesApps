import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes, deleteNote } from '../utils/api';
import LocaleContext from '../contexts/LocaleContext';

function HomePage() {
    const [searchParams, setSeacrhParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const { locale } = React.useContext(LocaleContext);

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    async function onDeleteHandler(id) {
        await deleteNote(id);

        const { data } = await getActiveNotes();
        setNotes(data);
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSeacrhParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    });

    return (
        <section>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <h2>{locale === 'id' ? 'Daftar Catatan' : 'Notes List'}</h2>
            <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
        </section>
    )
}

HomePage.propTypes = {
         defaultKeyword: PropTypes.string,
         keywordChange: PropTypes.func,
     }

export default HomePage;

