const InvoiceList = ({ invoices, fetchInvoiceTitre, setIsOpenInvoiceList }) => {
  return (
    <>
      <div
        className="modal-invoice-list-saved"
        onClick={() => {
          setIsOpenInvoiceList(false);
        }}
      >
        <div className="invoice-list-saved">
          <p>Listes des anciennes factures sauvegarder</p>
          <ul>
            {invoices.map((invoice, index) => (
              <li key={index} onClick={() => fetchInvoiceTitre(invoice.titre)}>
                {invoice.titre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InvoiceList;
