const InputNumeroFacture = ({ value, onChange, title }) => {
  return (
    <>
      <form className="row g-3 card-row-facture">
        <div className="col-md-7 ">
          <label htmlFor="numero-facture" className="visually-hidden">
            {title}:
          </label>

          <div className="input-group">
            {/* <div className="input-group-text">@</div> */}
            <input
              className="form-control"
              type="number"
              id="numero-facture"
              value={value}
              onChange={onChange}
              placeholder="Numéro de facture"
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
              }}
            />
          </div>
          
        </div>
        <div className="col-md-2">
            <button type="submit" className="btn btn-outline-primary btn-sm">
              Submit
            </button>
          </div>
      </form>
    </>
  );
};

export default InputNumeroFacture;
// const InputNumeroFacture = ({ value, onChange, title }) => {
//   return (
//     <>
//       <form className="row row-cols-lg-auto g-3 align-items-center">
//         <div className="col-12">
//           <label htmlFor="numero-facture" className="visually-hidden">
//             {title}:
//           </label>
//           <div className="input-group">
//             {/* <div className="input-group-text">@</div> */}
//             <input
//               type="number"
//               id="numero-facture"
//               value={value}
//               onChange={onChange}
//               placeholder="Entrez le numéro de facture"
//               min="0"
//               onKeyDown={(e) => {
//                 if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
//               }}
//             />
//           </div>
//         </div>
//         <div className="col-12">
//           <button type="submit" className="btn btn-outline-primary btn-sm">
//             Submit
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default InputNumeroFacture;
