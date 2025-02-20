import "./memory.css";
import Header from "../../components/header";
import Bg from "../../assets/imgs/bg1.png"; 

const Memory = () => {
    return (
        <>

            <Header />

            <main className="app-main">

                <h1>ME</h1>

                <div className="memory-item">

                    <div className="images-container">

                        <img src={Bg} alt="Image." />
                        <img src={Bg} alt="Image." />
                        <img src={Bg} alt="Image." />
                        <img src={Bg} alt="Image." />

                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt illum amet eum atque ipsum delectus ipsam at modi doloremque ducimus, laboriosam harum officiis. Explicabo ab vero nisi et autem!
                    Magnam sunt ipsa quam, explicabo modi quibusdam earum, veritatis harum illum quos laudantium quo ex quae eligendi esse sit eum debitis rem, est quisquam expedita saepe? Temporibus nemo provident nesciunt!
                    Quod fuga dignissimos, repellat iure ullam vel harum necessitatibus laborum dolore tenetur, laudantium maxime cumque saepe consequatur velit libero quaerat alias eum architecto vitae, ipsa id reprehenderit tempora illum. Ducimus!
                    Distinctio, exercitationem architecto incidunt dolorem nisi eveniet possimus, vel, voluptatem accusamus necessitatibus ullam quos voluptates. Ad repellat quos delectus dolore magni. Aperiam voluptatibus nobis magni libero distinctio debitis velit pariatur?
                    Ratione sint assumenda ipsum, quo quae voluptate illo totam sed sunt? Hic, tempore reiciendis rerum suscipit voluptatem quo ea mollitia laborum nemo voluptate quidem fuga repellendus amet cupiditate corporis quaerat.
                    Doloremque neque eveniet velit a impedit accusantium in, vero nostrum aperiam magnam error alias sapiente deserunt eligendi nihil distinctio! Aut iure error repellendus. Cum, quibusdam magnam quod amet ullam consequatur!
                    Aspernatur, deleniti voluptatibus? Veniam labore ex, iusto nesciunt enim minus esse tempora? Reprehenderit deleniti nihil eius praesentium, iusto veniam nisi, autem numquam omnis laudantium minima quisquam debitis enim necessitatibus sunt!
                    Voluptates harum explicabo totam reiciendis! Iusto, vero. Officiis porro accusamus quos accusantium, officia commodi ullam eum quaerat quis reprehenderit libero impedit consequatur, at nostrum neque, tempora laborum laboriosam ut! Praesentium.
                    Repellat exercitationem sapiente consequuntur tenetur provident? Quasi vel maxime corporis cupiditate tenetur? Recusandae nesciunt repellendus veniam dolorum modi. Qui quas adipisci totam doloremque nesciunt magnam vitae ex itaque fugiat doloribus.
                    Sint obcaecati autem deserunt sequi, quae ratione at impedit eaque voluptatem veniam assumenda, dolores, soluta voluptate accusantium perspiciatis! Et fugiat ducimus eaque quam officia voluptates assumenda sint ea asperiores omnis?
                    Commodi obcaecati voluptas hic dolorem quis ipsum enim. Tempore, incidunt fugiat voluptatibus cupiditate adipisci sequi autem? Quis dignissimos iusto ea, distinctio qui accusamus nihil, blanditiis facilis hic voluptatibus laboriosam asperiores.
                    Itaque ad illum reprehenderit maiores. Earum vitae, officiis repudiandae at laborum quasi. Temporibus nobis beatae itaque. Porro quam architecto mollitia, rem asperiores modi ducimus atque, nam, exercitationem maxime autem voluptates.</p>

                </div>

            </main>

            <footer className="app-footer">

                <p>Mnemosyne - Ariel Paixão dos Santos</p>

            </footer>

        </>
        
    );
}

export default Memory;