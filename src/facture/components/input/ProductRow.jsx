const ProductRow = ({
  refNumber,
  description,
  unitaire,
  unite,
  prixUnitaire,
  quantite,
  prixTotal,
  onRowClick,
}) => {
  return (
    <>
      <tr onClick={() => onRowClick(refNumber)}>
        <td>{refNumber}</td>
        <td>{description}</td>
        <td>
          1
        </td>
        <td>{quantite}{unite}</td>
        <td><span style={{ whiteSpace: 'nowrap' }}>{prixUnitaire} €</span></td>
        <td><span style={{ whiteSpace: 'nowrap' }}>{prixTotal} €</span></td>
      </tr>
    </>
  );
};
export default ProductRow;
