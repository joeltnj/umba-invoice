import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import ProductRow from "../components/ProductRow";
import InputRow from "../components/InputRow";

const Home = () => {
  const invoiceRef = useRef();
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    description: "",
    prixUnitaire: "",
    quantite: "",
  });

  const [count, setCount] = useState(1);
  const [rows, setRows] = useState([
    { refNumber: 1, description: "Produit A", prixUnitaire: 10, quantite: 2, prixTotal: 20 },
  ]);

  // const addRow = () => {
  //   setCount((c) => c + 1);
  //   setRows([
  //     ...rows,
  //     { refNumber: count, description: "", prixUnitaire: 0, quantite: 0, prixTotal: 0 },
  //   ]);
  // };

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        refNumber: prevRows.length + 1,
        description: "",
        prixUnitaire: 0,
        quantite: 0,
      },
    ]);
  };
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRows((prevRows) => [
      ...prevRows,
      {
        refNumber: prevRows.length + 1,
        description: formData.description,
        prixUnitaire: formData.prixUnitaire,
        quantite: formData.quantite,
        prixTotal:formData.quantite*formData.prixUnitaire
      },

      
    ]);
    // setRows([...rows,{ refNumber: 0, description: "", prixUnitaire: 0, quantite: 0, prixTotal: 0 }]);
    setShowForm(!showForm);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const generatePDF = () => {
    const element = invoiceRef.current;
    html2pdf().from(element).save("facture.pdf");
  };

  return (
    <div className="invoice-container">
      <div ref={invoiceRef} className="invoice">
        {/* Header */}
        <div className="header">
          <div className="logo">
            <h2>LOREM</h2>
          </div>
          <div className="company-info">
            <p>Phone: +999 123 456 789</p>
            <p>Email: info@yourname.com</p>
            <p>Website: www.domain.com</p>
          </div>
        </div>

        {/* Invoice details */}

        {/* Table */}

        <table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Désignation</th>
              <th>PRICE Unitaire</th>
              <th>QTY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {/* <ProductRow {...rows} /> */}
            {rows.map((row, index) => (
              <ProductRow key={index} {...row} />
            ))}

            <tr>
              <td>#</td>
              <td>E-Book Design</td>
              <td>$350.00</td>
              <td>3</td>
              <td>$1050.00</td>
            </tr>
          </tbody>
        </table>

        {showForm && <InputRow onChange={handleChange} onSubmit={handleSubmit} />}
        <button onClick={handleToggleForm}>Ajouter une ligne</button>
      </div>

      {/* Bouton pour générer le PDF */}
      <button onClick={generatePDF} className="download-btn">
        Télécharger la Facture
      </button>

      {/* autre */}
      <div>
        <input
          type="text"
          placeholder="Nom du client"
          onChange={(e) => setClient(e.target.value)}
        />
        <input
          type="number"
          placeholder="Montant (€)"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div ref={invoiceRef}>
          <h2>FACTURE</h2>
          <p>Client: {client}</p>
          <p>Montant: {amount}€</p>
        </div>
        <button onClick={generatePDF}>Télécharger la Facture</button>
      </div>
    </div>
  );
};

export default Home;
