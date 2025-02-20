import "./new-memory.css";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import memoryService from "../../services/memory";

const NewMemory = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [userFeedBack, setUserFeedBack] = useState("");

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {

    }, []);


    const onSetImage = (event) => {

        console.log("ASDASD")

        const files = event.target.files;
    
        setImages(files);

        let imageURLs = [];

        for (let i = 0; i < files.length; i++) {

            const file = files[i];

            imageURLs.push(URL.createObjectURL(file));

        }

        setImageURLs(imageURLs);

    }

    const onCreateMemory = async () => {

        let payload = {
            title: title,
            description: description,
            images: images
        };

        let response = await memoryService.createMemory(payload);

        if (response) {

            setUserFeedBack("Memória criada com sucesso!");

            setTimeout(() => {

                setUserFeedBack("");

            }, 5000);

            setTitle("");
            setDescription("");
            setImages([]);
            setImageURLs([]);

        }

    }


    return (
        <>

            <Header />

            <main className="app-main">

                <h1>Criar memória</h1>

                <p className="feedback">{userFeedBack}</p>

                <div className="form-container">
                    
                    <label>

                        <span>Título</span>
                        <input onChange={event => setTitle(event.target.value)} value={title} type="text" placeholder="Insira o título aqui."/>

                    </label>

                    <label>

                        <span>Descrição</span>
                        <textarea onChange={event => setDescription(event.target.value)} value={description} placeholder="Insira a descrição aqui."/>

                    </label>

                    <label htmlFor="file-input" className="file">

                        <span>Imagens</span>
                        <span className="input-file-button">Adicionar imagem</span>
                        <input multiple onChange={event => onSetImage(event)} id="file-input" type="file" />

                        {images.length == 0 && (
                            <span className="no-images">Nenhuma imagem no momento.</span>
                        )}

                        {images.length > 0 && (
                            <div className="images-container">
                                {imageURLs.map((imageURL, index) => (
                                    <div key={index} className="image" style={{ backgroundImage: `url(${imageURL})` }}></div>
                                ))}
                            </div>
                        )}

                    </label>

                </div>

                <button onClick={() => onCreateMemory()} className="create-memory-btn">Criar memória</button>


            </main>

            <footer className="app-footer">

                <p>Mnemosyne - Ariel Paixão dos Santos</p>

            </footer>

        </>
        
    );
}

export default NewMemory;