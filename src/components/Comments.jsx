export const Comments = ({ comment, setComment }) => {
    return (
        <div className="commentField">
            <h2>Comments:</h2>

            <textarea
                onChange={(event) => setComment(event.target.value)}
                value={comment}
                placeholder="Enter comments here..."
            />
        </div>
    );
};