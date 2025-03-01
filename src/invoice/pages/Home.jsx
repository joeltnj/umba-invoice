import React, { useRef, useState } from "react";
import ProductRow from "../components/ProductRow";
import InputRow from "../components/InputRow";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    prixUnitaire: "",
    quantite: "",
  });
  const [rows, setRows] = useState([]);

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
        prixTotal: formData.quantite * formData.prixUnitaire,
      },
    ]);
    setShowForm(!showForm);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="invoice-container">
      <div className="invoice">
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
            {/* {rows.map((row, index) => (
              <ProductRow key={index} {...row} />
            ))} */}

            {rows
              .filter((row) => row.refNumber && row.description && row.prixUnitaire && row.quantite)
              .map((row, index) => (
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
    </div>
  );
};

export default Home;
