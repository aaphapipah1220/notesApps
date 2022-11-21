import React from "react";
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <input
                            className="search"
                            type="text"
                            placeholder={locale === 'id' ? 'Cari judul' : 'Search by title'}
                            value={keyword}
                            onChange={(event) => keywordChange(event.target.value)}        
                        />
                    )
                }
            }
        </LocaleConsumer>  
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;