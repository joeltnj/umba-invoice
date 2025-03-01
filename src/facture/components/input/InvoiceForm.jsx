import { useState } from "react";
import { useData } from "../context/ContextProvider";

function InvoiceForm({ onInvoiceAdded }) {
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("pending");
  const [date, setDate] = useState("");

  const { formData, setFormData, productData, setProductData, dataSend, setDataSend, titre } =
    useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataSend);

    fetch("http://localhost:8080/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...dataSend}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Facture ajoutée :", data);
        onInvoiceAdded(data); // Met à jour l'affichage après ajout
        setClient("");
        setAmount("");
        setStatus("pending");
        setDate("");
      })
      .catch((err) => console.error("❌ Erreur API :", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une Facture</h2>
      {/* <input
        type="text"
        placeholder="Client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">En attente</option>
        <option value="paid">Payée</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /> */}
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default InvoiceForm;
// import { useState } from "react";

// function InvoiceForm({ onInvoiceAdded }) {
//   const [client, setClient] = useState("");
//   const [amount, setAmount] = useState("");
//   const [status, setStatus] = useState("pending");
//   const [date, setDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newInvoice = { client, amount: parseFloat(amount), status, date };

//     fetch("http://localhost:8080/invoices", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newInvoice),
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log("✅ Facture ajoutée :", data);
//         onInvoiceAdded(data); // Met à jour l'affichage après ajout
//         setClient("");
//         setAmount("");
//         setStatus("pending");
//         setDate("");
//       })
//       .catch(err => console.error("❌ Erreur API :", err));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Ajouter une Facture</h2>
//       <input type="text" placeholder="Client" value={client} onChange={(e) => setClient(e.target.value)} required />
//       <input type="number" placeholder="Montant" value={amount} onChange={(e) => setAmount(e.target.value)} required />
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="pending">En attente</option>
//         <option value="paid">Payée</option>
//       </select>
//       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//       <button type="submit">Ajouter</button>
//     </form>
//   );
// }

// export default InvoiceForm;
