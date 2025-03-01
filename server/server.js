require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connecté à la base :", mongoose.connection.name))
  .catch((err) => console.error("❌ Erreur de connexion :", err));

const InvoiceSchema = new mongoose.Schema({
  titre: String,
  infos: Object,
  dataProduct: Array,
});

const Invoice = mongoose.model("factures", InvoiceSchema);

app.post("/invoices", async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// getter tout les data
app.get("/invoices", async (req, res) => {
    try {
        const invoice = await Invoice.find();
        res.json(invoice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Démarrage du serveur
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Serveur en écoute sur le port ${PORT}`));

// const InvoiceSchema = new mongoose.Schema({
//     titre: String,
//     //   formData
//     infos: Object,
//     //   numFacture: String,
//     //   tva: String,
//     //   nomCompany: String,
//     //   clientNumVoie: String,
//     //   clientVoie: String,
//     //   clientCommune: String,
//     //   clientBP: String,
//     //   chantierNumVoie: String,
//     //   chantierVoie: String,
//     //   chantierCommune: String,
//     //   chantierBP: String,
//     //   documentType: String,
//     //   productData

//     dataProduct: Array,
//     //   refNumber: String,
//     //   description: String,
//     //   prixUnitaire: String,
//     //   quantite: String,
//     //   unite: String,
//     //   prixTotal: String,
//   });
