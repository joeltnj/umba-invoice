const InputSaveData = ({ titreSaveData, handleInputChangeTitre, handleSubmitTitre }) => {
  return (
    <>
      {/* <input
        type="text"
        placeholder="Entrez un texte"
        value={titreSaveData}
        onChange={handleInputChangeTitre}
      />
      <button onClick={handleSubmitTitre}>saved in data</button> */}
      <div className="d-flex justify-content-center mt-3 mb-5">
        <input
          type="text"
          placeholder="Entrez un texte"
          value={titreSaveData}
          onChange={handleInputChangeTitre}
          className="form-control w-25"
        />
        <button onClick={handleSubmitTitre} className="btn btn-primary w-20 ms-2">
          Saved in data
        </button>
      </div>
    </>
    
  );
};

export default InputSaveData;
