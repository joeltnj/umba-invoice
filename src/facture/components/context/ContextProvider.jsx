import { createContext, useContext, useState } from "react";

const ContextData = createContext();

const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    numFacture: "",
    tva: "",
    nomCompany: "",
    clientNumVoie: "",
    clientVoie: "",
    clientCommune: "",
    clientBP: "",
    chantierNumVoie: "",
    chantierVoie: "",
    chantierCommune: "",
    chantierBP: "",
    documentType: "devis",
  });

  const [productData, setProductData] = useState([
    { refNumber: 1, description: "", prixUnitaire: "", quantite: "", unite: "", prixTotal: "" },
  ]);
  const [dataSend, setDataSend] = useState({
    titre: "",
    infos: { ...formData },
    dataProduct: [...productData],
  });

  return (
    <ContextData.Provider
      value={{ formData, setFormData, productData, setProductData, dataSend, setDataSend }}
    >
      {children}
    </ContextData.Provider>
  );
};

export function useData() {
  return useContext(ContextData);
}
export default ContextProvider;
