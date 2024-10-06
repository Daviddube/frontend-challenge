export const fetchColors = async () => {
        const res = await fetch("http://localhost:3001/api/colors");
        return await res.json();
    }