import React, { useState } from 'react';

function SNSPost2({ content }) {
    // Separate state for like and dislike votes
    const [likeVotes, setLikeVotes] = useState(0);
    const [dislikeVotes, setDislikeVotes] = useState(0);

    // Determine the color for the votes text based on likeVotes
    const likeTextColor = likeVotes > 0 ? 'green' : likeVotes < 0 ? 'red' : 'black';
    const dislikeTextColor = dislikeVotes > 0 ? 'green' : dislikeVotes < 0 ? 'red' : 'black';

    return (
        <div className="post-container">
            <div className="post-text">{content}</div>
            <div>
                <button
                    className="vote-button"
                    onClick={() => setLikeVotes(likeVotes + 1)}
                >
                    ❤️ {likeVotes}
                </button>
                <button
                    className="vote-button"
                    onClick={() => setDislikeVotes(dislikeVotes + 1)}
                >
                    👎 {dislikeVotes}
                </button>
                <button
                    className="reset-button"
                    onClick={() => {
                        setLikeVotes(0);
                        setDislikeVotes(0);
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default SNSPost2;
