import React, { useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'

const Tag = ({ text, background_color, color_text }) => {

    const [iconDelete, setIconDelete] = useState(false)
    const types = []

    function searchByTag(text) {
        if (text && !iconDelete) {
            setIconDelete(!iconDelete)
            types.push(text)
        } else {
            if (iconDelete) {
                setIconDelete(!iconDelete)
                types.filter(el => el != text)
            }
        }

        console.log(types)
    }

    return (
        <div className={`container-tags__tag ${iconDelete && 'container-tags__tag__focus'}`} style={{ backgroundColor: background_color, color: color_text }}
            onClick={() => searchByTag(text)}>
            {text}
            {iconDelete && <span className='container-tags__tag__delete-icon'><TiDeleteOutline /></span>}
        </div>
    )
}

export default Tag