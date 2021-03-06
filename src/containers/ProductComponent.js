import { useSelector } from "react-redux"

const ProductComponent = () => {
    const productss = useSelector((state) => state.allProducts.products)
    const { id, title } = productss[0]
  return (
    <div className="four column wide">
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <div className="content">
                        <div className="header">{title}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductComponent