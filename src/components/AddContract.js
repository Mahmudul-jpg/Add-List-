import React from 'react'

function AddContract() {
    return (
        <div>
            <h2>Add Contract</h2>
            <div>
                <form className="form">
                    <div className="field">
                        <label>Character Name</label>
                        <input type='text' name='name' placeholder='Name' />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' />
                    </div>
                    <button className="btn btn-">ADD</button>
                </form>
            </div>
        </div>
    )
}
export default AddContract