import "./home.css";
import logo from "../../assets/icons/mnemosyne-logo.svg";

const Home = () => {
    return (
        <>
            <header className="app-header">

                <img src={logo} alt="Mnemosyne Logo"></img>

                <div className="links">
                    <a href="#">HOME</a>
                    <a href="#">ADICIONAR MEMÓRIA</a>
                </div>

            </header>

            <main className="app-main">

                <h1>Meus momentos</h1>

                <div className="memories-container">

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                    <div className="memory-card">

                        <div className="image"></div>

                        <h2>Meu afilhado!</h2>

                        <p>Neste dia recebi a notiícia de ser padrinho...</p>

                    </div>

                </div>

            </main>

            <footer className="app-footer">

                <p>Mnemosyne - Ariel Paixão dos Santos</p>

            </footer>
        </>
    );
}

export default Home;