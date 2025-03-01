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

// Schéma Mongoose
const InvoiceSchema = new mongoose.Schema(
  {
    titre: String,
    infos: Object, // Contient les informations générales (ex: formData)
    dataProduct: Array, // Contient les produits liés
  },
  { versionKey: false }
);

const Invoice = mongoose.model("factures", InvoiceSchema);

// Route GET pour récupérer les factures
app.get("/invoices", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    console.log("📂 Factures trouvées :", invoices);
    res.json(invoices);
  } catch (err) {
    console.error("❌ Erreur API:", err);
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
});

// Route POST pour ajouter une facture
app.post("/invoices", async (req, res) => {
  try {
    if (!req.body.infos || !req.body.dataProduct) {
      return res.status(400).json({ message: "Données invalides" });
    }

    const invoice = new Invoice({ ...req.body });
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    console.error("❌ Erreur d'ajout :", err);
    res.status(400).json({ message: "Erreur d'ajout", error: err });
  }
});

// Route pour récupérer une facture par titre
app.get("/invoices/:titre", async (req, res) => {
  try {
    const facture = await Invoice.findOne({ titre: req.params.titre });

    if (!facture) {
      return res.status(404).json({ message: "Facture non trouvée" });
    }

    res.json(facture);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// app.get("/invoices/:titre", async (req, res) => {
//     try {
//       const titreRecu = req.params.titre.trim();
//       console.log("🔎 Recherche facture avec le titre :", `"${titreRecu}"`);
  
//       // Test 1: Vérifier si une facture existe en base
//       const factures = await Invoice.find().lean();
//       console.log("📂 Liste des factures en base :", factures);
  
//       // Test 2: Vérifier si la facture est bien trouvée
//       const facture = await Invoice.findOne({ titre: titreRecu }).lean();
//       console.log("✅ Facture trouvée :", facture);
  
//       if (!facture) {
//         console.log("❌ Facture introuvable !");
//         return res.status(404).json({ message: "Facture non trouvée" });
//       }
  
//       res.json(facture);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
  

// Démarrage du serveur
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Serveur en écoute sur le port ${PORT}`));

// *******************************************************************************************************

// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB connecté à la base :", mongoose.connection.name);
//   })
//   .catch((err) => console.error("❌ Erreur de connexion :", err));

// const Invoice = mongoose.model(
//   "factures",
//   new mongoose.Schema({
//     // client: String,
//     // amount: Number,
//     // status: String,
//     // date: String,

//     numFacture: String,
//     tva: String,
//     nomCompany: String,
//     clientNumVoie: String,
//     clientVoie: String,
//     clientCommune: String,
//     clientBP: String,
//     chantierNumVoie: String,
//     chantierVoie: String,
//     chantierCommune: String,
//     chantierBP: String,
//     documentType: String,
//   })
// );

// app.get("/invoices", async (req, res) => {
//   try {
//     const invoices = await Invoice.find();
//     console.log("📂 Factures trouvées :", invoices); // Vérifie si MongoDB envoie bien les données
//     res.json(invoices);
//   } catch (err) {
//     console.error("❌ Erreur API:", err);
//     res.status(500).json({ message: "Erreur serveur", error: err });
//   }
// });
// const tab = [{}];
// app.post("/invoices", async (req, res) => {
//   try {
//     const {
//       numFacture,
//       tva,
//       nomCompany,
//       clientNumVoie,
//       clientVoie,
//       clientCommune,
//       clientBP,
//       chantierNumVoie,
//       chantierVoie,
//       chantierCommune,
//       chantierBP,
//       documentType,
//     } = req.body;
//     const invoice = new Invoice({
//       numFacture,
//       tva,
//       nomCompany,
//       clientNumVoie,
//       clientVoie,
//       clientCommune,
//       clientBP,
//       chantierNumVoie,
//       chantierVoie,
//       chantierCommune,
//       chantierBP,
//       documentType,
//     });
//     await invoice.save();
//     res.status(201).json(invoice);
//   } catch (err) {
//     res.status(400).json({ message: "Erreur d'ajout", error: err });
//   }
// });

// // fin
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`🚀 Serveur en écoute sur le port ${PORT}`));
// *******************************************************************************************************
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB connecté à la base :", mongoose.connection.name);
//   })
//   .catch((err) => console.error("❌ Erreur de connexion :", err));

// const Invoice = mongoose.model(
//   "factures",
//   new mongoose.Schema({
//     client: String,
//     amount: Number,
//     status: String,
//     date: String,
//   })
// );

// app.get("/invoices", async (req, res) => {
//   try {
//     const invoices = await Invoice.find();
//     console.log("📂 Factures trouvées :", invoices); // Vérifie si MongoDB envoie bien les données
//     res.json(invoices);
//   } catch (err) {
//     console.error("❌ Erreur API:", err);
//     res.status(500).json({ message: "Erreur serveur", error: err });
//   }
// });
// const tab = [{}];
// app.post("/invoices", async (req, res) => {
//   try {
//     const { client, amount, status, date } = req.body;
//     const invoice = new Invoice({ client, amount, status, date });
//     await invoice.save();
//     res.status(201).json(invoice);
//   } catch (err) {
//     res.status(400).json({ message: "Erreur d'ajout", error: err });
//   }
// });

// // fin
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`🚀 Serveur en écoute sur le port ${PORT}`));
