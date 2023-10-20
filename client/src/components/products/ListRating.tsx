// "use client";

// import { Heading } from "@/components/Heading";
// import { useSelector } from "react-redux";
// import moment from "moment";
// import { Rating } from "@mui/material";
// import { Avatar } from "@/components/Avatar";

// interface ListRatingProps {
//   product: any;
// }

// export const ListRating: React.FC<ListRatingProps> = ({}) => {
//       let product = useSelector((state: any) => state.comb.prod.allProduct);
//   return (
//     <div>
//       <Heading title="Product Review" />
//       <div className="text-sm mt-2">
//         {product.reviews && product.reviews.map(review: any) => {
//             return (
//             <div key={review.id} className="max-w-[300px]">
//                 <div className="flex gap-2 items-center">
//                     <Avatar src={review?.user.image}/>
//                     <div className="font-semibold">{review? user.name}</div>
//                     <div className="font-light">{moment(review.createdDate.fromNow())}</div>
//                 </div>
//                 <div className="mt-2">
//                     <Rating value={review.rating.rate} readOnly/>
//                     <div className="ml-2">{review.comment}</div>
//                     <hr className="my-4"/>
//                 </div>
//             </div>
//             );
//         }};
//       </div>
//     </div>
//   );
// };
