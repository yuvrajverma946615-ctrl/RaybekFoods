const fs = require('fs');

const products = [
  // Yoghurts
  {
    name: "Natural Greek Pot Set Yoghurt",
    description: "Raybek Foods Natural Greek Potset yoghurt is the raw alternative to the Raybek Foods flagship flavoured Greek Yoghurt. At its natural strained state, Pot set yoghurt boasts substantial health benefits due to the natural production process used and no added flavouring or sweeteners. Raybek Greek Potset Yoghurt portrays the true of meaning of ‘Culture’ by incorporating the traditional methods of production into making such a beautiful and healthy product.\n\nA recipe this good only comes from years of experience!\n\nThe benefits of Potset Yoghurt include:\n- High Source of Protein\n- Great Calcium boost for teeth and bones\n- No added sugar\n- Gluten Free\n- High in B12\n- Great post workout fuel\n- 96% Fat Free\n\nSince being introduced to the market several years ago, the Raybek Natural Potset Yoghurt has gained a large following from the fitness and health food community. Get on board and try it today!",
    category: "Pot Set Greek Yoghurt",
    sizes: ["300g", "350g", "500g", "700g", "1kg", "10kg"],
    ingredients: ["Pasteurised Whole Milk", "Live Yoghurt Cultures"],
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  {
    name: "Mixed Berry Greek Yoghurt",
    description: "Thick Greek yoghurt layered with a luscious mixed berry compote.",
    category: "Pot Set Greek Yoghurt",
    sizes: ["250g", "350g", "500g", "700g", "1kg", "10kg"],
    ingredients: ["Pasteurised Whole Milk", "Mixed Berries", "Sugar", "Live Yoghurt Cultures"],
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  {
    name: "Apple Cinnamon Greek Yoghurt",
    description: "A warming blend of spiced apple and cinnamon folded into thick Greek yoghurt.",
    category: "Pot Set Greek Yoghurt",
    sizes: ["300g", "350g", "500g", "700g", "1kg", "10kg"],
    ingredients: ["Pasteurised Whole Milk", "Apple", "Cinnamon", "Sugar", "Live Yoghurt Cultures"],
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  {
    name: "Blueberry Greek Yoghurt",
    description: "Plump, sweet blueberries mixed through creamy pot-set yoghurt.",
    category: "Pot Set Greek Yoghurt",
    sizes: ["300g", "350g", "500g", "700g", "1kg", "10kg"],
    ingredients: ["Pasteurised Whole Milk", "Blueberries", "Sugar", "Live Yoghurt Cultures"],
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  {
    name: "Passionfruit Greek Yoghurt",
    description: "Tangy and tropical passionfruit paired with rich Greek yoghurt.",
    category: "Pot Set Greek Yoghurt",
    sizes: ["300g", "350g", "500g", "700g", "1kg", "10kg"],
    ingredients: ["Pasteurised Whole Milk", "Passionfruit", "Sugar", "Live Yoghurt Cultures"],
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  {
    name: "Rhubarb & Strawberry Greek Yoghurt",
    description: "A classic combination of tart rhubarb and sweet strawberries.",
    category: "Pot Set Greek Yoghurt",
    sizes: ["300g", "350g", "500g", "700g", "1kg", "10kg"],
    ingredients: ["Pasteurised Whole Milk", "Rhubarb", "Strawberries", "Sugar", "Live Yoghurt Cultures"],
    image: "https://images.unsplash.com/photo-1572969057162-243cefc6235b?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  {
    name: "Mango Greek Yoghurt",
    description: "Sweet, sun-ripened mango blended with thick pot-set yoghurt.",
    category: "Pot Set Greek Yoghurt",
    sizes: ["300g", "350g", "500g", "700g", "1kg", "10kg"],
    ingredients: ["Pasteurised Whole Milk", "Mango", "Sugar", "Live Yoghurt Cultures"],
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  
  // Dips
  {
    name: "Premium Basil Pesto",
    description: "A rich and vibrant pesto made with fresh basil, parmesan, and pine nuts.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Basil Puree (28%)", "Spinach Puree", "Parmesan Cheese", "Salt", "Citric Acid", "Preservative (E202 & 211)", "Canola Oil", "Cashew Nuts", "Sugar", "Garlic"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Fire Roasted Red Pesto",
    description: "A robust and smoky pesto made with fire-roasted ingredients.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Pumpkin (41%)", "Neufchatel", "Sugar", "Salt", "Citric Acid", "Preservative (E202 & 211)", "Canola Oil", "Pepper", "Cumin", "Mixed Herbs", "Chilli", "Coriander"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Beetroot & Feta Pesto",
    description: "Vibrant and earthy beetroot combined with creamy feta.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Beetroot Puree (60%)", "Neufchatel", "Danish Fetta", "Garlic", "Salt", "Citric Acid", "Preservative (E202 & 211)", "Canola Oil", "Mint", "Sugar"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Spinach & Feta Pesto",
    description: "A classic combination of spinach and feta, perfectly blended into a rich pesto.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Spinach Puree (40%)", "Danish Fetta", "Neufchatel", "Salt", "Sugar", "Garlic", "Citric Acid", "Preservative (E202 & 211)", "Canola Oil", "Cashew Nuts"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Qld Blue Pumpkin Pesto",
    description: "A sweet and savoury pesto featuring Queensland Blue pumpkin.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Pumpkin", "Canola Oil", "Garlic", "Spices", "Preservatives"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Spring Onion Dip",
    description: "A creamy and tangy dip with fresh spring onions.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Neufchatel (69%)", "Spring Onion", "Pepper", "Sugar", "Garlic", "Citric Acid", "Preservative (E202 & 211)", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Roasted Capsicum & Almond Dip",
    description: "A sweet and nutty blend of roasted capsicums and almonds.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Capsicum (55%)", "Almonds", "Parmesan", "Sun Dried Tomato", "Coriander", "Salt", "Garlic", "Sugar", "Citric Acid", "Preservative (E202 & 211)", "Pepper", "Mixed Herbs", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Spicy Coriander Dip",
    description: "A zesty dip with a kick of spice and fresh coriander.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Coriander", "Chilli", "Canola Oil", "Garlic", "Spices"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Bruschetta",
    description: "A chunky, Mediterranean-inspired vegetable medley.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Eggplant (24%)", "Zucchini (24%)", "Pumpkin", "Sun Dried Tomato", "Bell Pepper", "Balsamic Onion", "Mixed Herbs", "Cumin", "Coriander Powder", "Pepper", "Sugar", "Salt", "Citric Acid", "Garlic", "Preservative (E202 & 211)", "Canola Oil", "Cashew Nuts"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Basil, Feta & Semi Dried Tomato",
    description: "A rich blend of Mediterranean favourites.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Sun Dried Tomato (43%)", "Neufchatel", "Danish Fetta", "Basil", "Salt", "Citric Acid", "Preservative (E202 & 211)", "Sugar", "Canola Oil", "Garlic", "Mixed Herbs"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Baba Ganoush",
    description: "A creamy and smoky eggplant dip.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Yoghurt (53%)", "Tahini", "Canola Oil", "Sugar", "Salt", "Citric Acid", "Preservative (E202 & 211)", "Eggplant Pulp", "Parsley", "Garlic"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Taramosalata",
    description: "Traditional Greek caviar style dip.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Caviar", "Lemon Juice", "Canola Oil", "Bread"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: false, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Traditional Hommus",
    description: "Smooth and creamy hommus crafted from chickpeas, tahini, and lemon.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Chickpeas (58%)", "Tahini", "Canola Oil", "Cumin", "Citric Acid", "Preservative (E202 & 211)", "Salt", "Sugar"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Tzatziki",
    description: "Refreshing Greek style dip made with our own pot-set yoghurt, cucumber and garlic.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Yoghurt (78%)", "Lebanese Cucumber", "Sugar", "Salt", "Citric Acid", "Preservative (E202 & 211)", "Garlic", "Mint", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Kalamata Olive Tapenade",
    description: "A rich and intense tapenade made from premium Kalamata olives.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Kalamata Olives (72%)", "Garlic", "Mixed Herbs", "Salt", "Sugar", "Citric Acid", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "French Onion Dip",
    description: "A creamy dip with deep caramelised onion flavours.",
    category: "Gourmet Dips",
    sizes: ["1kg", "2kg", "5kg", "10kg"],
    ingredients: ["Neufchatel (51%)", "French Onion Soup Mix", "Salt", "Sugar", "Caramelised Onion Strips", "Canola Oil", "Citric Acid", "Preservative (E202 & 211)"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: false, fatFree96: false, foodService: true, retail: false }
  },
  
  // Anti Pasto
  {
    name: "Bell Peppers",
    description: "Sweet bell peppers hand-stuffed with creamy traditional feta.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Bell Peppers", "Feta Cheese", "Canola Oil", "Herbs"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Basil & Feta",
    description: "A harmonious mix of fresh basil and creamy feta cubes.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Feta Cheese", "Basil", "Canola Oil", "Spices"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Greek Salad Mix",
    description: "A ready-to-serve mix of traditional Greek salad ingredients.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Olives", "Feta", "Capsicum", "Onion", "Canola Oil", "Herbs"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Semi Dried Tomatoes",
    description: "Rich, sweet semi-dried tomatoes marinated in a garlic and herb infused oil.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Semi Dried Tomatoes (60%)", "Canola Oil", "Mixed Herbs", "Garlic", "Salt"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Mixed Pitted Marinated Olives",
    description: "A premium blend of Kalamata, Green and Pimento olives marinated in herbs and garlic.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Kalamata Olives Pitted (24%)", "Green Olives Pitted (18%)", "Pimento Olives (18%)", "Mixed Herbs", "Garlic", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Sicilian Olives",
    description: "Large, firm, and buttery Sicilian olives in brine.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Sicilian Olives (60%)", "Brine", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Sun Dried Kalamata Olives",
    description: "Unpitted Marinated Sun Dried Kalamata Olives.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Sun Dried Kalamata Olives (60%)", "Mixed Herbs", "Garlic", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Green Queen Olives",
    description: "Large Green Queen Olives filled with either Semi Dried Tomatoes, Basil, Feta, Parmesan or Anchovies.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Green Queen Olives", "Canola Oil", "Various Fillings (Feta/Parmesan/Anchovies/etc)"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Green Olives",
    description: "Green Olives with Lemon and Garlic.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Green Olives Unpitted (60%)", "Fresh Lemon", "Garlic", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Persian Style Feta",
    description: "Smooth, creamy Persian style feta marinated in oil and spices.",
    category: "Anti-Pasto Range",
    sizes: ["250g", "2kg"],
    ingredients: ["Danish Fetta (60%)", "Mixed Herbs", "Chilli", "Thyme", "Cloves", "Pepper", "Canola Oil"],
    image: "https://images.unsplash.com/photo-1559564106-444f6f272a2e?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  
  // Sauces
  {
    name: "Crushed Chilli",
    description: "Intense and fiery crushed chilli.",
    category: "Raybek Sauces",
    sizes: ["300g", "Food service sizes available"],
    ingredients: ["Reconstituted Chilli", "Potassium Sorbate", "Sodium Benzoate", "Citric Acid"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  {
    name: "Crushed Ginger",
    description: "Fresh, pungent crushed ginger ready to use.",
    category: "Raybek Sauces",
    sizes: ["300g", "Food service sizes available"],
    ingredients: ["Reconstituted Garlic", "Reconstituted Onion", "Preservative (330)"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  {
    name: "Crushed Garlic",
    description: "Pure, premium crushed garlic.",
    category: "Raybek Sauces",
    sizes: ["300g", "Food service sizes available"],
    ingredients: ["Reconstituted Garlic", "Reconstituted Onion", "Preservative (330)"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: true, foodService: true, retail: true }
  },
  
  // Cheese
  {
    name: "Traditional Feta",
    description: "Crumbly and sharp traditional feta cheese, perfect for salads and baking.",
    category: "Cheese Range",
    sizes: ["200g", "1kg", "4kg", "12kg"],
    ingredients: ["Pasteurised Cow's Milk", "Salt", "Non-Animal Rennet", "Cultures"],
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Shredded Mozzarella",
    description: "Premium melting mozzarella, ideal for pizzas and pastas.",
    category: "Cheese Range",
    sizes: ["2kg", "5kg"],
    ingredients: ["Pasteurised Milk", "Salt", "Starter Cultures", "Non-Animal Rennet", "Anti-caking Agent"],
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: false }
  },
  {
    name: "Halloumi Block",
    description: "Authentic squeaky halloumi, perfect for grilling or frying.",
    category: "Cheese Range",
    sizes: ["250g", "1kg"],
    ingredients: ["Pasteurised Cow, Sheep & Goat Milk", "Salt", "Non-Animal Rennet", "Mint"],
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  
  // Desserts
  {
    name: "Vanilla Rice Pudding",
    description: "Traditional, creamy vanilla rice pudding made to an authentic recipe.",
    category: "Desserts",
    sizes: ["200g", "1kg"],
    ingredients: ["Milk", "Rice", "Sugar", "Vanilla Extract"],
    image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  },
  {
    name: "Choc Moose",
    description: "Rich, airy chocolate mousse crafted with premium cocoa.",
    category: "Desserts",
    sizes: ["150g", "1kg"],
    ingredients: ["Milk", "Cream", "Sugar", "Cocoa Powder"],
    image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=800&auto=format&fit=crop",
    features: { glutenFree: true, fatFree96: false, foodService: true, retail: true }
  }
];

let existingContent = fs.readFileSync('src/data/products.ts', 'utf8');
const exportIndex = existingContent.indexOf('export const products: Product[] = [');

if (exportIndex !== -1) {
  const newContent = existingContent.slice(0, exportIndex) + 'export const products: Product[] = ' + JSON.stringify(products, null, 2) + ';\n';
  fs.writeFileSync('src/data/products.ts', newContent);
  console.log('Successfully updated products.ts');
} else {
  console.error('Could not find export const products in file.');
}
