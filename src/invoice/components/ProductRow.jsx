const ProductRow = ({ refNumber, description, prixUnitaire, quantite, prixTotal, onRowClick }) => {
  return (
    <>
      <tr onClick={() => onRowClick(refNumber)}>
        <td>{refNumber}</td>
        <td>{description}</td>
        <td>{prixUnitaire}</td>
        <td>{quantite}</td>
        <td>{prixTotal}</td>
      </tr>
    </>
  );
};
export default ProductRow;
