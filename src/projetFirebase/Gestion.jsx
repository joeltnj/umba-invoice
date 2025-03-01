import { useEffect, useState } from "react";
import { database, firestore } from "../firebase/firebase";
import { ref, set, push, get, update } from "firebase/database";

function Gestion() {
  // const db = getDatabase(); // Initialiser la base de données Realtime

  const [tnom, setTnom] = useState("");
  const [tmail, setTmail] = useState("");

  const ajouter = (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const mail = formData.get("mail");
    const nom = formData.get("nom");

    // console.log(mail);

    update(ref(database, "users/123/-OGbCr8Dv7lxgP28xAqA"), {
      // Référence vers l'endroit où les données seront stockées
      username: nom, // Données à stocker : un utilisateur
      email: mail,
    })
      .then(() => {
        console.log("Données ajoutées avec succès !");
        setTrigger((prev) => !prev);
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout des données : ", error);
      });
    setTnom("");
    setTmail("");
  };

  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    const lire = async () => {
      // get(ref(database, "users/123"));
      const snapshot = await get(ref(database, "users/123"));
      const elements = Object.entries(snapshot.val());
      console.log(elements);

      // elements.forEach((item) => {});

      // console.log(snapshot.val());
      setData(elements);
    };
    lire();
  }, [trigger]);

  return (
    <>
      <h2>Gestion FireBase</h2>


      <form id="form" onSubmit={ajouter}>
        <label htmlFor="">nom</label>
        <input
          type="text"
          name="nom"
          id=""
          value={tnom}
          onChange={(e) => setTnom(e.target.value)}
        />

        <br />
        <label htmlFor="">mail</label>
        <input
          type="text"
          name="mail"
          id=""
          value={tmail}
          onChange={(e) => setTmail(e.target.value)}
        />
        <br />
        <input type="submit" value="Envoyer" />
      </form>
      {/* onClick={"lire"} */}

      <button type="button">ajouter</button>
      <nav>
        <ul>
          {data.map((item) => {
            return <li key={item[0]}> {item[1].username} </li>;
          })}
        </ul>
      </nav>
    </>
  );
}

export default Gestion;
