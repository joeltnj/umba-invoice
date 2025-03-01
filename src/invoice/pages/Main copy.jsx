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
  //   const { rows, setRows } = useTask();
  const { rows, setRows } = useTask();

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

  const [clientCompany, setClientCompany] = useState("");
  const [numeroFacture, setNumeroFacture] = useState("");
  const [tva, setTva] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  const [documentType, setDocumentType] = useState("devis");

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
  //   const [rows, setRows] = useState([{}]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
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
    setShowForm(!showForm);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  //   fin  pour les datas cellules

  // **************************debut edit row


  const handleIsOpen = () => {
    setIsOpen(true);
  };
  const handleEditRow = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };



  const onSubmite = (e) => {
    console.log(e);
    
    e.preventDefault();
    // e.preventDefault(); 
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
      <ChoixDocument value={documentType} onChange={handleDocumentTypeChange} />
      <button onClick={() => console.log(documentType)}>Voir Type Document</button>
      <InputNumeroFacture value={tva} onChange={handleTva} title="Entrer TVA" />
      <InputNumeroFacture
        value={numeroFacture}
        onChange={handleNumeroFactureChange}
        title="Numero de la Facture"
      />
      <button onClick={() => console.log(numeroFacture)}>Voir Numéro Facture</button>
      <InputClientCompany value={clientCompany} onChange={handleClientCompanyChange} />
      <button onClick={() => console.log(clientCompany)}>Voir Nom Company</button>
      <InputAdresseClient formData={adresse} onChange={handleAdresseChange} />
      <button onClick={() => console.log(adresse)}>Voir Adresse client</button> <br />
      <InputAdresseClient formData={adresseChantier} onChange={handleAdresseChangeChantier} />
      <button onClick={() => console.log(adresseChantier)}>Voir Adresse chantier</button> <br />
      <button onClick={handleToggleForm}>Ajouter une ligne</button> <br />
      {isOpen && (
        <InputData
          onChange={handleEditRow}
          onSubmite={onSubmite}
          setIsOpen={() => setIsOpen(false)}
        />
      )}
      <br />
      <button onClick={handleIsOpen}>Add Line</button>
      <br />
      <Invoice
        rows={rows}
        adresse={adresse}
        adresseChantier={adresseChantier}
        clientCompany={clientCompany}
        numeroFacture={numeroFacture}
        documentType={documentType}
        tva={tva}
      />
      {showForm && <InputRow onChange={handleChange} onSubmit={handleSubmit} />}
      <button onClick={handleToggleForm}>Ajouter une ligne</button>
    </>
  );
};

export default Main;
