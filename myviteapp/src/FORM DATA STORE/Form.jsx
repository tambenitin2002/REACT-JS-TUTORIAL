import React, { useState } from 'react';
// Import the CSS file for styling

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [qualification, setQualification] = useState("");
    const [skills, setSkills] = useState([]);
    const [formData, setFormData] = useState("");

    let data = {
        name,
        email,
        password,
        gender,
        qualification,
        skills
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFormData([{ ...formData, data }]);
        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        setQualification("");
        setSkills([]);
    }

    const handleCheckbox = (e) => {
        const skill = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSkills([...skills, skill]);
        } else {
            setSkills(skills.filter(unchecked => unchecked !== skill));
        }
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Registration Form</legend>

                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="male"
                                name="gender"
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                name="gender"
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            Female
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Qualification:</label>
                    <select
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        required
                    >
                        <option value="">Select Qualification</option>
                        <option value="BE">BE</option>
                        <option value="BCA">BCA</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Skills:</label>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="HTML"
                                onChange={handleCheckbox}
                                checked={skills.includes("HTML")}
                            />
                            HTML
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="CSS"
                                onChange={handleCheckbox}
                                checked={skills.includes("CSS")}
                            />
                            CSS
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="JS"
                                onChange={handleCheckbox}
                                checked={skills.includes("JS")}
                            />
                            JS
                        </label>
                    </div>
                </div>

                <button className="submit-btn" type="submit">Submit</button>
            </fieldset>
        </form>
    );
}

export default Form;
