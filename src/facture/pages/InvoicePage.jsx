import { useEffect, useState } from "react";
import InputData from "../components/input/InputData";
import { useData } from "../components/context/ContextProvider";
import InputProduct from "../components/input/InputProduct";
import InvoiceList from "../components/input/InvoiceList";
import Invoice from "../components/input/Invoice";
import InputSaveData from "../components/input/InputSaveData";

const InvoicePage = () => {
  const { formData, setFormData, productData, setProductData, dataSend, setDataSend, titre } =
    useData();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInvoiceList, setIsOpenInvoiceList] = useState(false);
  const [productPrev, setProductPrev] = useState([{}]); // temporair pour remplir productData
  const [titreSaveData, setTitreSaveData] = useState("");
  const [shouldSend, setShouldSend] = useState(false); // Indique quand envoyer la requête
  const [invoices, setInvoices] = useState([]);

  // ************** debut pour InputData **************
  const handleChangeInfos = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitInfos = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  // ************** fin pour InputData **************

  //************** debut pour InputProduct*******************
  const handleChangeInputProduct = (e) => {
    const { name, value } = e.target;

    // // Modifier le premier élément du tableau
    // temporaire pour le metre apres set...
    setProductPrev((prev) =>
      prev.map((item, index) => (index === 0 ? { ...item, [name]: value } : item))
    );
    setProductPrev((prev) =>
      prev.map((item, index) => (index === 0 ? { ...item, [name]: value } : item))
    );
  };
  const handleButtonClickInputProduct = () => {
    setProductData((prev) => [
      ...prev,
      {
        refNumber: prev.length + 1,
        description: productPrev[0]?.description || "",
        prixUnitaire: productPrev[0]?.prixUnitaire || 0,
        quantite: productPrev[0]?.quantite || 0,
        unite: productPrev[0]?.unite,
        prixTotal: productPrev[0]?.prixUnitaire * productPrev[0]?.quantite,
      },
    ]);
    setIsOpen(false);
  };
  const handleButtonClickFermer = () => {
    setIsOpen(false);
  };

  // ************** debut pour save infos vers provider **************
  const handleSubmitTitre = () => {
    if (titreSaveData) {
      // Mettre à jour correctement les données
      setDataSend((prev) => ({
        ...prev,
        titre: titreSaveData,
        infos: formData,
        dataProduct: productData,
      }));
      // Déclenchement de l'envoi après mise à jour
      setShouldSend(true);
      // Réinitialisation du champ titre
      setTitreSaveData("");
    } else {
      alert("Veuillez saisir un titre avant d'enregistrer.");
    }
  };

  // useEffect détecte quand `dataSend` est mis à jour et envoie la requête
  useEffect(() => {
    if (shouldSend && dataSend) {
      fetch("/collectionVPS", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend), // Utilise les données mises à jour
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("✅ Facture ajoutée :", data);
          fetchInvoices();
        })
        .catch((err) => console.error("❌ Erreur API :", err));
      // Réinitialisation de `shouldSend`
      setShouldSend(false);
    }
  }, [dataSend, shouldSend]); // useEffect s'exécute lorsque `dataSend` ou `shouldSend` change
  // ************** fin  pour save infos vers provider **************

  const handleInputChangeTitre = (e) => {
    setTitreSaveData(e.target.value);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = () => {
    fetch("/collectionVPS")
      .then((res) => res.json())
      .then((data) => setInvoices(data))
      .catch((err) => console.error("❌ Erreur API :", err));
  };

  // debut replace facture

  // Fonction pour récupérer une facture par titre
  const fetchInvoiceTitre = (titre) => {
    // console.log("📝 Titre envoyé à l'API :", `"${titre}"`);
    fetch(`collectionVPS/${encodeURIComponent(titre)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Facture non trouvée !");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("✅ Facture trouvée :", data);
        setFormData({ ...data.infos });
        setProductData([...data.dataProduct]);
        fetchInvoices();
        setIsOpenInvoiceList(false);
      })
      .catch((err) => console.error("❌ Erreur API :", err.message));
  };

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar bg-body-tertia bg-primar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> */}
              UMBA ENTREPRISEsesscccccccccccccc
            </a>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-5 bg-secondar text-white button-voir-ancien-facture">
              <div className="d-flex justify-content-center">
                <button
                  className="col-8 btn btn-primary shadow mb-1 mt-2"
                  onClick={() => setIsOpenInvoiceList((prev) => !prev)}
                >
                  Click pour voir mes anciennes factures
                </button>
              </div>

              {isOpenInvoiceList && (
                <InvoiceList
                  invoices={invoices}
                  fetchInvoiceTitre={fetchInvoiceTitre}
                  setIsOpenInvoiceList={setIsOpenInvoiceList}
                />
              )}
              {/* pour InputData */}
              <InputData
                formData={formData}
                handleChange={handleChangeInfos}
                handleSubmit={handleSubmitInfos} //cette methode pour le bouton Envoyer 'commenter' ne fais rien
              />
              {/* pour InputProduct */}
              {isOpen && (
                <InputProduct
                  productData={productData}
                  handleChange={handleChangeInputProduct}
                  handleButtonClick={handleButtonClickInputProduct}
                  handleButtonClickFermer={handleButtonClickFermer}
                  // setIsOpen={setIsOpen}
                  // handleDescriptionChange={handleDescriptionChange}
                  // suggestions={suggestions}
                />
              )}
              <div className="d-flex justify-content-center mt-3 mb-5">
                <button className="col-7 btn btn-primary shadow" onClick={() => setIsOpen(true)}>
                  Ajouter une nouvelle ligne
                </button>
              </div>
            </div>
            <div className="col-7 bg-primar text-white wraper-invoice">
              {/* facture Invoice */}
              <Invoice />
              {/* buton save data sended */}

              <InputSaveData
                titreSaveData={titreSaveData}
                handleInputChangeTitre={handleInputChangeTitre}
                handleSubmitTitre={handleSubmitTitre}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoicePage;
