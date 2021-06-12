import React, { useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'

const Tag = ({ text, background_color, color_text }) => {

    const [iconDelete, setIconDelete] = useState(false)

    function searchByTag(text) {
        console.log(text)
        if (text && !iconDelete) {
            setIconDelete(!iconDelete)
        } else {
            if (iconDelete) {
                setIconDelete(!iconDelete)
            }
        }

    }

    return (
        <div className={`container-tags__tag ${iconDelete && 'container-tags__tag__focus'}`} style={{ backgroundColor: background_color, color: color_text }}
            onClick={(e) => searchByTag(e.target.childNodes[0].data)}>
            {text}
            {iconDelete && <span className='container-tags__tag__delete-icon'><TiDeleteOutline /></span>}
        </div>
    )
}

export default Tag