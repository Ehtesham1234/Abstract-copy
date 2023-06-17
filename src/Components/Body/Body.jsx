import React from 'react'
import "./Body.css"
const Body = () => {
    return (
        <div className='body'>
            <div className="body__container">
                <div className="body__title">
                    How can we help?
                </div>
                <form className='body__form'>
                    <input
                        name='input'
                        type="search"
                        placeholder='Search'
                        aria-label='Search'
                        value=''
                        autoComplete='off'
                    />
                </form>
            </div>
        </div>
    )
}

export default Body