export const Dropdown = ({ gender, setGender }) => {
    return (
        <div className="gender-selection">
            <select
                onChange={(event) => setGender(event.target.value)}
                value={gender}
            >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Other gender identity">Other gender identity</option>
                <option value="Prefer not to answer">Prefer not to answer</option>

            </select>
        </div>
    );
};