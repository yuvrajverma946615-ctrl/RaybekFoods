export interface Product {
  name: string;
  description: string;
  category: string;
  sizes: string[];
  ingredients: string[];
  image: string;
  features: {
    glutenFree: boolean;
    fatFree96: boolean;
    foodService: boolean;
    retail: boolean;
  };
}

export const categories = [
  {
    id: "pot-set-greek-yoghurt",
    name: "Pot Set Greek Yoghurt",
    description: "Authentic, thick, and creamy pot-set Greek yoghurt made with the finest Australian milk.",
    image: "https://images.unsplash.com/photo-1550411294-8250085a3630?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "anti-pasto",
    name: "Anti-Pasto Range",
    description: "Premium selection of marinated olives, vegetables, and cheeses for the perfect platter.",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "gourmet-dips",
    name: "Gourmet Dips",
    description: "Freshly crafted dips perfect for entertaining or everyday indulgence.",
    image: "https://images.unsplash.com/photo-1628198754779-7fb674b0ed1c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "sauces",
    name: "Raybek Sauces",
    description: "Artisan sauces, dressings, and crushed ingredients to elevate your culinary creations.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop"
  },

];

export const products: Product[] = [
  {
    "name": "Natural Greek Pot Set Yoghurt",
    "description": "Raybek Foods Natural Greek Potset Yoghurt is traditionally crafted with no added sugar, flavours, or sweeteners, delivering authentic taste and natural goodness in every spoonful.",
    "category": "Pot Set Greek Yoghurt",
    "sizes": [
      "300g",
      "350g",
      "500g",
      "700g",
      "1kg",
      "10kg"
    ],
    "ingredients": [
      "Pasteurised Whole Milk",
      "Live Yoghurt Cultures"
    ],
    "image": "https://www.raybekfoods.com/static/0e2629a92a1dc69cc7c242396f125224/28d2e/151c694a-568f-4c1f-9024-72190d69672b_natural.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Mixed Berry Greek Yoghurt",
    "description": "Thick Greek yoghurt layered with a luscious mixed berry compote.",
    "category": "Pot Set Greek Yoghurt",
    "sizes": [
      "250g",
      "350g",
      "500g",
      "700g",
      "1kg",
      "10kg"
    ],
    "ingredients": [
      "Pasteurised Whole Milk",
      "Mixed Berries",
      "Sugar",
      "Live Yoghurt Cultures"
    ],
    "image": "https://www.raybekfoods.com/static/ffe8af84bf8e44987cbaadb84250cb47/28d2e/9bb02611-3e3f-4221-b6d7-bcb73e00118b_mixed-berry.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Apple Cinnamon Greek Yoghurt",
    "description": "A warming blend of spiced apple and cinnamon folded into thick Greek yoghurt.",
    "category": "Pot Set Greek Yoghurt",
    "sizes": [
      "300g",
      "350g",
      "500g",
      "700g",
      "1kg",
      "10kg"
    ],
    "ingredients": [
      "Pasteurised Whole Milk",
      "Apple",
      "Cinnamon",
      "Sugar",
      "Live Yoghurt Cultures"
    ],
    "image": "https://www.raybekfoods.com/static/b1f511aeecdb3fb8a992bd411ae73d8a/28d2e/e2a551a4-edf9-44cf-bf32-6eaacbafd7b7_apple-cinnamon.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Blueberry Greek Yoghurt",
    "description": "Plump, sweet blueberries mixed through creamy pot-set yoghurt.",
    "category": "Pot Set Greek Yoghurt",
    "sizes": [
      "300g",
      "350g",
      "500g",
      "700g",
      "1kg",
      "10kg"
    ],
    "ingredients": [
      "Pasteurised Whole Milk",
      "Blueberries",
      "Sugar",
      "Live Yoghurt Cultures"
    ],
    "image": "https://www.raybekfoods.com/static/acb34e03054d640ced3ddcdaa1c19f3c/28d2e/de027902-074d-469e-9e36-32915402d751_blueberry.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Passionfruit Greek Yoghurt",
    "description": "Tangy and tropical passionfruit paired with rich Greek yoghurt.",
    "category": "Pot Set Greek Yoghurt",
    "sizes": [
      "300g",
      "350g",
      "500g",
      "700g",
      "1kg",
      "10kg"
    ],
    "ingredients": [
      "Pasteurised Whole Milk",
      "Passionfruit",
      "Sugar",
      "Live Yoghurt Cultures"
    ],
    "image": "https://www.raybekfoods.com/static/1b129e23c1187246ab51dd744d1904f2/28d2e/5c17a981-43ca-43a2-907f-aa6dc778c98b_passionfruit.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Rhubarb & Strawberry Greek Yoghurt",
    "description": "A classic combination of tart rhubarb and sweet strawberries.",
    "category": "Pot Set Greek Yoghurt",
    "sizes": [
      "300g",
      "350g",
      "500g",
      "700g",
      "1kg",
      "10kg"
    ],
    "ingredients": [
      "Pasteurised Whole Milk",
      "Rhubarb",
      "Strawberries",
      "Sugar",
      "Live Yoghurt Cultures"
    ],
    "image": "https://www.raybekfoods.com/static/cb9719872baeb466c97c1a85bad9c316/28d2e/81c109f5-72bd-4258-8486-6da82ebc2585_rhubarb-%26-strawberry.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Mango Greek Yoghurt",
    "description": "Sweet, sun-ripened mango blended with thick pot-set yoghurt.",
    "category": "Pot Set Greek Yoghurt",
    "sizes": [
      "300g",
      "350g",
      "500g",
      "700g",
      "1kg",
      "10kg"
    ],
    "ingredients": [
      "Pasteurised Whole Milk",
      "Mango",
      "Sugar",
      "Live Yoghurt Cultures"
    ],
    "image": "https://www.raybekfoods.com/static/bba5884e8938394b5a77df0849473803/28d2e/cbf04b3a-0448-4970-8ca0-1752ed6b9af0_mango.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Premium Basil Pesto",
    "description": "A rich and vibrant pesto made with fresh basil, parmesan, and pine nuts.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Basil Puree (28%)",
      "Spinach Puree",
      "Parmesan Cheese",
      "Salt",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Canola Oil",
      "Cashew Nuts",
      "Sugar",
      "Garlic"
    ],
    "image": "	https://www.raybekfoods.com/static/Basil-pesto-d6d9a3dcfd4a6d75d03bd10e26838fe2.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Fire Roasted Red Pesto",
    "description": "A robust and smoky pesto made with fire-roasted ingredients.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Pumpkin (41%)",
      "Neufchatel",
      "Sugar",
      "Salt",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Canola Oil",
      "Pepper",
      "Cumin",
      "Mixed Herbs",
      "Chilli",
      "Coriander"
    ],
    "image": "	https://www.raybekfoods.com/static/Fire-red-pesto-952ee93d2f7efc74c46f4de5d5dc49a2.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Beetroot & Feta Pesto",
    "description": "Vibrant and earthy beetroot combined with creamy feta.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Beetroot Puree (60%)",
      "Neufchatel",
      "Danish Fetta",
      "Garlic",
      "Salt",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Canola Oil",
      "Mint",
      "Sugar"
    ],
    "image": "https://www.raybekfoods.com/static/Beetroot-&-Feta-20cc4f955861ece3f3b997bce76bf5fc.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Spinach & Feta Pesto",
    "description": "A classic combination of spinach and feta, perfectly blended into a rich pesto.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Spinach Puree (40%)",
      "Danish Fetta",
      "Neufchatel",
      "Salt",
      "Sugar",
      "Garlic",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Canola Oil",
      "Cashew Nuts"
    ],
    "image": "https://www.raybekfoods.com/static/Spinach-&-Feta-Pesto-43afaffbd2097a564b7b1ac661c11abc.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Qld Blue Pumpkin Pesto",
    "description": "A sweet and savoury pesto featuring Queensland Blue pumpkin.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Pumpkin",
      "Canola Oil",
      "Garlic",
      "Spices",
      "Preservatives"
    ],
    "image": "	https://www.raybekfoods.com/static/Qld-blue-pumpkin-dip-518bd66a898f923e7a3f126d4db0fd2c.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Spring Onion Dip",
    "description": "A creamy and tangy dip with fresh spring onions.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Neufchatel (69%)",
      "Spring Onion",
      "Pepper",
      "Sugar",
      "Garlic",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Canola Oil"
    ],
    "image": "https://www.raybekfoods.com/static/Spring-Onion-Dip-d4e6b20e769e11a80a093471491bec2e.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Roasted Capsicum & Almond Dip",
    "description": "A sweet and nutty blend of roasted capsicums and almonds.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Capsicum (55%)",
      "Almonds",
      "Parmesan",
      "Sun Dried Tomato",
      "Coriander",
      "Salt",
      "Garlic",
      "Sugar",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Pepper",
      "Mixed Herbs",
      "Canola Oil"
    ],
    "image": "https://www.raybekfoods.com/static/Roasted-Capcicum-&-Almond-4517936187ba46fc9572fa8ca25d6e09.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Spicy Coriander Dip",
    "description": "A zesty dip with a kick of spice and fresh coriander.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Coriander",
      "Chilli",
      "Canola Oil",
      "Garlic",
      "Spices"
    ],
    "image": "https://www.raybekfoods.com/static/spicy-coriander-a3feecc1d9195029c3f7973fbf155500.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Bruschetta",
    "description": "A chunky, Mediterranean-inspired vegetable medley.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Eggplant (24%)",
      "Zucchini (24%)",
      "Pumpkin",
      "Sun Dried Tomato",
      "Bell Pepper",
      "Balsamic Onion",
      "Mixed Herbs",
      "Cumin",
      "Coriander Powder",
      "Pepper",
      "Sugar",
      "Salt",
      "Citric Acid",
      "Garlic",
      "Preservative (E202 & 211)",
      "Canola Oil",
      "Cashew Nuts"
    ],
    "image": "	https://www.raybekfoods.com/static/Brucheta-072c1a4c10dd40b4307f652fb0903e13.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Basil, Feta & Semi Dried Tomato",
    "description": "A rich blend of Mediterranean favourites.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Sun Dried Tomato (43%)",
      "Neufchatel",
      "Danish Fetta",
      "Basil",
      "Salt",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Sugar",
      "Canola Oil",
      "Garlic",
      "Mixed Herbs"
    ],
    "image": "https://www.raybekfoods.com/static/Basil-&-Feta-Semi-Dried-Tomato-307e555ebec926912e7a8d0a9d62cbc9.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Baba Ganoush",
    "description": "A creamy and smoky eggplant dip.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Yoghurt (53%)",
      "Tahini",
      "Canola Oil",
      "Sugar",
      "Salt",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Eggplant Pulp",
      "Parsley",
      "Garlic"
    ],
    "image": "https://www.raybekfoods.com/static/Baba-Ganoush-75360fb546a85a99ddd17921888ec33e.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Taramosalata",
    "description": "Traditional Greek caviar style dip.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Caviar",
      "Lemon Juice",
      "Canola Oil",
      "Bread"
    ],
    "image": "https://www.raybekfoods.com/static/Taramosalata-38193a45f2b041e4826df0a9516152f7.png",
    "features": {
      "glutenFree": false,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Traditional Hommus",
    "description": "Smooth and creamy hommus crafted from chickpeas, tahini, and lemon.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Chickpeas (58%)",
      "Tahini",
      "Canola Oil",
      "Cumin",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Salt",
      "Sugar"
    ],
    "image": "https://www.raybekfoods.com/static/Traditional-Hommus-603583498f98a5b36688f42eb7ee6f77.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Tzatziki",
    "description": "Refreshing Greek style dip made with our own pot-set yoghurt, cucumber and garlic.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Yoghurt (78%)",
      "Lebanese Cucumber",
      "Sugar",
      "Salt",
      "Citric Acid",
      "Preservative (E202 & 211)",
      "Garlic",
      "Mint",
      "Canola Oil"
    ],
    "image": "	https://www.raybekfoods.com/static/Tzatziki-7786148f64bc4cf53981f08cab89c56a.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Kalamata Olive Tapenade",
    "description": "A rich and intense tapenade made from premium Kalamata olives.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Kalamata Olives (72%)",
      "Garlic",
      "Mixed Herbs",
      "Salt",
      "Sugar",
      "Citric Acid",
      "Canola Oil"
    ],
    "image": "	https://www.raybekfoods.com/static/olive-tapenade-c345c85ddbe14635d1fe63f3e02c58e4.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "French Onion Dip",
    "description": "A creamy dip with deep caramelised onion flavours.",
    "category": "Gourmet Dips",
    "sizes": [
      "1kg",
      "2kg",
      "5kg",
      "10kg"
    ],
    "ingredients": [
      "Neufchatel (51%)",
      "French Onion Soup Mix",
      "Salt",
      "Sugar",
      "Caramelised Onion Strips",
      "Canola Oil",
      "Citric Acid",
      "Preservative (E202 & 211)"
    ],
    "image": "https://www.raybekfoods.com/static/French-Onion-1385191f02589606a01d4b570e0c4282.png",
    "features": {
      "glutenFree": false,
      "fatFree96": false,
      "foodService": true,
      "retail": false
    }
  },
  {
    "name": "Bell Peppers",
    "description": "Sweet bell peppers hand-stuffed with creamy traditional feta.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Bell Peppers",
      "Feta Cheese",
      "Canola Oil",
      "Herbs"
    ],
    "image": "https://www.raybekfoods.com/static/Bell-Peppers-filled-with-feta-cheese-3f716de640ef0900f26411cb9aa041bc.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Basil & Feta",
    "description": "A harmonious mix of fresh basil and creamy feta cubes.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Feta Cheese",
      "Basil",
      "Canola Oil",
      "Spices"
    ],
    "image": "https://www.raybekfoods.com/static/Basil-&-Fetta-8878e5e03651bf6b09d63ecdf0c31ac7.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Greek Salad Mix",
    "description": "A ready-to-serve mix of traditional Greek salad ingredients.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Olives",
      "Feta",
      "Capsicum",
      "Onion",
      "Canola Oil",
      "Herbs"
    ],
    "image": "https://www.raybekfoods.com/static/greek-salad-mix-a527d8397efcf350a93d690da42b737c.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Semi Dried Tomatoes",
    "description": "Rich, sweet semi-dried tomatoes marinated in a garlic and herb infused oil.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Semi Dried Tomatoes (60%)",
      "Canola Oil",
      "Mixed Herbs",
      "Garlic",
      "Salt"
    ],
    "image": "https://www.raybekfoods.com/static/Semi-dried-tomatoes-47b6a94abfdef7d4dd8b8711e52b23d4.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Mixed Pitted Marinated Olives",
    "description": "A premium blend of Kalamata, Green and Pimento olives marinated in herbs and garlic.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Kalamata Olives Pitted (24%)",
      "Green Olives Pitted (18%)",
      "Pimento Olives (18%)",
      "Mixed Herbs",
      "Garlic",
      "Canola Oil"
    ],
    "image": "https://www.raybekfoods.com/static/Mixed-Pitted-Marinated-Olives-b4424bef625373b0a020b5127ae614cd.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Sicilian Olives",
    "description": "Large, firm, and buttery Sicilian olives in brine.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Sicilian Olives (60%)",
      "Brine",
      "Canola Oil"
    ],
    "image": "https://www.raybekfoods.com/static/Sicilian-Olives-e64943e8ef2cbc3464f4e4e332e1af45.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Sun Dried Kalamata Olives",
    "description": "Unpitted Marinated Sun Dried Kalamata Olives.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Sun Dried Kalamata Olives (60%)",
      "Mixed Herbs",
      "Garlic",
      "Canola Oil"
    ],
    "image": "https://www.raybekfoods.com/static/Sun-Dried-Kalamata-Olives-Unpitted-Marinated-b856e7aa662d5123a0ceac7ca27b18da.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Green Queen Olives",
    "description": "Large Green Queen Olives filled with either Semi Dried Tomatoes, Basil, Feta, Parmesan or Anchovies.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Green Queen Olives",
      "Canola Oil",
      "Various Fillings (Feta/Parmesan/Anchovies/etc)"
    ],
    "image": "https://www.raybekfoods.com/static/Green-Olives-Stuffed-With-Fetta-Cheese-834c02749bbd50093e1e094dad3a17da.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Green Olives",
    "description": "Green Olives with Lemon and Garlic.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Green Olives Unpitted (60%)",
      "Fresh Lemon",
      "Garlic",
      "Canola Oil"
    ],
    "image": "https://www.raybekfoods.com/static/Green-Olives-with-Lemon-&-Garlic-f8fc53e33e42675ef01dee0eb29767a1.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Persian Style Feta",
    "description": "Smooth, creamy Persian style feta marinated in oil and spices.",
    "category": "Anti-Pasto Range",
    "sizes": [
      "250g",
      "2kg"
    ],
    "ingredients": [
      "Danish Fetta (60%)",
      "Mixed Herbs",
      "Chilli",
      "Thyme",
      "Cloves",
      "Pepper",
      "Canola Oil"
    ],
    "image": "https://www.raybekfoods.com/static/Persian-Style-Fetta-Classic-81adac93643cc74cdffc113b7974aca4.png",
    "features": {
      "glutenFree": true,
      "fatFree96": false,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Crushed Chilli",
    "description": "Intense and fiery crushed chilli.",
    "category": "Raybek Sauces",
    "sizes": [
      "300g",
      "Food service sizes available"
    ],
    "ingredients": [
      "Reconstituted Chilli",
      "Potassium Sorbate",
      "Sodium Benzoate",
      "Citric Acid"
    ],
    "image": "https://www.raybekfoods.com/static/chilli-124db3daa5c4d25cd6ca1917959c02db.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Crushed Ginger",
    "description": "Fresh, pungent crushed ginger ready to use.",
    "category": "Raybek Sauces",
    "sizes": [
      "300g",
      "Food service sizes available"
    ],
    "ingredients": [
      "Reconstituted Garlic",
      "Reconstituted Onion",
      "Preservative (330)"
    ],
    "image": "https://www.raybekfoods.com/static/ginger-23f84eb3083b5a5225c5b5360322a92c.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },
  {
    "name": "Crushed Garlic",
    "description": "Pure, premium crushed garlic.",
    "category": "Raybek Sauces",
    "sizes": [
      "300g",
      "Food service sizes available"
    ],
    "ingredients": [
      "Reconstituted Garlic",
      "Reconstituted Onion",
      "Preservative (330)"
    ],
    "image": "https://www.raybekfoods.com/static/garlic-bdb27e55e21c7532ec0fb168ed2cf5cc.png",
    "features": {
      "glutenFree": true,
      "fatFree96": true,
      "foodService": true,
      "retail": true
    }
  },

];
