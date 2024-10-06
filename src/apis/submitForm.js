import axios from "axios";

export const submitForm = async ({ name, email, password, color, terms}) => {
    await axios.post("http://localhost:3001/api/submit", {
        name,
        email,
        password,
        color,
        terms
    });
}