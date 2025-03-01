const InputData = ({ description, prixUnitaire, quantite, onSubmite, onChange, setIsOpen }) => {
  return (
    <>
      {
        <div className="modal">
          <div className="card-input-row">
            <form onSubmit={onSubmite}>
              <div className="row justify-content-center card-row-input">
                <h2>Ajouter une ligne</h2>
                <div className="col-md-8 ">
                  <label>Désignation :</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={(e) => onChange("description", e.target.value)}
                  />
                </div>
              </div>
              <div className="row justify-content-center card-row-input ">
                <div className="col-md-4">
                  <label>Prix Unitaire (€) : </label>
                  <input
                    className="form-control"
                    type="number"
                    name="prixUnitaire"
                    value={prixUnitaire}
                    onChange={(e) => onChange("prixUnitaire", e.target.value)}
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
                    }}
                  />
                </div>

                <div className="col-md-4">
                  <label>Quantité : </label>
                  <input
                    className="form-control"
                    type="number"
                    name="quantite"
                    value={quantite}
                    onChange={(e) => onChange("quantite", e.target.value)}
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
                    }}
                  />
                </div>
              </div>
              <div className=" hstack gap-3  justify-content-center card-row-input card-row-input-button">
                <input
                  type="submit"
                  value="Enregistre"
                  className="btn btn-outline-primary btn-sm"
                />
                <button onClick={setIsOpen} className="btn btn-outline-primary btn-sm">
                  Fermer
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
};

export default InputData;
