const ChoixDocument = ({ value, onChange }) => {
  return (
    <>
     {/* <div className="container mt-3"> */}
      {/* <h5>Type de Document</h5> */}
      <div className="type-document">
      <div className="form-check ">
        <input
          className="form-check-input"
          type="radio"
          name="documentType"
          value="devis"
          id="devis"
          checked={value === "devis"}
          onChange={onChange}
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
          checked={value === "facture"}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="facture">
          Facture
        </label>
      {/* </div> */}
    </div>
    </div>
    </>
  );
};

export default ChoixDocument;
