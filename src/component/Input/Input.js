import React from 'react'

function Input({ handleChange }) {
    return (
        <div className="input-group">
            <input onChange={handleChange} type="text" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" placeholder="Search Product" />
            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
        </div>
    )
}

export default Input
