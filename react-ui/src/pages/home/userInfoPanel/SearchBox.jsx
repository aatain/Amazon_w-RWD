import React from 'react';

const SearchBox = props => (
    <form className="form-inline" id='searchBox'>
        <div class="input-group" >
            <div class="input-group-prepend" >
                <select class="custom-select search-input" id="inlineFormCustomSelect" style={{ width: 57 }}>
                    <option selected>All</option>
                    <option value="1">Alexa Skills</option>
                    <option value="2">Amazon Devices</option>
                    <option value="3">Amazon Fresh</option>
                </select>
            </div>
            <input type="text" class="form-control sm-3 search-input" style={{ width: 350 }} />
            <div class="input-group-addon">
                <button className="btn btn-default search-input search-icon" type="button" aria-hidden="true">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    </form>
);

export default SearchBox;