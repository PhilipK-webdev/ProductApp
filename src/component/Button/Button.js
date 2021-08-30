import React from 'react'

function Button({ btn, handleDelete, id }) {
    return (
        <div>
            <button type="button" className="btn btn-primary" style={{ marginTop: "10px !important" }} onClick={() => handleDelete(id)}>{btn === "delete" ? "Delete" : "Add"}</button>
        </div>
    )
}

export default Button
