

const ProductTable = ({ row }) => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {row}

                </tbody>
            </table>

        </>
    )
}
export default ProductTable;