import { useSelector } from "react-redux";

export default function Pagination() {
      const products = useSelector((state: any) => state.comb.prod.allProduct);

  return (
    <div>
        <ul className="flex">
            {products.length > 0 &&
             [...Array{pages: any}.keys()].map({pageNumber} => {
                
             })
            }
        </ul>
    </div>
  )
}
