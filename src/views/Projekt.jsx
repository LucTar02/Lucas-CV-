import { useEffect, useState } from "react";


export function Projekt() {
const URL = "https://api.github.com/users/LucTar02/repos";

const [data, setData] = useState([]);


useEffect(() => {

fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
        setData(data);
    });
},  []);


return (
    <section className="Projekt-page">
        <h2> Mina Projekt</h2>
        {data.map((repo) => (
            <article key={repo.id}>
            <a href={repo.html_url}>
                <h3>{repo.name}</h3>
            </a>
            <p>Beskrivning: {repo.description ? repo.description : 'Ingen...'}</p>
            </article>
        ))}
    </section>
);
}



export default Projekt;