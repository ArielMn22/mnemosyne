const API_URL = "http://localhost:3000";

const getMemories = async () => {

    const response = await fetch(`${API_URL}/memories`);
    const memories = await response.json();
    return memories;

}

const getMemoryById = async (id) => {

    const response = await fetch(`${API_URL}/memories/${id}`);
    const memories = await response.json();
    return memories;

}

const createMemory = async (memory) => {

    // parse memory.images with imageToBase64
    const images = memory.images;
    const base64Images = [];

    for (let i = 0; i < images.length; i++) {

        const base64 = await imageToBase64(images[i]);
        base64Images.push(base64);

    }

    memory.images = base64Images;

    const response = await fetch(`${API_URL}/memories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(memory)
    });

    return response.json();

}

const base64ToImage = (base64, mimeType = 'image/png') => {

    // Decode the Base64 string
    const byteCharacters = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    
    // Create a Blob from the byte array
    const blob = new Blob([byteArray], { type: mimeType });
    
    // Generate a Blob URL
    return URL.createObjectURL(blob);
}

function imageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


export default { getMemories, getMemoryById, createMemory,  imageToBase64, base64ToImage };