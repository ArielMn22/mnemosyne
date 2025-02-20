import "./memory.css";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import memoryService from "../../services/memory";
import trash from "../../assets/icons/trash-solid.svg";

const Memory = () => {

    const [memory, setMemory] = useState();

    useEffect(() => {

        // get memory id from query
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const memoryId = params.get("id");

        getMemory(memoryId);

    }, []);

    const getMemory = async (id) => {

        let response = await memoryService.getMemoryById(id);

        setMemory(response);

    }

    const onDeleteMemory = async () => {
    
        let confirm = window.confirm("Deseja realmente deletar esta memória?");

        if (!confirm) return;

        let response = await memoryService.deleteMemory(memory.id);

        if (response) {

            alert("Memory deleted successfully.");
            window.location.href = "/home";
        
        }

    }

    return (
        <>

            <Header />

            <main className="app-main">

                {memory && (

                    <>

                        <h1>{memory.title}</h1>

                        <div className="buttons-container">

                            <button onClick={() => onDeleteMemory()}>
                                <img src={trash} alt="Delete memory." />
                            </button>

                        </div>

                        <div className="memory-item">

                            <div className="images-container">

                                {memory.images.map((image, index) => (
                                    <img key={index} src={image} alt="Image." />
                                ))}

                            </div>

                            <p>{memory.description}</p>

                        </div>

                    </>

                )}


            </main>

            <footer className="app-footer">

                <p>Mnemosyne - Ariel Paixão dos Santos</p>

            </footer>

        </>
        
    );
}

export default Memory;