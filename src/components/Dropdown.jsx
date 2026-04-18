export const Dropdown = ({ gender, setGender }) => {
    return (
        <div className="gender-selection">
            <select
                onChange={(event) => setGender(event.target.value)}
                value={gender}
            >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
    );
};