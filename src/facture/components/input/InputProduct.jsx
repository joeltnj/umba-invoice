const InputProduct = ({
  productData,
  handleChange,
  handleButtonClick,
  handleButtonClickFermer,
  setIsOpen,
}) => {
  return (
    <div
      className="modal"
      // onClick={() => {
      //   setIsOpen(false);
      // }}
    >
      <div className="card-input-row">
        <div className="row justify-content-center card-row-input">
          <h2>Ajouter un produit</h2>
          <div className="col-md-8">
            <label>Description :</label>
            <textarea
              className="form-control"
              name="description"
              value={productData.description}
              onChange={handleChange}
              rows={4}
              cols={50}
            ></textarea>
          </div>
        </div>

        <div className="row justify-content-center card-row-input">
          <div className="col-md-4">
            <label>Prix Unitaire :</label>
            <input
              className="form-control"
              type="number"
              name="prixUnitaire"
              value={productData.prixUnitaire}
              onChange={handleChange}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault();
              }}
            />
          </div>

          <div className="col-md-4">
            <label>Unité :</label>
            <select
              className="form-select"
              name="unite"
              value={productData.unite}
              onChange={handleChange}
            >
              <option value="m">m</option>
              <option value="m²">m²</option>
              <option value="ml">ml</option>
              <option value="">rien</option>
            </select>
          </div>

          <div className="col-md-4">
            <label>Quantité :</label>
            <input
              className="form-control"
              type="number"
              name="quantite"
              value={productData.quantite}
              onChange={handleChange}
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault();
              }}
            />
          </div>
        </div>

        <div className="hstack gap-3 justify-content-center card-row-input card-row-input-button">
          <button onClick={handleButtonClick} className="btn btn-outline-primary btn-sm">
            Valider
          </button>
          <button onClick={handleButtonClickFermer} className="btn btn-outline-secondary btn-sm">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputProduct;

// const InputProduct = ({
//   productData,
//   handleChange,
//   handleButtonClick,
//   handleButtonClickFermer,
// }) => {
//   // const { productData, setProductData } = useData();
//   return (
//     <div>
//       <label>
//         Désignation:{" "}
//         <input
//           type="text"
//           name="description"
//           value={productData.description}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Prix Unitaire:{" "}
//         <input
//           type="number"
//           name="prixUnitaire"
//           value={productData.prixUnitaire}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Quantité:{" "}
//         <input type="number" name="quantite" value={productData.quantite} onChange={handleChange} />
//       </label>
//       <label>
//         Unité:
//         <select name="unite" value={productData.unite} onChange={handleChange}>
//         {/* <option value="" disabled>-- Choisir une unité --</option> */}
//           <option value="m">m</option>
//           <option value="m2">m²</option>
//           <option value="l">l</option>
//           <option value="">rien</option>
//         </select>
//       </label>
//       <button onClick={handleButtonClick}>Valider</button>
//       <button onClick={handleButtonClickFermer}>Fermer</button>
//     </div>
//   );
// };

// export default InputProduct;

// const InputProduct = ({
//   productData = {},
//   handleChange,
//   handleButtonClick,
//   handleButtonClickFermer,
//   handleDescriptionChange,
//   suggestions = [], // Valeur par défaut pour éviter undefined
// }) => {
//   return (
//     <div className="modal">
//       <div className="card-input-row">
//         <div className="row justify-content-center card-row-input">
//           <h2>Ajouter un produit</h2>
//           <div className="col-md-8">
//             <label>Description :</label>
//             <textarea
//               className="form-control"
//               name="description"
//               value={productData?.description || ""} // 🔹 Correction ici
//               onChange={handleDescriptionChange}
//               rows={4}
//               cols={50}
//             ></textarea>

//             {/* Zone d'affichage des suggestions */}
//             <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
//               {Array.isArray(suggestions) && suggestions.length > 0
//                 ? suggestions.map((suggestion, index) => (
//                     <p key={index}>
//                       Erreur: <strong>{suggestion.error}</strong> ➝ Suggestions:{" "}
//                       {suggestion.suggestions}
//                     </p>
//                   ))
//                 : productData?.description?.length > 0 && <p>Aucune erreur détectée !</p>}
//             </div>
//           </div>
//         </div>

//         <div className="row justify-content-center card-row-input">
//           <div className="col-md-4">
//             <label>Prix Unitaire :</label>
//             <input
//               className="form-control"
//               type="number"
//               name="prixUnitaire"
//               value={productData.prixUnitaire}
//               onChange={handleChange}
//               min="0"
//               onKeyDown={(e) => {
//                 if (e.key === "-" || e.key === "e") e.preventDefault();
//               }}
//             />
//           </div>

//           <div className="col-md-4">
//             <label>Unité :</label>
//             <select
//               className="form-select"
//               name="unite"
//               value={productData.unite}
//               onChange={handleChange}
//             >
//               <option value="m">m</option>
//               <option value="m²">m²</option>
//               <option value="ml">ml</option>
//               <option value="">rien</option>
//             </select>
//           </div>

//           <div className="col-md-4">
//             <label>Quantité :</label>
//             <input
//               className="form-control"
//               type="number"
//               name="quantite"
//               value={productData.quantite}
//               onChange={handleChange}
//               min="0"
//               onKeyDown={(e) => {
//                 if (e.key === "-" || e.key === "e") e.preventDefault();
//               }}
//             />
//           </div>
//         </div>

//         <div className="hstack gap-3 justify-content-center card-row-input card-row-input-button">
//           <button onClick={handleButtonClick} className="btn btn-outline-primary btn-sm">
//             Valider
//           </button>
//           <button onClick={handleButtonClickFermer} className="btn btn-outline-secondary btn-sm">
//             Fermer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InputProduct;
// *************************************************************************************
