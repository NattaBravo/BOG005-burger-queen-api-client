import facebookIcon from '../Resources/facebook.png';
import instagramIcon from '../Resources/instagram.png';
import twitterIcon from '../Resources/twitter.png';
import youtubeIcon from '../Resources/youtube.png';

const FooterBQ = () => {
    return (
        <footer className="mainFooter">

            <section>
                <h2>Explora</h2>
                <article className="gridForExploreSection">
                <p>Productos</p>
                <p>Servicios</p>
                <p>Eventos</p>
                <p>Descargas</p>
                <p>Oficina</p>
                </article>
            </section>
            <div className="spanForFooter"></div>

            <section>
                <h2>Contáctanos</h2>
                <article className="contactSection">
                    <p>SAN GIL</p>
                    <p>Cra 7 B Bis # 155 - 51</p>
                    <p>Tels 4696798</p>
                    <p>natalia.bravo.calderón@gmail.com</p>
                </article>
            </section>
            <div className="spanForFooter"></div>

            <section className="socialSection">
                <img src={facebookIcon}></img>
                <img src={instagramIcon}></img>
                <img src={twitterIcon}></img>
                <img src={youtubeIcon}></img>
            </section>
            <div className="spanForFooter"></div>
            
            <p className="madeBy">Made by Yeny and Natha</p>
        </footer>
    )
}

export default FooterBQ;