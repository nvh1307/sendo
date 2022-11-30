import './ProductListFilter.css'
const ProductListFilter = ()=>{
    return(
        <div className="product-list-filter">
            <span>Sắp xếp theo:</span>
            <select className='product-list-filter-select' name="" id="">
            <option value="">Đề cử</option>
            <option value="">Bán chạy</option>
            <option value="">Giá thấp</option>
            <option value="">Giá cao</option>
            <option value="">Lượt yêu thích</option>
            </select>
            

        </div>
    )
}

export default ProductListFilter;