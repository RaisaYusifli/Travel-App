import spain from "../../../../../assets/spainHome1.png";
import italy from "../../../../../assets/italyHome1.png";
import turkey from "../../../../../assets/turkeyHome1.png";
import sparkle from "../../../../../assets/sparkles.png";
import heart from "../../../../../assets/player-heart.png";
import bookmark from "../../../../../assets/bookmark.png";

const cardsTrending = [
  {
    id: 1,
    image: spain,
    trip: "SPAIN TRIP",
    description: "Magical Madrid To Marrakech By Train",
    days: "12 days",
    from: "From",
    price: "$1299.00",
    imageIcon: sparkle,
    iconText: "Loved by over 40s",
    showButton: true,
    bookmark: bookmark,
    showBookmark: true,
  },
  {
    id: 2,
    image: italy,
    trip: "ITALY TRIP",
    description: "Spectacular Sicily",
    days: "5 days",
    from: "From",
    price: "$250.00",
    imageIcon: heart,
    iconText: "Loved by couples",
    showButton: true,
    bookmark: bookmark,
    showBookmark: true,
  },
  {
    id: 3,
    image: turkey,
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
