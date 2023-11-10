import spain2 from "../../../../../assets/spainHome2.png";
import italy2 from "../../../../../assets/italyHome2.png";
import turkey2 from "../../../../../assets/turkeyHome2.png";
import bookmark from "../../../../../assets/bookmark.png";

const cardsTrending = [
  {
    id: 1,
    // image: "./assets/spainHome1.png",
    image: spain2,
    trip: "SPAIN TRIP",
    description: "Magical Madrid To Marrakech By Train",
    days: "12 days",
    from: "From",
    price: "$1299.00",
    bookmark: bookmark,
    showBookmark: true,
  },
  {
    id: 2,
    image: italy2,
    trip: "ITALY TRIP",
    description: "Spectacular Sicily",
    days: "5 days",
    from: "From",
    price: "$250.00",
    bookmark: bookmark,
    showBookmark: true,
  },
  {
    id: 3,
    image: turkey2,
    trip: "TURKEY TRIP",
    description: "International Istanbul",
    days: "7 days",
    from: "From",
    price: "$400.00",
    bookmark: bookmark,
    showBookmark: true,
  },
];
export default cardsTrending;
