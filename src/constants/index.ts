import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe4_1,
  shoe4_2,
  shoe4_3,
  shoe4_4,
  shoe5_1,
  shoe5_2,
  shoe5_3,
  shoe5_4,
  shoe6_1,
  shoe6_2,
  shoe6_3,
  shoe6_4,
  shoe7_1,
  shoe7_2,
  shoe7_3,
  shoe7_4,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

// import {
//   2,3,4,5
// } from "../assets/images/shoe4";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: 1,
    imgURLs: [shoe4_1, shoe4_2, shoe4_3, shoe4_4],
    productName: "Nike Air Jordan-01",
    price: "$200.20",
    sizes: ["37", "38", "40", "42", "44", "46"],
    description:
      "The classic Nike Air Jordan-01 in various sizes. Step up your game with the Nike Air Jordan-001 in various sizes. PAYING HOMAGE TO ATTITUDE. Celebrating the 25th anniversary of theAir Max 95, the Nike Air Max ZM950 warps the OG's iconic sidepanels, adds fully visible Nike Air cushioning and boasts bold,expressive colours—it's untouchable, confident and tough. BenefitsThe design, inspired by the Air Max 95 with elements symbolising thehuman body, now enters a modern space with distorted lines, bold TPUaccents and lightweight no-sew skins. The bold colours mix edginessand fun. New webbing runs down the sides, adding structure andsupport while creating a distinctly new look. The highlighted Aircushioning in the heel is the same as the 270 and combines with ZoomAir in the forefoot, adding the perfect amount of flash to yoursoft, springy ride. The sleek design nods to the sporty Air Maxpantheon while maintaining a boldly fresh and futuristic appearance.",
    rating: 5.0,
  },
  {
    id: 2,
    imgURLs: [shoe5_1, shoe5_2, shoe5_3, shoe5_4],
    productName: "Nike Air Jordan-10",

    price: "$210.20",
    sizes: ["37", "38", "39", "42", "44", "46"],
    description:
      "Upgrade your style with the Nike Air Jordan-10 in various sizes. Step up your game with the Nike Air Jordan-001 in various sizes. PAYING HOMAGE TO ATTITUDE. Celebrating the 25th anniversary of theAir Max 95, the Nike Air Max ZM950 warps the OG's iconic sidepanels, adds fully visible Nike Air cushioning and boasts bold,expressive colours—it's untouchable, confident and tough. BenefitsThe design, inspired by the Air Max 95 with elements symbolising thehuman body, now enters a modern space with distorted lines, bold TPUaccents and lightweight no-sew skins. The bold colours mix edginessand fun. New webbing runs down the sides, adding structure andsupport while creating a distinctly new look. The highlighted Aircushioning in the heel is the same as the 270 and combines with ZoomAir in the forefoot, adding the perfect amount of flash to yoursoft, springy ride.",
    rating: 4.7,
  },
  {
    id: 3,
    imgURLs: [shoe6_1, shoe6_2, shoe6_3, shoe6_4],
    productName: "Nike Air Jordan-100",
    price: "$220.20",
    sizes: ["37", "38", "40", "41", "42", "43", "45"],
    description:
      " PAYING HOMAGE TO ATTITUDE. Celebrating the 25th anniversary of theAir Max 95, the Nike Air Max ZM950 warps the OG's iconic sidepanels, adds fully visible Nike Air cushioning and boasts bold,expressive colours—it's untouchable, confident and tough. BenefitsThe design, inspired by the Air Max 95 with elements symbolising thehuman body, now enters a modern space with distorted lines, bold TPUaccents and lightweight no-sew skins. The bold colours mix edginessand fun. New webbing runs down the sides, adding structure andsupport while creating a distinctly new look. The highlighted Aircushioning in the heel is the same as the 270 and combines with ZoomAir in the forefoot, adding the perfect amount of flash to yoursoft, springy ride. The sleek design nods to the sporty Air Maxpantheon while maintaining a boldly fresh and futuristic appearance.",
    rating: 4.8,
  },
  {
    id: 4,
    imgURLs: [shoe7_1, shoe7_2, shoe7_3, shoe7_4],
    productName: "Nike Air Jordan-001",
    price: "$230.20",
    sizes: ["37", "38", "40", "41", "44", "46"],
    description:
      "Step up your game with the Nike Air Jordan-001 in various sizes. PAYING HOMAGE TO ATTITUDE. Celebrating the 25th anniversary of theAir Max 95, the Nike Air Max ZM950 warps the OG's iconic sidepanels, adds fully visible Nike Air cushioning and boasts bold,expressive colours—it's untouchable, confident and tough. BenefitsThe design, inspired by the Air Max 95 with elements symbolising thehuman body, now enters a modern space with distorted lines, bold TPUaccents and lightweight no-sew skins. The bold colours mix edginessand fun. New webbing runs down the sides, adding structure andsupport while creating a distinctly new look. The highlighted Aircushioning in the heel is the same as the 270 and combines with ZoomAir in the forefoot, adding the perfect amount of flash to yoursoft, springy ride. The sleek design nods to the sporty Air Maxpantheon while maintaining a boldly fresh and futuristic appearance.",
    rating: 4.9,
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
