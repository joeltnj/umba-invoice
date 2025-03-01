

const ProductRow = ({ row }) => {


    return (
        <>
            <tr>
                <td>{row.name}</td>
                <td>{row.price}</td>
            </tr>
        </>
    )
}
export default ProductRow;