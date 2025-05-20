import React, { useState } from 'react';

function SNSPost({ content }) {
    const [votes, setVotes] = useState(0);

    // Determine the color for the votes text
    const voteTextColor = votes > 0 ? 'green' : votes < 0 ? 'red' : 'black';

    return (
        <div className="post-container">
            <div className="post-text">{content}</div>
            <h2 style={{ color: voteTextColor }}>Votes: {votes}</h2>
            <div>
                <button
                    className="vote-button"
                    onClick={() => setVotes(votes + 1)}
                >
                    ❤️ Like {votes > 0 ? votes : 0}
                </button>
                <button
                    className="vote-button"
                    onClick={() => setVotes(votes - 1)}
                >
                    👎 Dislike {votes < 0 ? Math.abs(votes) : 0}
                </button>
                <button
                    className="reset-button"
                    onClick={() => setVotes(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default SNSPost;
