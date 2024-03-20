import home_1 from '@assets/img/menu/menu-home-1.jpg';
import home_2 from '@assets/img/menu/menu-home-2.jpg';
import home_3 from '@assets/img/menu/menu-home-3.jpg';
import home_4 from '@assets/img/menu/menu-home-4.jpg';

const menu_data = [
  {
    id: 1,
    homes: true,
    title: "Home",
    link: "/",
    home_pages: [
      {
        img: home_1,
        title: "Electronics",
        link: "/",
      },
      {
        img: home_2,
        title: "Fashion",
        link: "/home-2",
      },
      {
        img: home_3,
        title: "Beauty",
        link: "/home-3",
      },
      {
        img: home_4,
        title: "Jewelry",
        link: "/home-4",
      },
    ],
  },
  {
    id: 2,
    products: true,
    title: "Products",
    link: "/shop",
    product_pages: [
      {
        title: "Shop Page",
        link: "/shop",
        mega_menus: [
          { title: "Categories", link: "/shop-category" },
          { title: "Products", link: "/shop" },
        ],
      },
      {
        title: "eCommerce",
        link: "/shop",
        mega_menus: [
          { title: "Shopping Cart", link: "/cart" },
          { title: "Compare", link: "/compare" },
          { title: "Wishlist", link: "/wishlist" },
          { title: "Checkout", link: "/checkout" },
          { title: "My account", link: "/profile" },
        ],
      },
    ],
  },
  {
    id: 3,
    single_link: true,
    title: "Coupons",
    link: "/coupon",
  },
  {
    id: 4,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: true,
    title: "Home",
    link: "/",
    home_pages: [
      {
        img: home_1,
        title: "Electronics",
        link: "/",
      },
      {
        img: home_2,
        title: "Fashion",
        link: "/home-2",
      },
      {
        img: home_3,
        title: "Beauty",
        link: "/home-3",
      },
      {
        img: home_4,
        title: "Jewelry",
        link: "/home-4",
      },
    ],
  },
  {
    id: 2,
    products: true,
    title: "Products",
    link: "/shop",
    product_pages: [
      {
        title: "Shop Page",
        link: "/shop",
        mega_menus: [
          { title: "Categories", link: "/shop-category" },
          { title: "Products", link: "/shop" },
        ],
      },
      {
        title: "eCommerce",
        link: "/shop",
        mega_menus: [
          { title: "Shopping Cart", link: "/cart" },
          { title: "Compare", link: "/compare" },
          { title: "Wishlist", link: "/wishlist" },
          { title: "Checkout", link: "/checkout" },
          { title: "My account", link: "/profile" },
        ],
      },
    ],
  },
  {
    id: 3,
    single_link: true,
    title: "Coupons",
    link: "/coupon",
  },
  {
    id: 4,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];