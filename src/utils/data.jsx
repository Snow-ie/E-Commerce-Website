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
    url: "https://www.twitter.com/your-handle", // Replace with your X (formerly Twitter) profile link
  },
  {
    name: "LinkedIn",
    icon: <IconLinkedin />,
    url: "https://www.linkedin.com/in/your-profile",
  },
];

export const footerLinks = {
  account: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  quickLinks: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
};

export const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    originalPrice: 160,
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
    originalPrice: 1160,
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
    originalPrice: 400,
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
    originalPrice: 400,
    discountPrice: 375,
    discount: 25,
    image: ComfortChair,
    rating: 4.5,
    reviews: 99,
    name: "S-Series Comfort Chair",
  },
];
export const categories = [
  { name: "Phones", icon: <CellPhoneIcon />, isSelected: false },
  { name: "Computers", icon: <ComputerIcon />, isSelected: false },
  { name: "SmartWatch", icon: <SmartWatchIcon />, isSelected: false },
  { name: "Camera", icon: <CameraIcon />, isSelected: true },
  { name: "HeadPhones", icon: <HeadPhoneIcon />, isSelected: false },
  { name: "Gaming", icon: <GamePadIcons />, isSelected: false },
];

export const bestproduct = [
  {
    image: NorthCoat,
    name: "The north coat",
    discountedPrice: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    image: DuffleBag,
    name: "Gucci duffle bag",
    discountedPrice: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
  },
  {
    image: CpuCooler,
    name: "RGB liquid CPU Cooler",
    discountedPrice: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
  },
  {
    image: SmallBookShelf,
    name: "Small Book Shelf",
    discountedPrice: 360,
    originalPrice: null,
    rating: 5,
    reviews: 65,
  },
];
export const ourproduct = [
  {
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 35,
    isNew: false,
    image: BreedDryDogFood,
    rating: 3,
    reviews: 35,
  },
  {
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 95,
    isNew: false,
    image: Camera,
    rating: 4,
    reviews: 95,
  },
  {
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 325,
    isNew: false,
    image: Laptop,
    rating: 5,
    reviews: 325,
  },
  {
    name: "Curology Product Set",
    price: "$500",
    rating: 145,
    isNew: false,
    image: Curology,
    rating: 5,
    reviews: 145,
  },
  {
    name: "Kids Electric Car",
    price: "$960",
    rating: 65,
    isNew: true,
    image: ElectricCar,
    rating: 5,
    reviews: 65,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    rating: 35,
    isNew: false,
    image: SoccerCleats,
    rating: 5,
    reviews: 35,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 55,
    isNew: true,
    image: GP11,
    rating: 4.5,
    reviews: 55,
  },
  {
    name: "Quilted Satin Jacket",
    price: "$660",
    rating: 55,
    isNew: false,
    image: SatinJacket,
    rating: 4.5,
    reviews: 55,
  },
];
