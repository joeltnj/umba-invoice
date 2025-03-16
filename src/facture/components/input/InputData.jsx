const InputData = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="row g-3 card-row">
              <div className="col-md-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="documentType"
                    value="devis"
                    id="devis"
                    checked={formData.documentType === "devis"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="devis">
                    Devis
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="documentType"
                    value="facture"
                    id="facture"
                    checked={formData.documentType === "facture"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="facture">
                    Facture
                  </label>
                </div>
              </div>
              <div className="col-md-5 form-group">
                <label htmlFor="dateDocument" className="form-label">
                  Date du document
                </label>
                <input
                  type="date"
                  name="dateDocument"
                  id="dateDocument"
                  className="form-control"
                  value={formData.dateDocument || ""}
                  onChange={handleChange}
                  onFocus={(e) => e.target.showPicker()} // Affiche le calendrier dès le clic
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="row g-3 card-row">
              <div className="col-md-5">
                <label>
                  <input
                    type="text"
                    name="numFacture"
                    placeholder="Numéro Facture"
                    value={formData.numFacture}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="col-md-5">
                <label>
                  {/* <input type="text" name="tva" value={formData.tva} onChange={handleChange} /> */}
                  <input
                    type="number"
                    name="tva"
                    placeholder="TVA"
                    value={formData.tva}
                    onChange={handleChange}
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e") e.preventDefault();
                    }}
                  />
                </label>
              </div>
              <div className="col-md-5">
                <label>
                  {/* <input type="text" name="tva" value={formData.tva} onChange={handleChange} /> */}
                  <input
                    type="number"
                    name="acompte"
                    placeholder="Acompte"
                    value={formData.acompte}
                    onChange={handleChange}
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e") e.preventDefault();
                    }}
                  />
                </label>
              </div>
              <div className="col-md-5">
                <label>
                  <input
                    type="text"
                    name="nomCompany"
                    placeholder=" Nom Company"
                    value={formData.nomCompany}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row g-3 card-row">
              <div className="col-md-12 card-nom-titre">
                <h3>Client</h3>
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  name="clientNumVoie"
                  placeholder="Numéro de Voie"
                  value={formData.clientNumVoie}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  name="clientVoie"
                  placeholder="Voie"
                  value={formData.clientVoie}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  name="clientCommune"
                  placeholder=" Commune"
                  value={formData.clientCommune}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  name="clientBP"
                  placeholder="BP"
                  value={formData.clientBP}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="row g-3 card-row">
              <div className="col-md-12 card-nom-titre">
                <h3>Chantier</h3>
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  name="chantierNumVoie"
                  placeholder="Numéro de Voie"
                  value={formData.chantierNumVoie}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-5">
                <input
                  type="text"
                  name="chantierVoie"
                  placeholder=" Voie"
                  value={formData.chantierVoie}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-5">
                <input
                  type="text"
                  name="chantierCommune"
                  placeholder=" Commune"
                  value={formData.chantierCommune}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-5">
                <input
                  type="text"
                  name="chantierBP"
                  placeholder="BP"
                  value={formData.chantierBP}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* <button type="submit">Envoyer</button> */}
        </form>
      </div>
    </>
  );
};

export default InputData;
