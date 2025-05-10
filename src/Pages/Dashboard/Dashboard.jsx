import React, { useState } from "react";
import Navbar from "../Component/Navigation-bar/Navigation";
import "./Dashboard.css";
import image from "../../assets/ecomshop.webp";
import contact from "../../assets/contact.avif";
import Jane from "../../assets/Jane Smith.webp";
import John from "../../assets/John Doe.webp";
import Emily from "../../assets/Emily.webp";
import RedHoodie from "../../assets/Red Hoodie.webp";
import RunningShoes from "../../assets/Running Shoes.avif";
import LeatherBag from "../../assets/Leather Bag.webp";
import DenimJacket from "../../assets/Denim Jacket.jpg";
import Sneakers from "../../assets/Sneakers.webp";
import Smartphone from "../../assets/Smartphone.jpg";
import BluetoothHeadphones from "../../assets/Bluetooth Headphones.webp";
import Blender from "../../assets/Blender.jpg";
import MicrowaveOven from "../../assets/Microwave Oven.jpg";


const allProducts = [
  {
    id: 1,
    name: "Red Hoodie",
    price: "$29.99",
    category: "Clothing",
    image: RedHoodie,
  },
  {
    id: 2,
    name: "Running Shoes",
    price: "$49.99",
    category: "Shoes",
    image: RunningShoes,
  },
  {
    id: 3,
    name: "Leather Bag",
    price: "$39.99",
    category: "Accessories",
    image: LeatherBag,
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: "$59.99",
    category: "Clothing",
    image: DenimJacket,
  },
  {
    id: 5,
    name: "Sneakers",
    price: "$44.99",
    category: "Shoes",
    image: Sneakers,
  },
  {
    id: 6,
    name: "Smartphone",
    price: "$299.99",
    category: "Electronics",
    image: Smartphone,
  },
  {
    id: 7,
    name: "Bluetooth Headphones",
    price: "$79.99",
    category: "Electronics",
    image: BluetoothHeadphones,
  },
  {
    id: 8,
    name: "Blender",
    price: "$49.99",
    category: "Kitchen",
    image: Blender,
  },
  {
    id: 9,
    name: "Microwave Oven",
    price: "$129.99",
    category: "Kitchen",
    image: MicrowaveOven,
  },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === filter);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="home-section">
        <div className="hero-container">
          {/* Left Card Content */}
          <div className="hero-left">
            <h1>
              Sale 20% Off <span>On Everything</span>
            </h1>
            <p>
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias.
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>

          {/* Right Image */}
          <div className="hero-right">
            <img src={image} alt="Hero" />
          </div>
        </div>
      </section>

      {/* Other sections */}
      <section className="product-section">
        <h2>Our Products</h2>

        <div className="filter-buttons">
          {[
            "All",
            "Clothing",
            "Shoes",
            "Accessories",
            "Electronics",
            "Kitchen",
          ].map((category) => (
            <button
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))}
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="container">
          <h2>About Us</h2>
          <div className="paragraph">
            <p>
              Welcome to <strong>MyShop</strong>! We're passionate about
              delivering top-quality products and an unforgettable shopping
              experience. Our goal is to provide the best service with a wide
              selection of items at the best prices.
            </p>
            <p>
              Whether you're here for fashion, gadgets, or gifts — we've got
              something for everyone. Customer satisfaction is our top priority!
            </p>
          </div>

          {/* Customer Testimonials Section */}
          <div className="testimonials">
            <h3>What Our Customers Say</h3>
            <div className="testimonial-grid">
              <div className="testimonial-card">
                <img src={John} alt="John Doe" className="customer-avatar" />
                <p>
                  "Amazing service! The products are of great quality, and the
                  delivery was super fast. Highly recommend MyShop!"
                </p>
                <h4>- John Doe</h4>
              </div>
              <div className="testimonial-card">
                <img src={Jane} alt="Jane Smith" className="customer-avatar" />
                <p>
                  "I love shopping here! The prices are unbeatable, and the
                  customer support is excellent."
                </p>
                <h4>- Jane Smith</h4>
              </div>
              <div className="testimonial-card">
                <img
                  src={Emily}
                  alt="Emily Johnson"
                  className="customer-avatar"
                />
                <p>
                  "A fantastic shopping experience. I found everything I needed
                  and more. Will definitely shop again!"
                </p>
                <h4>- Emily Johnson</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            {/* left Side: Image */}
            <div className="contact-image">
              <img src={contact} alt="Contact Us" />
            </div>

            {/* right Side: Contact Form */}
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>MyShop</h3>
            <p>
              Your one-stop shop for quality<br></br> products and amazing
              deals.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>Email: support@myshop.com</p>
            <p>Phone: +1 (234) 567-8901</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 MyShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
