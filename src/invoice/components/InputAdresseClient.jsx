const InputAdresseClient = ({ formData, onChange, title }) => {
  return (
    <div className="card">
      <div className="name-entreprise">{title}</div>
      <div className="row g-3 card-row">
        <div className="col-md-5">
          {/* <label className="form-label"> Num voie : </label> */}
          <input
            className="form-control"
            type="text"
            name="numVoie"
            value={formData.numVoie}
            placeholder="N° de voie"
            onChange={(e) => onChange("numVoie", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
            }}
          />
        </div>

        {/* <br /> */}

        <div className="col-md-5">
          {/* <label className="form-label"> Nom de la ville : </label> */}
          <input
            className="form-control"
            type="text"
            name="ville"
            value={formData.ville}
            placeholder="Nom de la ville"
            onChange={(e) => onChange("ville", e.target.value)}
          />
        </div>

        {/* <br /> */}

        <div className="col-md-5">
          {/* <label className="form-label"> Commune : </label> */}
          <input
            className="form-control"
            type="text"
            name="commune"
            value={formData.commune}
            placeholder="Commune"
            onChange={(e) => onChange("commune", e.target.value)}
          />
        </div>
        <br />

        <div className="col-md-5">
          {/* <label className="form-label">  Boîte postale :</label> */}
          <input
            className="form-control"
            type="text"
            name="boitePostale"
            value={formData.boitePostale}
            placeholder="Boîte postale"
            onChange={(e) => onChange("boitePostale", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
            }}
          />
        </div>
        <div class="col-10">
          <button type="submit" className="btn btn-outline-primary btn-sm">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputAdresseClient;
// const InputAdresseClient = ({ formData, onChange }) => {
//   return (
//     <div>
//       <label>
//         Numéro de la voie :
//         <input
//           type="text"
//           name="numVoie"
//           value={formData.numVoie}
//           onChange={(e) => onChange("numVoie", e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
//           }}
//         />
//       </label>
//       <br />

//       <label>
//         Nom de la ville :
//         <input
//           type="text"
//           name="ville"
//           value={formData.ville}
//           onChange={(e) => onChange("ville", e.target.value)}
//         />
//       </label>
//       <br />

//       <label>
//         Commune :
//         <input
//           type="text"
//           name="commune"
//           value={formData.commune}
//           onChange={(e) => onChange("commune", e.target.value)}
//         />
//       </label>
//       <br />

//       <label>
//         Boîte postale :
//         <input
//           type="text"
//           name="boitePostale"
//           value={formData.boitePostale}
//           onChange={(e) => onChange("boitePostale", e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "-" || e.key === "e") e.preventDefault(); // Bloque "-" et "e" pour éviter les valeurs négatives
//           }}
//         />
//       </label>
//     </div>
//   );
// };

// export default InputAdresseClient;
