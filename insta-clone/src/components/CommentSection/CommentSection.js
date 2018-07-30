import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    return (
        <div className="comment-container">
            {props.comments.map(comment => {
                return (
                    <div className="comment" key={comment.text}>
                        <p>{comment.username}</p>
                        <p>{comment.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    }))
}

export default CommentSection;