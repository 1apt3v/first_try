import React from 'react';

const OnePost = (props) => {
    return (
        <div id={props.id}>
            {props.body}
            <div>
                <span>Лайки: </span>
                {props.likesCount}
            </div>
        </div>
    );
};

export default OnePost;