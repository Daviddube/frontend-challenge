export const submitForm = async (body) => {
    await fetch("http://localhost:3001/api/submit", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body)
    });
}