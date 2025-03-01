import React, { useState, useMemo } from 'react';

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState(''); // Mot-clé recherché
  const [count, setCount] = useState(0); // Pour simuler un re-rendu inutile

  const products = [
    'Pomme',
    'Banane',
    'Orange',
    'Ananas',
    'Mangue',
    'Fraise',
    'Framboise',
    'Kiwi',
    'Pastèque',
    'Cerise',
    'Raisin',
    'Pêche',
  ]; // Une liste de produits

  // Calcul coûteux simulé : Filtrer les produits
  const filteredProducts = useMemo(() => {
    console.log('Calcul en cours...');
    return products.filter((product) =>
      product.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); // Le calcul est refait seulement si `searchTerm` change

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un produit"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Incrémenter ({count})</button>
      <h3>Résultats de la recherche :</h3>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
