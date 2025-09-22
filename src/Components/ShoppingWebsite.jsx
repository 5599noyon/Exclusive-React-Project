import Arrival1 from "../assets/arrival1.svg"
import arrival2 from "../assets/arrival2.svg"
import arrival3 from "../assets/arrival3.svg"
import arrival4 from "../assets/arrival4.svg"
import React, { useState, useEffect } from 'react';
import { Heart, Eye, ShoppingCart, Star, Truck, Headphones, Shield, ArrowLeft, ArrowRight } from 'lucide-react';

const ShoppingWebsite = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          // Timer ended
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Product data based on the images
  const featuredProducts = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop&crop=center",
      isNew: false
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4.0,
      reviews: 75,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop&crop=center",
      isNew: false
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.8,
      reviews: 99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop&crop=center",
      isNew: false
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.7,
      reviews: 99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&crop=center",
      isNew: false
    }
  ];

  const bestSellingProducts = [
    {
      id: 5,
      name: "The north coat",
      price: 260,
      originalPrice: 360,
      rating: 4.5,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 6,
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      rating: 4.5,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 7,
      name: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      rating: 4.5,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 8,
      name: "Small BookShelf",
      price: 360,
      rating: 4.5,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&crop=center",
    }
  ];

  const exploreProducts = [
    {
      id: 9,
      name: "Breed Dry Dog Food",
      price: 100,
      rating: 3.0,
      reviews: 35,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 10,
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: 4.0,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 11,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5.0,
      reviews: 325,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 12,
      name: "Curology Product Set",
      price: 500,
      rating: 4.0,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop&crop=center",
    }
  ];

  const categories = [
    { name: "Phones", icon: "📱" },
    { name: "Computers", icon: "💻" },
    { name: "SmartWatch", icon: "⌚" },
    { name: "Camera", icon: "📷" },
    { name: "HeadPhones", icon: "🎧" },
    { name: "Gaming", icon: "🎮" }
  ];

  const newArrivals = [
    {
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop&crop=center",
      cta: "Shop Now"
    },
    {
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6583955?w=400&h=300&fit=crop&crop=center",
      cta: "Shop Now"
    },
    {
      title: "Speakers",
      description: "Amazon wireless speakers",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=200&h=200&fit=crop&crop=center",
      cta: "Shop Now"
    },
    {
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&crop=center",
      cta: "Shop Now"
    }
  ];

  const ProductCard = ({ product, showDiscount = false }) => (
    <div className="bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 group overflow-hidden">
      <div className="relative">
        {/* Discount Badge */}
        {showDiscount && product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm rounded z-10">
            -{product.discount}%
          </span>
        )}
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button className="w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </button>
        </div>
        
        {/* Product Image */}
        <div className="bg-gray-100 h-60 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Add to Cart Button */}
        <button className="absolute bottom-0 left-0 px-[63.3px]  bg-black text-white py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add To Card
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-center text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-red-500 font-semibold text-lg">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 pl-[63px] line-through text-sm">${product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-20">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen container bg-white">

      {/* Featured Products Section */}
      <section className="container py-16">
        <div className="flex items-center justify-between gap-180 pb-10">
          <div>
            <div className="flex items-center gap-4 pb-4 translate-x-[-12px] ">
              <div className="w-8 h-12 bg-red-500 rounded-sm mr-2 "></div>
              <span className="text-red-500 font-semibold text-lg translate-x-[-25px] ">Today's</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Flash Sales</h2>
          </div>
          <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors font-medium">
            View All Products
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showDiscount={true} />
          ))}
        </div>
      </section>

      {/* Divider Line */}
      <div className="">
        <hr className="border-gray-200" />
      </div>

      {/* Categories Section */}
      <section className="pt-[50px] pb-[60px] ">
        <div className="flex items-center gap-[650px] justify-between pb-10">
          <div>
            <div className="flex items-center gap-4 pb-4 translate-x-[-50px] ">
              <div className="w-8 h-12 bg-red-500 rounded-sm"></div>
              <span className="text-red-500 font-semibold text-lg translate-x-[-100px] ">Categories</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Browse By Category</h2>
          </div>
          <div className="flex gap-5">
            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`border-2 rounded-md p-8 text-center cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500 ${
                activeCategory === index ? 'bg-red-500 text-white border-red-500' : 'border-gray-200'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <div className="font-medium text-lg">{category.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider Line */}
      <div className="container mx-auto max-w-7xl px-4">
        <hr className="border-gray-200" />
      </div>

      {/* Best Selling Products */}
      <section className=" pt-[90px] pb-[90px] ">
        <div className="flex items-center gap-[650px] justify-between pb-10">
          <div >
            <div className="flex items-center gap-4 pb-4 translate-x-[-49px] ">
              <div className="w-8 h-12 bg-red-500 rounded-sm"></div>
              <span className="text-red-500 font-semibold text-lg translate-x-[-100px] ">This Month</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Best Selling Products</h2>
          </div>
          <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Music Experience Banner */}
      <section className="">
        <div className=" musicbg ">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
            <div className="p-12 lg:p-16">
              <div className="text-green-400 font-semibold pb-4">Categories</div>
              <h2 className="text-4xl text-white lg:text-5xl font-bold pb-8 leading-tight">
                Enhance Your<br />Music Experience
              </h2>
              <div className="flex flex-wrap gap-4 pb-10">
                <div className="bg-white text-black rounded-full w-20 h-20 flex flex-col items-center justify-center">
                  <div className="font-bold text-xl">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-xs font-medium">Days</div>
                </div>
                <div className="bg-white text-black rounded-full w-20 h-20 flex flex-col items-center justify-center">
                  <div className="font-bold text-xl">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs font-medium">Hours</div>
                </div>
                <div className="bg-white text-black rounded-full w-20 h-20 flex flex-col items-center justify-center">
                  <div className="font-bold text-xl">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs font-medium">Minutes</div>
                </div>
                <div className="bg-white text-black rounded-full w-20 h-20 flex flex-col items-center justify-center">
                  <div className="font-bold text-xl">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs font-medium">Seconds</div>
                </div>
              </div>
              <button className="bg-green-500 text-white px-10 py-4 rounded-md hover:bg-green-600 transition-colors font-semibold text-lg">
                Buy Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className=" pt-[96px] pb-[70px] ">
        <div className="flex items-center gap-[660px] justify-between pb-10">
          <div>
            <div className="flex items-center gap-4 pb-4 translate-x-[-43px] ">
              <div className="w-8 h-12 bg-red-500 rounded-sm"></div>
              <span className="text-red-500 font-semibold text-lg translate-x-[-100px] ">Our Products</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Explore Our Products</h2>
          </div>
          <div className="flex gap-5">
            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12  rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {exploreProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Arrival */}
      <section className=" pt-[90px] pb-[70px] ">
        <div className="pb-10">
          <div className="flex items-center gap-4 pb-4 translate-x-[-200px] ">
            <div className="w-8 h-12 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 translate-x-[-580px] font-semibold text-lg">Featured</span>
          </div>
          <h2 className="text-4xl font-bold translate-x-[100px] text-gray-900">New Arrival</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25">
          {/* PlayStation 5 */}
          <div className="bg-black text-white rounded-lg p-10 relative overflow-hidden min-h-96">
            <img 
              src={Arrival1}
              alt="PlayStation 5"
              className="absolute right-0 top-0 w-full h-full object-cover opacity-60"
            />
            <div className="relative z-10 max-w-xs">
              <h3 className="text-3xl font-bold pb-4">{newArrivals[0].title}</h3>
              <p className="pb-6 text-gray-300 leading-relaxed">{newArrivals[0].description}</p>
              <button className="text-white underline hover:no-underline font-medium">{newArrivals[0].cta}</button>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-8">
            {/* Women's Collections */}
            <div className="bg-black text-white rounded-lg p-8 relative overflow-hidden min-h-48">
              <img 
                src={arrival2}
                alt="Women's Collection"
                className="absolute right-0 top-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 max-w-xs">
                <h3 className="text-2xl font-bold pb-3">{newArrivals[1].title}</h3>
                <p className="pb-4 text-gray-300 text-sm leading-relaxed">{newArrivals[1].description}</p>
                <button className="text-white underline hover:no-underline font-medium">{newArrivals[1].cta}</button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-[50px] ">
              {/* Speakers */}
              <div className="bg-black text-white rounded-lg p-6 relative overflow-hidden min-h-48">
                <img 
                  src={arrival3}
                  alt="Speakers"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10">
                  <h3 className="font-bold pb-2 text-lg">{newArrivals[2].title}</h3>
                  <p className="pb-4 text-gray-300 text-sm">{newArrivals[2].description}</p>
                  <button className="text-white underline hover:no-underline text-sm font-medium">{newArrivals[2].cta}</button>
                </div>
              </div>
              
              {/* Perfume */}
              <div className="bg-black text-white rounded-lg p-6 relative overflow-hidden min-h-48">
                <img 
                  src={arrival4}
                  alt="Perfume"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10">
                  <h3 className="font-bold pb-2 text-lg">{newArrivals[3].title}</h3>
                  <p className="pb-4 text-gray-300 text-sm">{newArrivals[3].description}</p>
                  <button className="text-white underline hover:no-underline text-sm font-medium">{newArrivals[3].cta}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-gray-800 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto translate-y-[-20px] ">
              <Truck className="w-10 h-10 " />
            </div>
            <h3 className="font-bold text-xl pb-3">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-800 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 translate-y-[-20px] ">
              <Headphones className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl pb-3">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-800 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 translate-y-[-20px] ">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl pb-3">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ShoppingWebsite;