const InputUpdateRow = ({ handleEditChange2, selectedRow, handleEditSubmit, setIsModalOpen }) => {
  return (
    <>
      <div className="modal" >
        <div className="card-input-row">
          {/* <div className="modal-content row g-3 card-row-input
          "> */}

          <div className="row justify-content-center card-row-input">
            <h2>Modifier la ligne</h2>
            <div className="col-md-8 ">
              <label>Description :</label>
              <textarea
                className="form-control"
                value={selectedRow.description}
                onChange={(e) => handleEditChange2("description", e.target.value)}
                rows={4} // Ajuste le nombre de lignes visibles
                cols={50} // Ajuste la largeur du textarea
              ></textarea>
            </div>
          </div>

          <div className="row justify-content-center card-row-input ">
            {/* <br /> */}
            <div className="col-md-4">
              <label>Prix Unitaire :</label>
              <input
                className="form-control"
                type="number"
                value={selectedRow.prixUnitaire}
                onChange={(e) => handleEditChange2("prixUnitaire", Number(e.target.value))}
                min="0" // Empêche la saisie des nombres négatifs
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
                }}
              />
            </div>
            {/* <br /> */}
            {/* <br /> */}
            <div className="col-md-4">
              <label>Prix Unitaire :</label>
              <select
                className="form-select" 
                name="unite"
                value={selectedRow.unite || ""}
                onChange={(e) => handleEditChange2("unite", e.target.value)}
              >
                <option value="m">m</option>
                <option value="m2">m²</option>
                <option value="l">l</option>
                <option value="">rien</option>
              </select>
            </div>
            {/* <br /> */}
            {/* Développeur Fullstack & DevOps */}
            <div className="col-md-4">
              <label>Quantité :</label>
              <input
                className="form-control"
                type="number"
                value={selectedRow.quantite}
                onChange={(e) => handleEditChange2("quantite", Number(e.target.value))}
                min="0" // Empêche la saisie des nombres négatifs
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
                }}
              />
            </div>
          </div>

          <div className=" hstack gap-3  justify-content-center card-row-input card-row-input-button">
            {/* <div className="hstack gap-3 "> */}
            <button onClick={handleEditSubmit} className="btn btn-outline-primary btn-sm">
              Enregistrer
            </button>
            {/* <div className="vr"></div> */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="btn btn-outline-primary btn-sm"
            >
              Fermer
            </button>
          </div>

          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default InputUpdateRow;
