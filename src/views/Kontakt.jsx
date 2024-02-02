import VilkenSida from '../components/VilkenSida.jsx'
import '../App.css';

function Kontakt() {
    return (
        <div className="Kontakt-page">
                <VilkenSida vartPåSidan=" Kontakt"/>
            <aside className="Kontakt-info">
            Namn: Lucas Tärnell
            <br />
            Adress: Stensättarvägen
            <br />
            Ort: Eskilstuna
            <br />
            E-post: lucas.tarnell@gmail.com
            </aside>
        </div>
    );
}
export default Kontakt;