import IconFacebook from "../assets/footer/IconFacebook";
import IconInstagram from "../assets/footer/IconInstagram";
import IconTwitter from "../assets/footer/IconTwitter";
import IconLinkedin from "../assets/footer/IconLinkedin";
import GamePad from "../assets/images/GamePad.svg";
import Keyboard from "../assets/images/Keyboard.svg";
import Monitor from "../assets/images/Monitor.svg";
import ComfortChair from "../assets/images/ComfortChair.svg";

import CellPhoneIcon from "../assets/category/CellPhoneIcon";
import ComputerIcon from "../assets/category/ComputerIcon";
import SmartWatchIcon from "../assets/category/SmartWatchIcon";
import CameraIcon from "../assets/category/CameraIcon";
import HeadPhoneIcon from "../assets/category/HeadphoneIcon";
import GamePadIcons from "../assets/category/GamePadIcons";

import NorthCoat from "../assets/images/NorthCoat.svg";
import DuffleBag from "../assets/images/DuffleBag.svg";
import CpuCooler from "../assets/images/CpuCooler.svg";
import SmallBookShelf from "../assets/images/SmallBookShelf.svg";

import BreedDryDogFood from "../assets/images/BreedDryDogFood.svg";
import Camera from "../assets/images/Camera.svg";
import Laptop from "../assets/images/Laptop.svg";
import Curology from "../assets/images/Curology.svg";
import ElectricCar from "../assets/images/ElectricCar.svg";
import SoccerCleats from "../assets/images/SoccerCleats.svg";
import GP11 from "../assets/images/GP11.svg";
import SatinJacket from "../assets/images/SatinJacket.svg";

export const socials = [
  {
    name: "Facebook",
    icon: <IconFacebook />,
    url: "https://www.facebook.com/your-page",
  },
  {
    name: "Instagram",
    icon: <IconInstagram />,
    url: "https://www.instagram.com/your-profile",
  },
  {
    name: "X",
    icon: <IconTwitter />,
    url: "https://www.twitter.com/your-handle",
  },
  {
    name: "LinkedIn",
    icon: <IconLinkedin />,
    url: "https://www.linkedin.com/in/your-profile",
  },
];

export const footerLinks = {
  account: [
    { name: "My Account", link: "/account" },
    { name: "Login / Register", link: "/login" },
    { name: "Cart", link: "/cart" },
    { name: "Wishlist", link: "/wishlist" },
    { name: "Shop", link: "/shop" },
  ],
  quickLinks: [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms Of Use", link: "/terms-of-use" },
    { name: "FAQ", link: "/faq" },
    { name: "Contact", link: "/contact" },
  ],
};
export const categories = [
  { name: "Phones", icon: <CellPhoneIcon />, isSelected: false },
  { name: "Computers", icon: <ComputerIcon />, isSelected: false },
  { name: "SmartWatch", icon: <SmartWatchIcon />, isSelected: false },
  { name: "Camera", icon: <CameraIcon />, isSelected: true },
  { name: "HeadPhones", icon: <HeadPhoneIcon />, isSelected: false },
  { name: "Gaming", icon: <GamePadIcons />, isSelected: false },
];

export const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 160,
    discountPrice: 120,
    discount: 40,
    image: GamePad,
    rating: 4.5,
    reviews: 88,
    name: "HAVIT HV-G92 Gamepad",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 1160,
    discountPrice: 960,
    discount: 35,
    image: Keyboard,
    rating: 4,
    reviews: 75,
    name: "AK-900 Wired Keyboard",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 400,
    discountPrice: 370,
    discount: 30,
    image: Monitor,
    rating: 5,
    reviews: 99,
    name: "IPS LCD Gaming Monitor",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 400,
    discountPrice: 375,
    discount: 25,
    image: ComfortChair,
    rating: 4.5,
    reviews: 99,
    name: "S-Series Comfort Chair",
  },
];

export const bestproduct = [
  {
    id: 1,
    image: NorthCoat,
    name: "The north coat",
    discountPrice: 260,
    price: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    image: DuffleBag,
    name: "Gucci duffle bag",
    discountPrice: 960,
    price: 1160,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 3,
    image: CpuCooler,
    name: "RGB liquid CPU Cooler",
    discountPrice: 160,
    price: 170,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 4,
    image: SmallBookShelf,
    name: "Small Book Shelf",
    discountPrice: 360,
    price: null,
    rating: 5,
    reviews: 65,
  },
];
export const ourproduct = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "100",
    rating: 35,
    isNew: false,
    image: BreedDryDogFood,
    rating: 3,
    reviews: 35,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "360",
    rating: 95,
    isNew: false,
    image: Camera,
    rating: 4,
    reviews: 95,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "700",
    rating: 325,
    isNew: false,
    image: Laptop,
    rating: 5,
    reviews: 325,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: "500",
    rating: 145,
    isNew: false,
    image: Curology,
    rating: 5,
    reviews: 145,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: "960",
    rating: 65,
    isNew: true,
    image: ElectricCar,
    rating: 5,
    reviews: 65,
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: "1160",
    rating: 35,
    isNew: false,
    image: SoccerCleats,
    rating: 5,
    reviews: 35,
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: "660",
    rating: 55,
    isNew: true,
    image: GP11,
    rating: 4.5,
    reviews: 55,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: "660",
    rating: 55,
    isNew: false,
    image: SatinJacket,
    rating: 4.5,
    reviews: 55,
  },
];
export const wishlistProducts = [
  {
    id: 1,
    name: "Gucci duffle bag",
    discountPrice: 960,
    price: 1160,
    discount: "35%",
    image: DuffleBag,
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 1960,
    image: CpuCooler,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: GamePad,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    image: SatinJacket,
  },
];

export const recommendedProducts = [
  {
    id: 1,
    name: "ASUS FHD Gaming Laptop",
    discountPrice: 960,
    price: 1160,
    discount: "35%",
    image: Laptop,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    image: Monitor,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    image: GamePad,
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: Keyboard,
    rating: 5,
    reviews: 65,
  },
];
