import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import { useData } from "../context/ContextProvider";
import ProductRow from "./ProductRow";
import InputUpdateRow from "./InputUpdateRow";

const Invoice = ({ documentType }) => {
  const { formData, productData, setProductData } = useData(); //ici *****************************

  const date = new Date();
  const invoiceRef = useRef();
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generatePDF = () => {
    const element = invoiceRef.current;
    const options = {
      margin: 5, // Ajoute une marge pour éviter les coupures
      filename: "facture.pdf",
      image: { type: "jpeg", quality: 1 }, // Améliore la qualité des images
      html2canvas: {
        scale: 3, // Améliore la netteté (mettre entre 2 et 4)
        useCORS: true, // Permet d'afficher les images externes correctement
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait", // Fixe l'orientation du PDF
      },
    };
    html2pdf().set(options).from(element).save();
  };

  const totalPrix = productData
    .filter((row) => row.prixTotal) // Ignore les lignes vides
    .reduce((acc, row) => acc + row.prixTotal, 0);

  const montantTva = totalPrix * (Number(formData.tva) / 100);
  let ttc = totalPrix + montantTva;

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const handleEditSubmit = () => {
    setProductData((prevRows) =>
      prevRows.map((row) =>
        row.refNumber === selectedRow.refNumber
          ? { ...selectedRow, prixTotal: selectedRow.prixUnitaire * selectedRow.quantite }
          : row
      )
    );
    setIsModalOpen(false);
  };

  const handleEditChange2 = (field, value) => {
    setSelectedRow((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {isModalOpen && selectedRow && (
        <InputUpdateRow
          handleEditChange2={handleEditChange2}
          selectedRow={selectedRow}
          handleEditSubmit={handleEditSubmit}
          setIsModalOpen={() => {
            setIsModalOpen(false);
          }}
        />
      )}

      <div className="invoice-container">
        <div ref={invoiceRef} className="invoice">
          <div className="invoice-header">
            <div className="company-details">
              <div className="business-info">
                <p>
                  <strong>UMBA ENTREPRISE commme </strong>
                  <br />
                  1, Allée Anita Conti <br />
                  31520 Ramonville st Agne <br />
                  📠 0980513567 ☎ 0662444935 <br />
                  ✉️ umba.contact@gmail.com <br />
                  N° de SIRET: 514636414 00039
                </p>
              </div>
              <div className="client-details">
                <strong>{formData.nomCompany}</strong> <br />
                {formData.clientNumVoie}, {formData.clientVoie} <br />
                {formData.clientBP} {formData.clientCommune}
              </div>
            </div>
            <div className="invoice-meta">
              <div className="invoice-name">
                <p>
                  {formData.documentType.charAt(0).toUpperCase() + formData.documentType.slice(1)}
                </p>
              </div>
              <div className="invoice-summary">
                <div className="invoice-number">
                  <p>Numéro {formData.documentType}</p>
                  <p>{formData.numFacture}</p>
                </div>
                <div className="invoice-date">
                  <p>Date de {documentType}</p>
                  <p>{`${String(date.getDate()).padStart(2, "0")}/${String(
                    date.getMonth() + 1
                  ).padStart(2, "0")}/${date.getFullYear()}`}</p>
                </div>
              </div>
              <div className="billing-address">
                <p>Adresse Chantier</p>
                <p>
                  {formData.chantierNumVoie}, {formData.chantierVoie} <br />
                  {formData.chantierBP} {formData.chantierCommune}
                </p>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="invoice-table">
            <table>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Désignation</th>
                  <th>Unité</th>
                  <th>Quantité</th>
                  <th>P.U.</th>
                  <th ><span style={{ whiteSpace: 'nowrap' }}>P Total HT</span></th>
                </tr>
              </thead>
              <tbody>
                {productData
                  .filter((row) => row.description && row.prixUnitaire && row.quantite) // Ignore les lignes vides
                  .map((row, index) => (
                    <ProductRow
                      key={index}
                      {...row}
                      refNumber={index + 1}
                      onRowClick={() => handleRowClick(row)}
                    />
                  ))}
              </tbody>
            </table>
          </div>

          {/* footer */}
          <div className="invoice-footer">
            <div className="invoice-terms">
              <p>
                <span className="terms"> Durée de validité </span>
                : 30 jours <br />
                Il sera demandé un acompte représentant 30% du montant total du devis
              </p>
            </div>
            <div className="invoice-totals-section">
              <div className="invoice-totals-labels">
                <p>Total HT</p>
                <p>TVA {formData.tva}%</p>
              </div>
              <div className="invoice-totals-values">
                <p>{totalPrix.toFixed(2)} €</p>
                <p>{montantTva.toFixed(2)} €</p>
              </div>
            </div>
          </div>
          <div className="invoice-grand-totals">
            <div className="invoice-grand-totals-terms">{/* <p>terme bla blaaa aaaaa</p> */}</div>
            <div className="invoice-grand-totals-data">
              <p>Total TTC</p>
              {/* <p className="p2" style={{ marginLeft: "auto" }}>{ttc.toFixed(2)} €</p> */}
              <p >{ttc.toFixed(2)} €</p>
            </div>
          </div>
        </div>

        {/* Bouton pour générer le PDF */}
        <div className=" hstack gap-3   card-row-input card-row-input-button">
          {/* <div className="hstack gap-3 "> */}
          <button onClick={generatePDF} className="btn  btn-primary btn-outline-successiiii">
            Télécharger la Facture
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
