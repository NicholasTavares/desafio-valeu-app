import React from 'react'

const Tag = ({ text, background_color, color_text }) => {

    return (
        <div className='container-tags__tag' style={{ backgroundColor: background_color, color: color_text }}>
            {text}
        </div>
    )
}

export default Tag