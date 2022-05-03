import * as React from 'react'
import './Style/buttonVideoCard.scss'


function TagIndicator(props)
{
    return(
        <div className='tagIndicator'>
            <p>
                {props.tagName}
            </p>
        </div>
    )

}

export default TagIndicator