const EditPopup = ({ selectedRow, setRows, setIsModalOpen }) => {
  const [editedRow, setEditedRow] = useState(selectedRow);

  const handleEditChange = (field, value) => {
    setEditedRow((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditSubmit = () => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.refNumber === editedRow.refNumber
          ? { ...editedRow, prixTotal: editedRow.prixUnitaire * editedRow.quantite }
          : row
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div className=" modal-content p-4 rounded shadow-lg bg-light">
        <div className="card">
          <h2>Modifier la ligne</h2>
          <div className="row g-3 card-row">
            <div className="col-md-5">
              <label>Description :</label>
              <input
                className="form-control"
                type="text"
                value={editedRow.description}
                onChange={(e) => handleEditChange("description", e.target.value)}
              />
            </div>
            <div className="col-md-5">
              <label>Prix Unitaire :</label>
              <input
                className="form-control"
                type="number"
                value={editedRow.prixUnitaire}
                onChange={(e) => handleEditChange("prixUnitaire", Number(e.target.value))}
              />
            </div>
            <div className="col-md-5">
              <label>Quantité :</label>
              <input
                className="form-control"
                type="number"
                value={editedRow.quantite}
                onChange={(e) => handleEditChange("quantite", Number(e.target.value))}
              />

              <button onClick={handleEditSubmit}>Enregistrer</button>
              <button onClick={() => setIsModalOpen(false)}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
