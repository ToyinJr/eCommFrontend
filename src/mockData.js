const products = [
  {
    id: 1,
    name: "Laptops",
    price: "₦525,000",
    img: "https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₦149,000",
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Headphones",
    price: "₦120,000",
    img: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZCUyMHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Earbuds",
    price: "₦60,000",
    img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Phone",
    price: "₦825,000",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Keyboard",
    price: "₦8,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Printer",
    price: "₦88,000",
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "GPU",
    price: "₦8,000",
    img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3B1fGVufDB8fDB8fHww",
  },
  {
    id: 9,
    name: "Server",
    price: "₦800,000",
    img: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNlcnZlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    name: "Hard Drive",
    price: "₦58,000",
    img: "https://images.unsplash.com/photo-1624895608078-e9f564cbe3fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhcmQlMjBkcml2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    name: "Ipad",
    price: "₦132,000",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGlwYWR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    name: "Mouse",
    price: "₦8,000",
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91c2V8ZW58MHx8MHx8fDA%3D",
  },
];

const categories = [
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
    main: "Laptops",
    sub1: "Home / Everyday",
    sub2: "Gaming",
    sub3: "Business",
  },

  {
    id: 14,
    image: "https://images.unsplash.com/photo-1660855551740-4474188debdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNwdXxlbnwwfHwwfHx8MA%3D%3D",
    main: "PCs",
    sub1: "Gaming",
    sub2: "Business",
    sub3: "All in One",
  },

  {
    id: 15,
    image: "https://plus.unsplash.com/premium_photo-1680721575441-18d5a0567269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    main: "Monitors",
    sub1: "144 Hz",
    sub2: '27"',
    sub3: "Gaming",
  },

  {
    id: 16,
    image: "https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
    main: "Tablets",
    sub1: "iPad",
    sub2: "Android",
    sub3: "Samsung",
  },

  {
    id: 17,
    image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXBob25lfGVufDB8fDB8fHww",
    main: "Mobile Phones",
    sub1: "iPhone",
    sub2: "Android",
    sub3: "Refurbished",
  },

  {
    id: 18,
    image: "https://images.unsplash.com/photo-1596207891316-23851be3cc20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaCUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
    main: "Accessories",
    sub1: "Laptop Bags",
    sub2: "Software",
    sub3: "Mice",
  },

  {
    id: 19,
    image: "https://images.unsplash.com/photo-1515940175183-6798529cb860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    main: "Mobile Accessories",
    sub1: "Headphones",
    sub2: "Portable Speakers",
    sub3: "Cases & Protection",
  },

  {
    id: 20,
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNlcnZlcnN8ZW58MHx8MHx8fDA%3D",
    main: "Servers & Networking",
    sub1: "Servers",
    sub2: "Networking",
    sub3: "Accessories",
  },

  {
    id: 21,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtfGVufDB8fDB8fHww",
    main: "Components",
    sub1: "Memory",
    sub2: "Storage",
    sub3: "Graphics Cards",
  },

  {
    id: 22,
    image: "https://images.unsplash.com/photo-1650094980833-7373de26feb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
    main: "Printing",
    sub1: "Printers",
    sub2: "Scanners",
    sub3: "Inks & Accessories",
  },
];

const genProducts = [
  {
    id: 23,
    img: "https://www.laptopsdirect.co.uk/Images/82YU00JYUK_1_15087915_15058635_15058635_Classic.jpg?v=11",
    prod: "Generic Laptop 1", 
    price: "₦550,000",
    category: "laptop",
  },

   {
    id: 24,
    img: "https://www.laptopsdirect.co.uk/Images/NX.J7WEK.01J_1_Classic.jpg?v=17",
    prod: "Generic Laptop 2", 
    price: "₦300,000",
    category: "laptop",
  },

   {
    id:25,
    img: "https://www.laptopsdirect.co.uk/Images/MHFF4BA_1_Classic.jpg?v=1",
    prod: "Generic Laptop 3", 
    price: "",
    category: "laptop",
  },

   {
    id: 26,
    img: "https://www.laptopsdirect.co.uk/Images/NP754XGK-KG1UK_1_14228320_Classic.png?v=7",
    prod: "Generic Laptop 4", 
    price: "₦300,000",
    category: "laptop",
  },

   {
    id: 27,
    img: "https://www.laptopsdirect.co.uk/Images/30042473_1_17433108_Classic.png?v=62",
    prod: "Generic Laptop 5", 
    price: "₦490,000",
    category: "laptop",
  },

   {
    id: 28,
    img: "https://www.laptopsdirect.co.uk/Images/623W1ET_1_Classic.png?v=5",
    prod: "Generic PC 1", 
    price: "₦300,000",
    category: "pc",
  },

   {
    id: 29,
    img: "https://www.laptopsdirect.co.uk/Images/791079831LD22247_1_Classic.png?v=10",
    prod: "Generic PC 2", 
    price: "₦900,000",
    category: "pc",
  },

   {
    id: 30,
    img: "https://www.laptopsdirect.co.uk/Images/10026056_1_Classic.png?v=7",
    prod: "Generic PC 3", 
    price: "₦400,000",
    category: "pc",
  },

   {
    id: 31,
    img: "https://www.laptopsdirect.co.uk/Images/LD22237_1_Classic.png?v=19",
    prod: "Generic PC 4", 
    price: "₦500,000",
    category: "pc",
  },

   {
    id: 32,
    img: "https://www.laptopsdirect.co.uk/Images/7873-1454_1_Classic.png?v=5",
    prod: "Generic PC 5", 
    price: "₦310,000",
    category: "pc",
  },

   {
    id: 33,
    img: "https://www.laptopsdirect.co.uk/Images/PRO%20MP223%20E2_1_Classic.png?v=5",
    prod: "Generic Monitor 1", 
    price: "₦300,000",
    category: "monitor",
  },

   {
    id: 34,
    img: "https://www.laptopsdirect.co.uk/Images/9S6-3CE41H-011_1_Classic.png?v=30",
    prod: "Generic Monitor 2", 
    price: "₦300,000",
    category: "monitor",
  },

   {
    id: 35,
    img: "https://www.laptopsdirect.co.uk/Images/32GX870A-B.AEK_1_Classic.png?v=5",
    prod: "Generic Monitor 3", 
    price: "₦340,000",
    category: "monitor",
  },

   {
    id: 36,
    img: "https://www.laptopsdirect.co.uk/Images/45GX950A-B.AEK_1_Classic.jpg?v=25",
    prod: "Generic Monitor 4", 
    price: "₦300,000",
    category: "mmonitor",
  },

   {
    id: 37,
    img: "https://www.laptopsdirect.co.uk/Images/LS24D360GAUXXU_1_Classic.png?v=5",
    prod: "Generic Monitor 5", 
    price: "₦300,000",
    category: "monitor",
  },
]

export { products, categories, genProducts };