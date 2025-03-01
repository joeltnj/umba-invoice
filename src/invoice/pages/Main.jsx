import { useState } from "react";
import InputAdresseClient from "../components/InputAdresseClient";
import InputClientCompany from "../components/InputClientCompany";
import InputNumeroFacture from "../components/InputNumeroFacture";
import ChoixDocument from "../components/ChoixDocument";
import ProductRow from "../components/ProductRow";
import InputRow from "../components/InputRow";
import Invoice from "./aHome";
import ContextProvider, { useTask } from "../components/ContextProvider";
import InputData from "../components/InputData";

const Main = () => {
  const { rows, setRows } = useTask();
  const [clientCompany, setClientCompany] = useState("");
  const [numeroFacture, setNumeroFacture] = useState("");
  const [tva, setTva] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [documentType, setDocumentType] = useState("devis");

  //  debut pour les input adresse
  const [adresse, setAdresse] = useState({
    numVoie: "",
    ville: "",
    commune: "",
    boitePostale: "",
  });
  const [adresseChantier, setAdresseChantier] = useState({
    numVoie: "",
    ville: "",
    commune: "",
    boitePostale: "",
  });

  const handleAdresseChange = (field, value) => {
    setAdresse((prev) => ({ ...prev, [field]: value }));
  };
  const handleAdresseChangeChantier = (field, value) => {
    setAdresseChantier((prev) => ({ ...prev, [field]: value }));
  };
  const handleClientCompanyChange = (e) => {
    setClientCompany(e.target.value);
  };
  const handleNumeroFactureChange = (e) => {
    setNumeroFacture(e.target.value);
  };
  const handleTva = (e) => {
    setTva(e.target.value);
  };
  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
  };
  //   fin  pour les input adresse

  //   debut pour les datas cellules
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    prixUnitaire: "",
    quantite: "",
  });

  //   fin  pour les datas cellules

  // **************************debut edit row

  const handleIsOpen = () => {
    setIsOpen(true);
  };
  const handleEditRow = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const onSubmite = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.prixUnitaire || !formData.quantite) {
      return; // Évite d'ajouter une ligne vide
    }

    setRows((prevRows) => [
      ...prevRows,
      {
        refNumber: prevRows.length + 1,
        description: formData.description,
        prixUnitaire: formData.prixUnitaire,
        quantite: formData.quantite,
        prixTotal: formData.quantite * formData.prixUnitaire,
      },
    ]);
    setIsOpen(false);
  };

  // **************************fin  edit row
  return (
    <>
      {/* +++++++++++++++++  input pour les adress +++++++++++++ */}
      <h2>Main</h2>

      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              Mon Site
            </a>
          </div>
        </nav>

        <section className="container-fluid">
          <div className="row">
            <div className="col-4 bg-secondary text-white">
              <div className="card">
                {/* <div className="input- card text-center mb-3"> */}
                <ChoixDocument value={documentType} onChange={handleDocumentTypeChange} />
                {/* <button className="btn btn-outline-light" onClick={() => console.log(documentType)}>
                  Voir Type Document
                </button> */}
                {/* </div> */}
                {/* <div className="input- card text-center mb-3"> */}
                <InputNumeroFacture value={tva} onChange={handleTva} title="Entrer TVA" />
                {/* </div> */}
                {/* <div className="input- card text-center mb-3"> */}
                <InputNumeroFacture
                  value={numeroFacture}
                  onChange={handleNumeroFactureChange}
                  title="Numero de la Facture"
                />
              </div>
              {/* <button
                  className="btn btn-outline-light"
                  onClick={() => console.log(numeroFacture)}
                >
                  Voir Numéro Facture
                </button> */}
              {/* </div> */}
              {/* <div className="input- card text-center mb-3"> */}
              {/* <div className="card"> */}
              <InputClientCompany value={clientCompany} onChange={handleClientCompanyChange} />
              {/* </div> */}
              {/* <button
                  className="btn btn-outline-light"
                  onClick={() => console.log(clientCompany)}
                >
                  Voir Nom Company
                </button> */}
              {/* </div> */}
              {/* <div className="input- card text-center mb-3"> */}
              <InputAdresseClient
                title="Adresse Client"
                formData={adresse}
                onChange={handleAdresseChange}
              />
              {/* <button className="btn btn-outline-light" onClick={() => console.log(adresse)}>
                  Voir Adresse client
                </button>{" "} */}
              {/* </div> */}
              {/* <div className="input- card text-center mb-3"> */}
              <InputAdresseClient
                title="Adresse Chantier"
                formData={adresseChantier}
                onChange={handleAdresseChangeChantier}
              />
              {/* <button
                  className="btn btn-outline-light"
                  onClick={() => console.log(adresseChantier)}
                >
                  Voir Adresse chantier
                </button> */}
              {/* </div> */}
              <div className="input-"></div>
              <div className="input-"></div>

              <br />

              <br />
            </div>
            <div className="col-8 bg-primaryn text-white wraper-invoice">
              <Invoice
                rows={rows}
                adresse={adresse}
                adresseChantier={adresseChantier}
                clientCompany={clientCompany}
                numeroFacture={numeroFacture}
                documentType={documentType}
                tva={tva}
              />
              {/* <div className="hstack justify-content-center"> */}
              <div className="d-grid gap-2 col-3 mx-auto ajouter-line">
                <button className="btn btn-outline-primary btn-sm" onClick={handleIsOpen}>
                  Ajouter une ligne
                </button>
              </div>
            </div>
          </div>
        </section>
        <footer className="container-fluid"></footer>
      </div>

      <div className="input-">
        {isOpen && (
          <InputData
            onChange={handleEditRow}
            onSubmite={onSubmite}
            setIsOpen={() => setIsOpen(false)}
          />
        )}
      </div>

      <br />

      <br />
    </>
  );
};
export default Main;
