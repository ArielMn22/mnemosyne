import "./home.css";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import memoriesService from "../../services/memory";

const Home = () => {

    const [memories, setMemories] = useState([]);

    useEffect(() => {

        getMemories();

    }, []);

    const getMemories = async () => {

        const response = await memoriesService.getMemories();

        if (response.length > 0) {

            setMemories(response);

        }

    }

    return (
        <>

            <Header />

            <main className="app-main">

                <h1>Minhas memórias</h1>

                <div className="memories-container">

                    {memories.map((memory, index) => (
                        
                        <div key={index} className="memory-card">

                            <div className="image" style={{ backgroundImage: `url(${memoriesService.base64ToImage(memory.image)})` }}></div>

                            <h2>{memory.title}</h2>

                            <p>{memory.description.substring(0, 45) + "..."}</p>

                        </div>

                    ))}

                </div>

            </main>

            <footer className="app-footer">

                <p>Mnemosyne - Ariel Paixão dos Santos</p>

            </footer>

        </>
        
    );
}

export default Home;