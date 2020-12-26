import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bn-lightest-blue'
            type='search' 
            onChange= { searchChange }
            placeholder='search robots' />
        </div>
    );
}

export default SearchBox;