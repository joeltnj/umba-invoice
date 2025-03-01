import React from "react";

const InputClientCompany = ({ value, onChange }) => {
  return (
    <>
      <div className="card">
        <div className="row g-3 card-row-company">
          <div className="col-md-7 ">
            <label htmlFor="client-company" className="visually-hidden">
              Nom de l'entreprise du client :
            </label>

            <div className="input-group">
              <input
                className="form-control"
                type="text"
                id="client-company"
                value={value}
                onChange={onChange}
                placeholder="Entrez le nom de l'entreprise"
              />
            </div>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-outline-primary btn-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputClientCompany;
// import React from "react";

// const InputClientCompany = ({ value, onChange }) => {
//   return (
//     <>
//       <form className="row row-cols-lg-auto g-3 align-items-center">
//         <div className="col-12">
//           <label htmlFor="client-company" className="visually-hidden">
//             Nom de l'entreprise du client :
//           </label>
//           <div className="input-group">
//             <input
//               type="text"
//               id="client-company"
//               value={value}
//               onChange={onChange}
//               placeholder="Entrez le nom de l'entreprise"
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

// export default InputClientCompany;
