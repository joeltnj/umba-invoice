import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";


const ProductTable = () => {
    const PRODUCTS = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

    let row = []
    let lastCategory = null
    for (let product of PRODUCTS) {
        if (lastCategory !== product.category) {
            row.push(<ProductCategoryRow key={product.category} category={product.category} />)
        }
        lastCategory = product.category
        row.push(<ProductRow key={`product-${product.name}`} product={product} />)

    }

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