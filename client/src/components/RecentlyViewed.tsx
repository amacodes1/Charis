// import { useDispatch, useSelector } from "react-redux";
// import { addRecentlyViewed } from "@/redux/recentlyViewedSlice";
// import { useEffect } from "react";

// export default function RecentlyViewed() {
//   const dispatch = useDispatch();
//   const recentlyViewed = useSelector(
//     (state: any) => state.comb.recently.viewedProducts
//   );

//   const getRecentlyViewedCard = async () => {
//     const res: any = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     dispatch(addRecentlyViewed(data));
//   };

//   useEffect(() => {
//     getRecentlyViewedCard();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   });

//   return (
//     <div>
//       <h2>Recently Viewed</h2>
//       <ul>
//         {recentlyViewed.map((product: any) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
