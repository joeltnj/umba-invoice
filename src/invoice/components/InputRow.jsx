const InputRow = ({ refNumber, description, prixUnitaire, quantite, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="card">
      {/* <label>
        Référence :
        <input type="text" name="refNumber" value={refNumber} readOnly />
      </label> */}

      {/* <label>
        Désignation :
        <input
          type="textarea"
          name="description"
          value={description}
          onChange={(e) => onChange("description", e.target.value)}
        />
      </label> */}
      <div className="card">
        {/* <div className="name-entreprise">{title}</div> */}
        <div className="row g-3 card-row">
          <div className="col-md-5">
            <label>Désignationssss :</label>
            <textarea
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => onChange("description", e.target.value)}
              style={{
                width: "50%", // Prend toute la largeur du parent
                minHeight: "30px", // Hauteur minimale pour plus d'espace
                padding: "8px", // Ajoute un peu d'espace à l'intérieur
                fontSize: "16px", // Rendre le texte plus lisible
                borderRadius: "5px", // Coins arrondis
                border: "1px solid #ccc", // Bordure légère
                resize: "vertical", // Permet de redimensionner verticalement
                background: "white", // Fond blanc
                color: "black", // Texte noir pour une bonne lisibilité
              }}
            />
          </div>

          <br />

          <label>
            Prix Unitaire (€) :
            <input
              type="number"
              name="prixUnitaire"
              value={prixUnitaire}
              onChange={(e) => onChange("prixUnitaire", e.target.value)}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
              }}
            />
          </label>
          <br />

          <label>
            Quantité :
            <input
              type="number"
              name="quantite"
              value={quantite}
              onChange={(e) => onChange("quantite", e.target.value)}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
              }}
            />
          </label>
          <br />
          <input type="submit" value="Enregistrer" />
        </div>
      </div>
    </form>
  );
};

export default InputRow;
