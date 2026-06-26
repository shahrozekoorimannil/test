
export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  description: string;
  variants: { id: string; title: string; color: string; sweepSize: string | null; price: number; inventoryQuantity: number }[];
  specifications: { name: string; value: string }[];
  faqs: { question: string; answer: string }[];
};

export const dummyProducts: Product[] = [
  {
    "id": "prod-smart-bldc fans-1",
    "name": "Crompton Smart Fan Series 1",
    "slug": "crompton-smart-fan-series-1",
    "brand": "Crompton",
    "category": "Smart BLDC Fans",
    "price": 3515,
    "compareAtPrice": 4453,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 115,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 1. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-1-0",
        "title": "Crompton Smart Fan Series 1 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": "1200mm",
        "price": 3515,
        "inventoryQuantity": 30
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-2",
    "name": "Volaris Smart Fan Series 2",
    "slug": "volaris-smart-fan-series-2",
    "brand": "Volaris",
    "category": "Smart BLDC Fans",
    "price": 4026,
    "compareAtPrice": 5764,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 424,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Smart Fan Series 2. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-smart-fan-series-2-0",
        "title": "Volaris Smart Fan Series 2 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 4026,
        "inventoryQuantity": 87
      },
      {
        "id": "v-volaris-smart-fan-series-2-1",
        "title": "Volaris Smart Fan Series 2 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": "1400mm",
        "price": 4526,
        "inventoryQuantity": 35
      },
      {
        "id": "v-volaris-smart-fan-series-2-2",
        "title": "Volaris Smart Fan Series 2 - Variant 3",
        "color": "Rose Gold",
        "sweepSize": "1400mm",
        "price": 5026,
        "inventoryQuantity": 73
      },
      {
        "id": "v-volaris-smart-fan-series-2-3",
        "title": "Volaris Smart Fan Series 2 - Variant 4",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 5526,
        "inventoryQuantity": 79
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-3",
    "name": "Volaris Smart Fan Series 3",
    "slug": "volaris-smart-fan-series-3",
    "brand": "Volaris",
    "category": "Smart BLDC Fans",
    "price": 5742,
    "compareAtPrice": 7139,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.8,
    "reviews": 249,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Smart Fan Series 3. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-smart-fan-series-3-0",
        "title": "Volaris Smart Fan Series 3 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 5742,
        "inventoryQuantity": 81
      },
      {
        "id": "v-volaris-smart-fan-series-3-1",
        "title": "Volaris Smart Fan Series 3 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 6242,
        "inventoryQuantity": 27
      },
      {
        "id": "v-volaris-smart-fan-series-3-2",
        "title": "Volaris Smart Fan Series 3 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": "1400mm",
        "price": 6742,
        "inventoryQuantity": 43
      },
      {
        "id": "v-volaris-smart-fan-series-3-3",
        "title": "Volaris Smart Fan Series 3 - Variant 4",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 7242,
        "inventoryQuantity": 34
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-4",
    "name": "Crompton Smart Fan Series 4",
    "slug": "crompton-smart-fan-series-4",
    "brand": "Crompton",
    "category": "Smart BLDC Fans",
    "price": 3004,
    "compareAtPrice": 4830,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.2,
    "reviews": 138,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 4. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-4-0",
        "title": "Crompton Smart Fan Series 4 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 3004,
        "inventoryQuantity": 27
      },
      {
        "id": "v-crompton-smart-fan-series-4-1",
        "title": "Crompton Smart Fan Series 4 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": "1200mm",
        "price": 3504,
        "inventoryQuantity": 30
      },
      {
        "id": "v-crompton-smart-fan-series-4-2",
        "title": "Crompton Smart Fan Series 4 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": "900mm",
        "price": 4004,
        "inventoryQuantity": 61
      },
      {
        "id": "v-crompton-smart-fan-series-4-3",
        "title": "Crompton Smart Fan Series 4 - Variant 4",
        "color": "Antique Brass",
        "sweepSize": "1400mm",
        "price": 4504,
        "inventoryQuantity": 15
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-5",
    "name": "Volaris Smart Fan Series 5",
    "slug": "volaris-smart-fan-series-5",
    "brand": "Volaris",
    "category": "Smart BLDC Fans",
    "price": 3530,
    "compareAtPrice": 4999,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.3,
    "reviews": 76,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Smart Fan Series 5. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-smart-fan-series-5-0",
        "title": "Volaris Smart Fan Series 5 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 3530,
        "inventoryQuantity": 63
      },
      {
        "id": "v-volaris-smart-fan-series-5-1",
        "title": "Volaris Smart Fan Series 5 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": "900mm",
        "price": 4030,
        "inventoryQuantity": 95
      },
      {
        "id": "v-volaris-smart-fan-series-5-2",
        "title": "Volaris Smart Fan Series 5 - Variant 3",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 4530,
        "inventoryQuantity": 56
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-6",
    "name": "Havells Smart Fan Series 6",
    "slug": "havells-smart-fan-series-6",
    "brand": "Havells",
    "category": "Smart BLDC Fans",
    "price": 5859,
    "compareAtPrice": 6617,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 428,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Havells Smart Fan Series 6. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-havells-smart-fan-series-6-0",
        "title": "Havells Smart Fan Series 6 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "1400mm",
        "price": 5859,
        "inventoryQuantity": 100
      },
      {
        "id": "v-havells-smart-fan-series-6-1",
        "title": "Havells Smart Fan Series 6 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": "1200mm",
        "price": 6359,
        "inventoryQuantity": 27
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Havells"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-7",
    "name": "Crompton Smart Fan Series 7",
    "slug": "crompton-smart-fan-series-7",
    "brand": "Crompton",
    "category": "Smart BLDC Fans",
    "price": 4723,
    "compareAtPrice": 5754,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 14,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 7. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-7-0",
        "title": "Crompton Smart Fan Series 7 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": "1400mm",
        "price": 4723,
        "inventoryQuantity": 60
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-8",
    "name": "V-Guard Smart Fan Series 8",
    "slug": "v-guard-smart-fan-series-8",
    "brand": "V-Guard",
    "category": "Smart BLDC Fans",
    "price": 5880,
    "compareAtPrice": 6617,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.1,
    "reviews": 46,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Smart Fan Series 8. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-smart-fan-series-8-0",
        "title": "V-Guard Smart Fan Series 8 - Variant 1",
        "color": "Matte Black",
        "sweepSize": "900mm",
        "price": 5880,
        "inventoryQuantity": 71
      },
      {
        "id": "v-v-guard-smart-fan-series-8-1",
        "title": "V-Guard Smart Fan Series 8 - Variant 2",
        "color": "Matte Black",
        "sweepSize": "900mm",
        "price": 6380,
        "inventoryQuantity": 27
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-9",
    "name": "Atomberg Smart Fan Series 9",
    "slug": "atomberg-smart-fan-series-9",
    "brand": "Atomberg",
    "category": "Smart BLDC Fans",
    "price": 3530,
    "compareAtPrice": 4118,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4,
    "reviews": 195,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Atomberg Smart Fan Series 9. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-atomberg-smart-fan-series-9-0",
        "title": "Atomberg Smart Fan Series 9 - Variant 1",
        "color": "Matte Black",
        "sweepSize": "1400mm",
        "price": 3530,
        "inventoryQuantity": 59
      },
      {
        "id": "v-atomberg-smart-fan-series-9-1",
        "title": "Atomberg Smart Fan Series 9 - Variant 2",
        "color": "Matte Black",
        "sweepSize": "1200mm",
        "price": 4030,
        "inventoryQuantity": 35
      },
      {
        "id": "v-atomberg-smart-fan-series-9-2",
        "title": "Atomberg Smart Fan Series 9 - Variant 3",
        "color": "Pearl White",
        "sweepSize": "900mm",
        "price": 4530,
        "inventoryQuantity": 87
      },
      {
        "id": "v-atomberg-smart-fan-series-9-3",
        "title": "Atomberg Smart Fan Series 9 - Variant 4",
        "color": "Pearl White",
        "sweepSize": "1200mm",
        "price": 5030,
        "inventoryQuantity": 28
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Atomberg"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-10",
    "name": "V-Guard Smart Fan Series 10",
    "slug": "v-guard-smart-fan-series-10",
    "brand": "V-Guard",
    "category": "Smart BLDC Fans",
    "price": 4701,
    "compareAtPrice": 6274,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.9,
    "reviews": 415,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the V-Guard Smart Fan Series 10. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-smart-fan-series-10-0",
        "title": "V-Guard Smart Fan Series 10 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": "1400mm",
        "price": 4701,
        "inventoryQuantity": 34
      },
      {
        "id": "v-v-guard-smart-fan-series-10-1",
        "title": "V-Guard Smart Fan Series 10 - Variant 2",
        "color": "Matte Black",
        "sweepSize": "900mm",
        "price": 5201,
        "inventoryQuantity": 45
      },
      {
        "id": "v-v-guard-smart-fan-series-10-2",
        "title": "V-Guard Smart Fan Series 10 - Variant 3",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 5701,
        "inventoryQuantity": 68
      },
      {
        "id": "v-v-guard-smart-fan-series-10-3",
        "title": "V-Guard Smart Fan Series 10 - Variant 4",
        "color": "Matte Black",
        "sweepSize": "900mm",
        "price": 6201,
        "inventoryQuantity": 63
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-11",
    "name": "Atomberg Smart Fan Series 11",
    "slug": "atomberg-smart-fan-series-11",
    "brand": "Atomberg",
    "category": "Smart BLDC Fans",
    "price": 4611,
    "compareAtPrice": 5121,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.2,
    "reviews": 210,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Atomberg Smart Fan Series 11. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-atomberg-smart-fan-series-11-0",
        "title": "Atomberg Smart Fan Series 11 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 4611,
        "inventoryQuantity": 67
      },
      {
        "id": "v-atomberg-smart-fan-series-11-1",
        "title": "Atomberg Smart Fan Series 11 - Variant 2",
        "color": "Matte Black",
        "sweepSize": "1400mm",
        "price": 5111,
        "inventoryQuantity": 16
      },
      {
        "id": "v-atomberg-smart-fan-series-11-2",
        "title": "Atomberg Smart Fan Series 11 - Variant 3",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 5611,
        "inventoryQuantity": 83
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Atomberg"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-12",
    "name": "Havells Smart Fan Series 12",
    "slug": "havells-smart-fan-series-12",
    "brand": "Havells",
    "category": "Smart BLDC Fans",
    "price": 4461,
    "compareAtPrice": 6423,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.2,
    "reviews": 146,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Havells Smart Fan Series 12. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-havells-smart-fan-series-12-0",
        "title": "Havells Smart Fan Series 12 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "900mm",
        "price": 4461,
        "inventoryQuantity": 56
      },
      {
        "id": "v-havells-smart-fan-series-12-1",
        "title": "Havells Smart Fan Series 12 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": "1400mm",
        "price": 4961,
        "inventoryQuantity": 40
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Havells"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-13",
    "name": "Atomberg Smart Fan Series 13",
    "slug": "atomberg-smart-fan-series-13",
    "brand": "Atomberg",
    "category": "Smart BLDC Fans",
    "price": 4060,
    "compareAtPrice": 5274,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.5,
    "reviews": 371,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Atomberg Smart Fan Series 13. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-atomberg-smart-fan-series-13-0",
        "title": "Atomberg Smart Fan Series 13 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 4060,
        "inventoryQuantity": 81
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Atomberg"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-14",
    "name": "Havells Smart Fan Series 14",
    "slug": "havells-smart-fan-series-14",
    "brand": "Havells",
    "category": "Smart BLDC Fans",
    "price": 4675,
    "compareAtPrice": 6013,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 279,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Havells Smart Fan Series 14. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-havells-smart-fan-series-14-0",
        "title": "Havells Smart Fan Series 14 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "1400mm",
        "price": 4675,
        "inventoryQuantity": 50
      },
      {
        "id": "v-havells-smart-fan-series-14-1",
        "title": "Havells Smart Fan Series 14 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 5175,
        "inventoryQuantity": 48
      },
      {
        "id": "v-havells-smart-fan-series-14-2",
        "title": "Havells Smart Fan Series 14 - Variant 3",
        "color": "Pearl White",
        "sweepSize": "1200mm",
        "price": 5675,
        "inventoryQuantity": 26
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Havells"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-15",
    "name": "AO Smith Smart Fan Series 15",
    "slug": "ao-smith-smart-fan-series-15",
    "brand": "AO Smith",
    "category": "Smart BLDC Fans",
    "price": 5201,
    "compareAtPrice": 6918,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.6,
    "reviews": 310,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Smart Fan Series 15. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-smart-fan-series-15-0",
        "title": "AO Smith Smart Fan Series 15 - Variant 1",
        "color": "Matte Black",
        "sweepSize": "1200mm",
        "price": 5201,
        "inventoryQuantity": 33
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-16",
    "name": "Volaris Smart Fan Series 16",
    "slug": "volaris-smart-fan-series-16",
    "brand": "Volaris",
    "category": "Smart BLDC Fans",
    "price": 3860,
    "compareAtPrice": 4944,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.7,
    "reviews": 182,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Smart Fan Series 16. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-smart-fan-series-16-0",
        "title": "Volaris Smart Fan Series 16 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "1400mm",
        "price": 3860,
        "inventoryQuantity": 35
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-17",
    "name": "Crompton Smart Fan Series 17",
    "slug": "crompton-smart-fan-series-17",
    "brand": "Crompton",
    "category": "Smart BLDC Fans",
    "price": 5685,
    "compareAtPrice": 7055,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.7,
    "reviews": 368,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 17. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-17-0",
        "title": "Crompton Smart Fan Series 17 - Variant 1",
        "color": "Matte Black",
        "sweepSize": "1400mm",
        "price": 5685,
        "inventoryQuantity": 61
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-18",
    "name": "Volaris Smart Fan Series 18",
    "slug": "volaris-smart-fan-series-18",
    "brand": "Volaris",
    "category": "Smart BLDC Fans",
    "price": 4008,
    "compareAtPrice": 4589,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.6,
    "reviews": 222,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Volaris Smart Fan Series 18. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-smart-fan-series-18-0",
        "title": "Volaris Smart Fan Series 18 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "1400mm",
        "price": 4008,
        "inventoryQuantity": 35
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-19",
    "name": "Crompton Smart Fan Series 19",
    "slug": "crompton-smart-fan-series-19",
    "brand": "Crompton",
    "category": "Smart BLDC Fans",
    "price": 4972,
    "compareAtPrice": 6500,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.5,
    "reviews": 331,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 19. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-19-0",
        "title": "Crompton Smart Fan Series 19 - Variant 1",
        "color": "Matte Black",
        "sweepSize": "1200mm",
        "price": 4972,
        "inventoryQuantity": 87
      },
      {
        "id": "v-crompton-smart-fan-series-19-1",
        "title": "Crompton Smart Fan Series 19 - Variant 2",
        "color": "Pearl White",
        "sweepSize": "1400mm",
        "price": 5472,
        "inventoryQuantity": 47
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-smart-bldc fans-20",
    "name": "V-Guard Smart Fan Series 20",
    "slug": "v-guard-smart-fan-series-20",
    "brand": "V-Guard",
    "category": "Smart BLDC Fans",
    "price": 3750,
    "compareAtPrice": 5584,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 310,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Smart Fan Series 20. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-smart-fan-series-20-0",
        "title": "V-Guard Smart Fan Series 20 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "1400mm",
        "price": 3750,
        "inventoryQuantity": 51
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-1",
    "name": "AO Smith Smart Fan Series 1",
    "slug": "ao-smith-smart-fan-series-1",
    "brand": "AO Smith",
    "category": "Designer Fans",
    "price": 11769,
    "compareAtPrice": 13736,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.4,
    "reviews": 493,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Smart Fan Series 1. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-smart-fan-series-1-0",
        "title": "AO Smith Smart Fan Series 1 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "1400mm",
        "price": 11769,
        "inventoryQuantity": 86
      },
      {
        "id": "v-ao-smith-smart-fan-series-1-1",
        "title": "AO Smith Smart Fan Series 1 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 12269,
        "inventoryQuantity": 76
      },
      {
        "id": "v-ao-smith-smart-fan-series-1-2",
        "title": "AO Smith Smart Fan Series 1 - Variant 3",
        "color": "Pearl White",
        "sweepSize": "900mm",
        "price": 12769,
        "inventoryQuantity": 76
      },
      {
        "id": "v-ao-smith-smart-fan-series-1-3",
        "title": "AO Smith Smart Fan Series 1 - Variant 4",
        "color": "Antique Brass",
        "sweepSize": "1400mm",
        "price": 13269,
        "inventoryQuantity": 65
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-2",
    "name": "AO Smith Smart Fan Series 2",
    "slug": "ao-smith-smart-fan-series-2",
    "brand": "AO Smith",
    "category": "Designer Fans",
    "price": 9450,
    "compareAtPrice": 10552,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.7,
    "reviews": 371,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Smart Fan Series 2. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-smart-fan-series-2-0",
        "title": "AO Smith Smart Fan Series 2 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 9450,
        "inventoryQuantity": 67
      },
      {
        "id": "v-ao-smith-smart-fan-series-2-1",
        "title": "AO Smith Smart Fan Series 2 - Variant 2",
        "color": "Matte Black",
        "sweepSize": "900mm",
        "price": 9950,
        "inventoryQuantity": 20
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-3",
    "name": "Havells Smart Fan Series 3",
    "slug": "havells-smart-fan-series-3",
    "brand": "Havells",
    "category": "Designer Fans",
    "price": 5699,
    "compareAtPrice": 7117,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.5,
    "reviews": 218,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Havells Smart Fan Series 3. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-havells-smart-fan-series-3-0",
        "title": "Havells Smart Fan Series 3 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 5699,
        "inventoryQuantity": 45
      },
      {
        "id": "v-havells-smart-fan-series-3-1",
        "title": "Havells Smart Fan Series 3 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": "1400mm",
        "price": 6199,
        "inventoryQuantity": 66
      },
      {
        "id": "v-havells-smart-fan-series-3-2",
        "title": "Havells Smart Fan Series 3 - Variant 3",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 6699,
        "inventoryQuantity": 86
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Havells"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-4",
    "name": "Havells Smart Fan Series 4",
    "slug": "havells-smart-fan-series-4",
    "brand": "Havells",
    "category": "Designer Fans",
    "price": 6137,
    "compareAtPrice": 8126,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.3,
    "reviews": 412,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Havells Smart Fan Series 4. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-havells-smart-fan-series-4-0",
        "title": "Havells Smart Fan Series 4 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 6137,
        "inventoryQuantity": 51
      },
      {
        "id": "v-havells-smart-fan-series-4-1",
        "title": "Havells Smart Fan Series 4 - Variant 2",
        "color": "Matte Black",
        "sweepSize": "1400mm",
        "price": 6637,
        "inventoryQuantity": 53
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Havells"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-5",
    "name": "Atomberg Smart Fan Series 5",
    "slug": "atomberg-smart-fan-series-5",
    "brand": "Atomberg",
    "category": "Designer Fans",
    "price": 4596,
    "compareAtPrice": 5299,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.2,
    "reviews": 160,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Atomberg Smart Fan Series 5. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-atomberg-smart-fan-series-5-0",
        "title": "Atomberg Smart Fan Series 5 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "900mm",
        "price": 4596,
        "inventoryQuantity": 54
      },
      {
        "id": "v-atomberg-smart-fan-series-5-1",
        "title": "Atomberg Smart Fan Series 5 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": "1200mm",
        "price": 5096,
        "inventoryQuantity": 28
      },
      {
        "id": "v-atomberg-smart-fan-series-5-2",
        "title": "Atomberg Smart Fan Series 5 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": "1400mm",
        "price": 5596,
        "inventoryQuantity": 33
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Atomberg"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-6",
    "name": "Crompton Smart Fan Series 6",
    "slug": "crompton-smart-fan-series-6",
    "brand": "Crompton",
    "category": "Designer Fans",
    "price": 11810,
    "compareAtPrice": 13473,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 168,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 6. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-6-0",
        "title": "Crompton Smart Fan Series 6 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 11810,
        "inventoryQuantity": 70
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-7",
    "name": "Volaris Smart Fan Series 7",
    "slug": "volaris-smart-fan-series-7",
    "brand": "Volaris",
    "category": "Designer Fans",
    "price": 5108,
    "compareAtPrice": 6056,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.9,
    "reviews": 436,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Smart Fan Series 7. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-smart-fan-series-7-0",
        "title": "Volaris Smart Fan Series 7 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": "900mm",
        "price": 5108,
        "inventoryQuantity": 68
      },
      {
        "id": "v-volaris-smart-fan-series-7-1",
        "title": "Volaris Smart Fan Series 7 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": "1400mm",
        "price": 5608,
        "inventoryQuantity": 60
      },
      {
        "id": "v-volaris-smart-fan-series-7-2",
        "title": "Volaris Smart Fan Series 7 - Variant 3",
        "color": "Brushed Nickel",
        "sweepSize": "900mm",
        "price": 6108,
        "inventoryQuantity": 72
      },
      {
        "id": "v-volaris-smart-fan-series-7-3",
        "title": "Volaris Smart Fan Series 7 - Variant 4",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 6608,
        "inventoryQuantity": 47
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-8",
    "name": "Crompton Smart Fan Series 8",
    "slug": "crompton-smart-fan-series-8",
    "brand": "Crompton",
    "category": "Designer Fans",
    "price": 11996,
    "compareAtPrice": 12593,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4,
    "reviews": 248,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 8. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-8-0",
        "title": "Crompton Smart Fan Series 8 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 11996,
        "inventoryQuantity": 33
      },
      {
        "id": "v-crompton-smart-fan-series-8-1",
        "title": "Crompton Smart Fan Series 8 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 12496,
        "inventoryQuantity": 92
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-9",
    "name": "Crompton Smart Fan Series 9",
    "slug": "crompton-smart-fan-series-9",
    "brand": "Crompton",
    "category": "Designer Fans",
    "price": 10218,
    "compareAtPrice": 11631,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.8,
    "reviews": 266,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 9. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-9-0",
        "title": "Crompton Smart Fan Series 9 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": "1200mm",
        "price": 10218,
        "inventoryQuantity": 70
      },
      {
        "id": "v-crompton-smart-fan-series-9-1",
        "title": "Crompton Smart Fan Series 9 - Variant 2",
        "color": "Pearl White",
        "sweepSize": "1400mm",
        "price": 10718,
        "inventoryQuantity": 88
      },
      {
        "id": "v-crompton-smart-fan-series-9-2",
        "title": "Crompton Smart Fan Series 9 - Variant 3",
        "color": "Pearl White",
        "sweepSize": "900mm",
        "price": 11218,
        "inventoryQuantity": 24
      },
      {
        "id": "v-crompton-smart-fan-series-9-3",
        "title": "Crompton Smart Fan Series 9 - Variant 4",
        "color": "Matte Black",
        "sweepSize": "1200mm",
        "price": 11718,
        "inventoryQuantity": 58
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-10",
    "name": "V-Guard Smart Fan Series 10",
    "slug": "v-guard-smart-fan-series-10",
    "brand": "V-Guard",
    "category": "Designer Fans",
    "price": 5298,
    "compareAtPrice": 7002,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.3,
    "reviews": 248,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the V-Guard Smart Fan Series 10. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-smart-fan-series-10-0",
        "title": "V-Guard Smart Fan Series 10 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": "1200mm",
        "price": 5298,
        "inventoryQuantity": 41
      },
      {
        "id": "v-v-guard-smart-fan-series-10-1",
        "title": "V-Guard Smart Fan Series 10 - Variant 2",
        "color": "Pearl White",
        "sweepSize": "900mm",
        "price": 5798,
        "inventoryQuantity": 80
      },
      {
        "id": "v-v-guard-smart-fan-series-10-2",
        "title": "V-Guard Smart Fan Series 10 - Variant 3",
        "color": "Matte Black",
        "sweepSize": "1200mm",
        "price": 6298,
        "inventoryQuantity": 70
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-11",
    "name": "V-Guard Smart Fan Series 11",
    "slug": "v-guard-smart-fan-series-11",
    "brand": "V-Guard",
    "category": "Designer Fans",
    "price": 9071,
    "compareAtPrice": 10115,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 169,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Smart Fan Series 11. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-smart-fan-series-11-0",
        "title": "V-Guard Smart Fan Series 11 - Variant 1",
        "color": "Matte Black",
        "sweepSize": "1400mm",
        "price": 9071,
        "inventoryQuantity": 89
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-12",
    "name": "Crompton Smart Fan Series 12",
    "slug": "crompton-smart-fan-series-12",
    "brand": "Crompton",
    "category": "Designer Fans",
    "price": 7709,
    "compareAtPrice": 8275,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.7,
    "reviews": 103,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Smart Fan Series 12. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-smart-fan-series-12-0",
        "title": "Crompton Smart Fan Series 12 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": "1400mm",
        "price": 7709,
        "inventoryQuantity": 60
      },
      {
        "id": "v-crompton-smart-fan-series-12-1",
        "title": "Crompton Smart Fan Series 12 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": "1200mm",
        "price": 8209,
        "inventoryQuantity": 84
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-13",
    "name": "V-Guard Smart Fan Series 13",
    "slug": "v-guard-smart-fan-series-13",
    "brand": "V-Guard",
    "category": "Designer Fans",
    "price": 9794,
    "compareAtPrice": 10736,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.5,
    "reviews": 383,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Smart Fan Series 13. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-smart-fan-series-13-0",
        "title": "V-Guard Smart Fan Series 13 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 9794,
        "inventoryQuantity": 49
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-14",
    "name": "AO Smith Smart Fan Series 14",
    "slug": "ao-smith-smart-fan-series-14",
    "brand": "AO Smith",
    "category": "Designer Fans",
    "price": 11934,
    "compareAtPrice": 13764,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.5,
    "reviews": 436,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the AO Smith Smart Fan Series 14. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-smart-fan-series-14-0",
        "title": "AO Smith Smart Fan Series 14 - Variant 1",
        "color": "Matte Black",
        "sweepSize": "1200mm",
        "price": 11934,
        "inventoryQuantity": 63
      },
      {
        "id": "v-ao-smith-smart-fan-series-14-1",
        "title": "AO Smith Smart Fan Series 14 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": "1200mm",
        "price": 12434,
        "inventoryQuantity": 10
      },
      {
        "id": "v-ao-smith-smart-fan-series-14-2",
        "title": "AO Smith Smart Fan Series 14 - Variant 3",
        "color": "Pearl White",
        "sweepSize": "1200mm",
        "price": 12934,
        "inventoryQuantity": 78
      },
      {
        "id": "v-ao-smith-smart-fan-series-14-3",
        "title": "AO Smith Smart Fan Series 14 - Variant 4",
        "color": "Brushed Nickel",
        "sweepSize": "1400mm",
        "price": 13434,
        "inventoryQuantity": 69
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-designer-fans-15",
    "name": "V-Guard Smart Fan Series 15",
    "slug": "v-guard-smart-fan-series-15",
    "brand": "V-Guard",
    "category": "Designer Fans",
    "price": 7846,
    "compareAtPrice": 9113,
    "image": "https://images.unsplash.com/photo-1544941916-24e5491122a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 280,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the V-Guard Smart Fan Series 15. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-smart-fan-series-15-0",
        "title": "V-Guard Smart Fan Series 15 - Variant 1",
        "color": "Matte Black",
        "sweepSize": "1400mm",
        "price": 7846,
        "inventoryQuantity": 70
      },
      {
        "id": "v-v-guard-smart-fan-series-15-1",
        "title": "V-Guard Smart Fan Series 15 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": "1200mm",
        "price": 8346,
        "inventoryQuantity": 43
      },
      {
        "id": "v-v-guard-smart-fan-series-15-2",
        "title": "V-Guard Smart Fan Series 15 - Variant 3",
        "color": "Rose Gold",
        "sweepSize": "900mm",
        "price": 8846,
        "inventoryQuantity": 77
      },
      {
        "id": "v-v-guard-smart-fan-series-15-3",
        "title": "V-Guard Smart Fan Series 15 - Variant 4",
        "color": "Antique Brass",
        "sweepSize": "1400mm",
        "price": 9346,
        "inventoryQuantity": 62
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-1",
    "name": "Atomberg Luxury Light Collection 1",
    "slug": "atomberg-luxury-light-collection-1",
    "brand": "Atomberg",
    "category": "Decorative Lights",
    "price": 4988,
    "compareAtPrice": 5616,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4,
    "reviews": 217,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Atomberg Luxury Light Collection 1. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-atomberg-luxury-light-collection-1-0",
        "title": "Atomberg Luxury Light Collection 1 - Variant 1",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 4988,
        "inventoryQuantity": 40
      },
      {
        "id": "v-atomberg-luxury-light-collection-1-1",
        "title": "Atomberg Luxury Light Collection 1 - Variant 2",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 5488,
        "inventoryQuantity": 92
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Atomberg"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-2",
    "name": "V-Guard Luxury Light Collection 2",
    "slug": "v-guard-luxury-light-collection-2",
    "brand": "V-Guard",
    "category": "Decorative Lights",
    "price": 6758,
    "compareAtPrice": 8716,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.5,
    "reviews": 307,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Luxury Light Collection 2. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-luxury-light-collection-2-0",
        "title": "V-Guard Luxury Light Collection 2 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 6758,
        "inventoryQuantity": 50
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-3",
    "name": "Crompton Luxury Light Collection 3",
    "slug": "crompton-luxury-light-collection-3",
    "brand": "Crompton",
    "category": "Decorative Lights",
    "price": 2018,
    "compareAtPrice": 3293,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.5,
    "reviews": 493,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Crompton Luxury Light Collection 3. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-luxury-light-collection-3-0",
        "title": "Crompton Luxury Light Collection 3 - Variant 1",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 2018,
        "inventoryQuantity": 13
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-4",
    "name": "V-Guard Luxury Light Collection 4",
    "slug": "v-guard-luxury-light-collection-4",
    "brand": "V-Guard",
    "category": "Decorative Lights",
    "price": 5998,
    "compareAtPrice": 7516,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.4,
    "reviews": 159,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Luxury Light Collection 4. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-luxury-light-collection-4-0",
        "title": "V-Guard Luxury Light Collection 4 - Variant 1",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 5998,
        "inventoryQuantity": 44
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-5",
    "name": "Atomberg Luxury Light Collection 5",
    "slug": "atomberg-luxury-light-collection-5",
    "brand": "Atomberg",
    "category": "Decorative Lights",
    "price": 1866,
    "compareAtPrice": 3538,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 5,
    "reviews": 321,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Atomberg Luxury Light Collection 5. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-atomberg-luxury-light-collection-5-0",
        "title": "Atomberg Luxury Light Collection 5 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 1866,
        "inventoryQuantity": 81
      },
      {
        "id": "v-atomberg-luxury-light-collection-5-1",
        "title": "Atomberg Luxury Light Collection 5 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 2366,
        "inventoryQuantity": 45
      },
      {
        "id": "v-atomberg-luxury-light-collection-5-2",
        "title": "Atomberg Luxury Light Collection 5 - Variant 3",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 2866,
        "inventoryQuantity": 80
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Atomberg"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-6",
    "name": "V-Guard Luxury Light Collection 6",
    "slug": "v-guard-luxury-light-collection-6",
    "brand": "V-Guard",
    "category": "Decorative Lights",
    "price": 5521,
    "compareAtPrice": 7270,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.3,
    "reviews": 286,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Luxury Light Collection 6. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-luxury-light-collection-6-0",
        "title": "V-Guard Luxury Light Collection 6 - Variant 1",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 5521,
        "inventoryQuantity": 28
      },
      {
        "id": "v-v-guard-luxury-light-collection-6-1",
        "title": "V-Guard Luxury Light Collection 6 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 6021,
        "inventoryQuantity": 87
      },
      {
        "id": "v-v-guard-luxury-light-collection-6-2",
        "title": "V-Guard Luxury Light Collection 6 - Variant 3",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 6521,
        "inventoryQuantity": 72
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-7",
    "name": "Volaris Luxury Light Collection 7",
    "slug": "volaris-luxury-light-collection-7",
    "brand": "Volaris",
    "category": "Decorative Lights",
    "price": 4585,
    "compareAtPrice": 5410,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.9,
    "reviews": 339,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Luxury Light Collection 7. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-luxury-light-collection-7-0",
        "title": "Volaris Luxury Light Collection 7 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 4585,
        "inventoryQuantity": 77
      },
      {
        "id": "v-volaris-luxury-light-collection-7-1",
        "title": "Volaris Luxury Light Collection 7 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 5085,
        "inventoryQuantity": 88
      },
      {
        "id": "v-volaris-luxury-light-collection-7-2",
        "title": "Volaris Luxury Light Collection 7 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 5585,
        "inventoryQuantity": 67
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-8",
    "name": "AO Smith Luxury Light Collection 8",
    "slug": "ao-smith-luxury-light-collection-8",
    "brand": "AO Smith",
    "category": "Decorative Lights",
    "price": 6615,
    "compareAtPrice": 8377,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.6,
    "reviews": 474,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 8. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-8-0",
        "title": "AO Smith Luxury Light Collection 8 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 6615,
        "inventoryQuantity": 81
      },
      {
        "id": "v-ao-smith-luxury-light-collection-8-1",
        "title": "AO Smith Luxury Light Collection 8 - Variant 2",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 7115,
        "inventoryQuantity": 44
      },
      {
        "id": "v-ao-smith-luxury-light-collection-8-2",
        "title": "AO Smith Luxury Light Collection 8 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 7615,
        "inventoryQuantity": 12
      },
      {
        "id": "v-ao-smith-luxury-light-collection-8-3",
        "title": "AO Smith Luxury Light Collection 8 - Variant 4",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 8115,
        "inventoryQuantity": 34
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-9",
    "name": "Crompton Luxury Light Collection 9",
    "slug": "crompton-luxury-light-collection-9",
    "brand": "Crompton",
    "category": "Decorative Lights",
    "price": 6816,
    "compareAtPrice": 8495,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.8,
    "reviews": 483,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Luxury Light Collection 9. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-luxury-light-collection-9-0",
        "title": "Crompton Luxury Light Collection 9 - Variant 1",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 6816,
        "inventoryQuantity": 81
      },
      {
        "id": "v-crompton-luxury-light-collection-9-1",
        "title": "Crompton Luxury Light Collection 9 - Variant 2",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 7316,
        "inventoryQuantity": 91
      },
      {
        "id": "v-crompton-luxury-light-collection-9-2",
        "title": "Crompton Luxury Light Collection 9 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 7816,
        "inventoryQuantity": 11
      },
      {
        "id": "v-crompton-luxury-light-collection-9-3",
        "title": "Crompton Luxury Light Collection 9 - Variant 4",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 8316,
        "inventoryQuantity": 73
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-10",
    "name": "Crompton Luxury Light Collection 10",
    "slug": "crompton-luxury-light-collection-10",
    "brand": "Crompton",
    "category": "Decorative Lights",
    "price": 4986,
    "compareAtPrice": 5597,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.7,
    "reviews": 453,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Luxury Light Collection 10. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-luxury-light-collection-10-0",
        "title": "Crompton Luxury Light Collection 10 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 4986,
        "inventoryQuantity": 11
      },
      {
        "id": "v-crompton-luxury-light-collection-10-1",
        "title": "Crompton Luxury Light Collection 10 - Variant 2",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 5486,
        "inventoryQuantity": 52
      },
      {
        "id": "v-crompton-luxury-light-collection-10-2",
        "title": "Crompton Luxury Light Collection 10 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 5986,
        "inventoryQuantity": 81
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-11",
    "name": "Havells Luxury Light Collection 11",
    "slug": "havells-luxury-light-collection-11",
    "brand": "Havells",
    "category": "Decorative Lights",
    "price": 4928,
    "compareAtPrice": 6885,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.7,
    "reviews": 46,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Havells Luxury Light Collection 11. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-havells-luxury-light-collection-11-0",
        "title": "Havells Luxury Light Collection 11 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 4928,
        "inventoryQuantity": 78
      },
      {
        "id": "v-havells-luxury-light-collection-11-1",
        "title": "Havells Luxury Light Collection 11 - Variant 2",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 5428,
        "inventoryQuantity": 67
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Havells"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-12",
    "name": "Volaris Luxury Light Collection 12",
    "slug": "volaris-luxury-light-collection-12",
    "brand": "Volaris",
    "category": "Decorative Lights",
    "price": 6605,
    "compareAtPrice": 7179,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.7,
    "reviews": 345,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Volaris Luxury Light Collection 12. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-luxury-light-collection-12-0",
        "title": "Volaris Luxury Light Collection 12 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 6605,
        "inventoryQuantity": 38
      },
      {
        "id": "v-volaris-luxury-light-collection-12-1",
        "title": "Volaris Luxury Light Collection 12 - Variant 2",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 7105,
        "inventoryQuantity": 41
      },
      {
        "id": "v-volaris-luxury-light-collection-12-2",
        "title": "Volaris Luxury Light Collection 12 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 7605,
        "inventoryQuantity": 29
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-13",
    "name": "Atomberg Luxury Light Collection 13",
    "slug": "atomberg-luxury-light-collection-13",
    "brand": "Atomberg",
    "category": "Decorative Lights",
    "price": 6463,
    "compareAtPrice": 8398,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.2,
    "reviews": 272,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Atomberg Luxury Light Collection 13. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-atomberg-luxury-light-collection-13-0",
        "title": "Atomberg Luxury Light Collection 13 - Variant 1",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 6463,
        "inventoryQuantity": 14
      },
      {
        "id": "v-atomberg-luxury-light-collection-13-1",
        "title": "Atomberg Luxury Light Collection 13 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 6963,
        "inventoryQuantity": 20
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Atomberg"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-14",
    "name": "V-Guard Luxury Light Collection 14",
    "slug": "v-guard-luxury-light-collection-14",
    "brand": "V-Guard",
    "category": "Decorative Lights",
    "price": 7207,
    "compareAtPrice": 8009,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.8,
    "reviews": 406,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Luxury Light Collection 14. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-luxury-light-collection-14-0",
        "title": "V-Guard Luxury Light Collection 14 - Variant 1",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 7207,
        "inventoryQuantity": 39
      },
      {
        "id": "v-v-guard-luxury-light-collection-14-1",
        "title": "V-Guard Luxury Light Collection 14 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 7707,
        "inventoryQuantity": 87
      },
      {
        "id": "v-v-guard-luxury-light-collection-14-2",
        "title": "V-Guard Luxury Light Collection 14 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 8207,
        "inventoryQuantity": 49
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-decorative-lights-15",
    "name": "Crompton Luxury Light Collection 15",
    "slug": "crompton-luxury-light-collection-15",
    "brand": "Crompton",
    "category": "Decorative Lights",
    "price": 6890,
    "compareAtPrice": 8393,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.7,
    "reviews": 279,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Luxury Light Collection 15. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-luxury-light-collection-15-0",
        "title": "Crompton Luxury Light Collection 15 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 6890,
        "inventoryQuantity": 36
      },
      {
        "id": "v-crompton-luxury-light-collection-15-1",
        "title": "Crompton Luxury Light Collection 15 - Variant 2",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 7390,
        "inventoryQuantity": 94
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-1",
    "name": "Crompton Luxury Light Collection 1",
    "slug": "crompton-luxury-light-collection-1",
    "brand": "Crompton",
    "category": "Chandeliers",
    "price": 79987,
    "compareAtPrice": 80657,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.9,
    "reviews": 137,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Crompton Luxury Light Collection 1. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-luxury-light-collection-1-0",
        "title": "Crompton Luxury Light Collection 1 - Variant 1",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 79987,
        "inventoryQuantity": 55
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-2",
    "name": "Volaris Luxury Light Collection 2",
    "slug": "volaris-luxury-light-collection-2",
    "brand": "Volaris",
    "category": "Chandeliers",
    "price": 40821,
    "compareAtPrice": 42052,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.9,
    "reviews": 349,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the Volaris Luxury Light Collection 2. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-luxury-light-collection-2-0",
        "title": "Volaris Luxury Light Collection 2 - Variant 1",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 40821,
        "inventoryQuantity": 21
      },
      {
        "id": "v-volaris-luxury-light-collection-2-1",
        "title": "Volaris Luxury Light Collection 2 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 41321,
        "inventoryQuantity": 19
      },
      {
        "id": "v-volaris-luxury-light-collection-2-2",
        "title": "Volaris Luxury Light Collection 2 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 41821,
        "inventoryQuantity": 57
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-3",
    "name": "AO Smith Luxury Light Collection 3",
    "slug": "ao-smith-luxury-light-collection-3",
    "brand": "AO Smith",
    "category": "Chandeliers",
    "price": 39169,
    "compareAtPrice": 39853,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.6,
    "reviews": 85,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 3. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-3-0",
        "title": "AO Smith Luxury Light Collection 3 - Variant 1",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 39169,
        "inventoryQuantity": 32
      },
      {
        "id": "v-ao-smith-luxury-light-collection-3-1",
        "title": "AO Smith Luxury Light Collection 3 - Variant 2",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 39669,
        "inventoryQuantity": 71
      },
      {
        "id": "v-ao-smith-luxury-light-collection-3-2",
        "title": "AO Smith Luxury Light Collection 3 - Variant 3",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 40169,
        "inventoryQuantity": 35
      },
      {
        "id": "v-ao-smith-luxury-light-collection-3-3",
        "title": "AO Smith Luxury Light Collection 3 - Variant 4",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 40669,
        "inventoryQuantity": 58
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-4",
    "name": "Volaris Luxury Light Collection 4",
    "slug": "volaris-luxury-light-collection-4",
    "brand": "Volaris",
    "category": "Chandeliers",
    "price": 43826,
    "compareAtPrice": 45141,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.8,
    "reviews": 352,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Luxury Light Collection 4. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-luxury-light-collection-4-0",
        "title": "Volaris Luxury Light Collection 4 - Variant 1",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 43826,
        "inventoryQuantity": 51
      },
      {
        "id": "v-volaris-luxury-light-collection-4-1",
        "title": "Volaris Luxury Light Collection 4 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 44326,
        "inventoryQuantity": 99
      },
      {
        "id": "v-volaris-luxury-light-collection-4-2",
        "title": "Volaris Luxury Light Collection 4 - Variant 3",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 44826,
        "inventoryQuantity": 51
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-5",
    "name": "Havells Luxury Light Collection 5",
    "slug": "havells-luxury-light-collection-5",
    "brand": "Havells",
    "category": "Chandeliers",
    "price": 44832,
    "compareAtPrice": 46823,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4,
    "reviews": 95,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Havells Luxury Light Collection 5. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-havells-luxury-light-collection-5-0",
        "title": "Havells Luxury Light Collection 5 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 44832,
        "inventoryQuantity": 16
      },
      {
        "id": "v-havells-luxury-light-collection-5-1",
        "title": "Havells Luxury Light Collection 5 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 45332,
        "inventoryQuantity": 18
      },
      {
        "id": "v-havells-luxury-light-collection-5-2",
        "title": "Havells Luxury Light Collection 5 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 45832,
        "inventoryQuantity": 61
      },
      {
        "id": "v-havells-luxury-light-collection-5-3",
        "title": "Havells Luxury Light Collection 5 - Variant 4",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 46332,
        "inventoryQuantity": 54
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Havells"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-6",
    "name": "AO Smith Luxury Light Collection 6",
    "slug": "ao-smith-luxury-light-collection-6",
    "brand": "AO Smith",
    "category": "Chandeliers",
    "price": 66498,
    "compareAtPrice": 68151,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.2,
    "reviews": 219,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 6. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-6-0",
        "title": "AO Smith Luxury Light Collection 6 - Variant 1",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 66498,
        "inventoryQuantity": 35
      },
      {
        "id": "v-ao-smith-luxury-light-collection-6-1",
        "title": "AO Smith Luxury Light Collection 6 - Variant 2",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 66998,
        "inventoryQuantity": 60
      },
      {
        "id": "v-ao-smith-luxury-light-collection-6-2",
        "title": "AO Smith Luxury Light Collection 6 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 67498,
        "inventoryQuantity": 55
      },
      {
        "id": "v-ao-smith-luxury-light-collection-6-3",
        "title": "AO Smith Luxury Light Collection 6 - Variant 4",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 67998,
        "inventoryQuantity": 88
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-7",
    "name": "Volaris Luxury Light Collection 7",
    "slug": "volaris-luxury-light-collection-7",
    "brand": "Volaris",
    "category": "Chandeliers",
    "price": 80947,
    "compareAtPrice": 82614,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.4,
    "reviews": 337,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Luxury Light Collection 7. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-luxury-light-collection-7-0",
        "title": "Volaris Luxury Light Collection 7 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 80947,
        "inventoryQuantity": 26
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-8",
    "name": "Volaris Luxury Light Collection 8",
    "slug": "volaris-luxury-light-collection-8",
    "brand": "Volaris",
    "category": "Chandeliers",
    "price": 24327,
    "compareAtPrice": 25369,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.6,
    "reviews": 130,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Luxury Light Collection 8. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-luxury-light-collection-8-0",
        "title": "Volaris Luxury Light Collection 8 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 24327,
        "inventoryQuantity": 94
      },
      {
        "id": "v-volaris-luxury-light-collection-8-1",
        "title": "Volaris Luxury Light Collection 8 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 24827,
        "inventoryQuantity": 26
      },
      {
        "id": "v-volaris-luxury-light-collection-8-2",
        "title": "Volaris Luxury Light Collection 8 - Variant 3",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 25327,
        "inventoryQuantity": 60
      },
      {
        "id": "v-volaris-luxury-light-collection-8-3",
        "title": "Volaris Luxury Light Collection 8 - Variant 4",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 25827,
        "inventoryQuantity": 15
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-9",
    "name": "V-Guard Luxury Light Collection 9",
    "slug": "v-guard-luxury-light-collection-9",
    "brand": "V-Guard",
    "category": "Chandeliers",
    "price": 26258,
    "compareAtPrice": 28133,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.9,
    "reviews": 261,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the V-Guard Luxury Light Collection 9. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-luxury-light-collection-9-0",
        "title": "V-Guard Luxury Light Collection 9 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 26258,
        "inventoryQuantity": 30
      },
      {
        "id": "v-v-guard-luxury-light-collection-9-1",
        "title": "V-Guard Luxury Light Collection 9 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 26758,
        "inventoryQuantity": 41
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-chandeliers-10",
    "name": "AO Smith Luxury Light Collection 10",
    "slug": "ao-smith-luxury-light-collection-10",
    "brand": "AO Smith",
    "category": "Chandeliers",
    "price": 21879,
    "compareAtPrice": 22504,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.7,
    "reviews": 78,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 10. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-10-0",
        "title": "AO Smith Luxury Light Collection 10 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 21879,
        "inventoryQuantity": 94
      },
      {
        "id": "v-ao-smith-luxury-light-collection-10-1",
        "title": "AO Smith Luxury Light Collection 10 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 22379,
        "inventoryQuantity": 97
      },
      {
        "id": "v-ao-smith-luxury-light-collection-10-2",
        "title": "AO Smith Luxury Light Collection 10 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 22879,
        "inventoryQuantity": 84
      },
      {
        "id": "v-ao-smith-luxury-light-collection-10-3",
        "title": "AO Smith Luxury Light Collection 10 - Variant 4",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 23379,
        "inventoryQuantity": 49
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-1",
    "name": "AO Smith Luxury Light Collection 1",
    "slug": "ao-smith-luxury-light-collection-1",
    "brand": "AO Smith",
    "category": "Pendant Lights",
    "price": 7700,
    "compareAtPrice": 9346,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.4,
    "reviews": 110,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 1. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-1-0",
        "title": "AO Smith Luxury Light Collection 1 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 7700,
        "inventoryQuantity": 73
      },
      {
        "id": "v-ao-smith-luxury-light-collection-1-1",
        "title": "AO Smith Luxury Light Collection 1 - Variant 2",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 8200,
        "inventoryQuantity": 38
      },
      {
        "id": "v-ao-smith-luxury-light-collection-1-2",
        "title": "AO Smith Luxury Light Collection 1 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 8700,
        "inventoryQuantity": 57
      },
      {
        "id": "v-ao-smith-luxury-light-collection-1-3",
        "title": "AO Smith Luxury Light Collection 1 - Variant 4",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 9200,
        "inventoryQuantity": 32
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-2",
    "name": "V-Guard Luxury Light Collection 2",
    "slug": "v-guard-luxury-light-collection-2",
    "brand": "V-Guard",
    "category": "Pendant Lights",
    "price": 8323,
    "compareAtPrice": 8915,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.4,
    "reviews": 153,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the V-Guard Luxury Light Collection 2. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-luxury-light-collection-2-0",
        "title": "V-Guard Luxury Light Collection 2 - Variant 1",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 8323,
        "inventoryQuantity": 66
      },
      {
        "id": "v-v-guard-luxury-light-collection-2-1",
        "title": "V-Guard Luxury Light Collection 2 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 8823,
        "inventoryQuantity": 38
      },
      {
        "id": "v-v-guard-luxury-light-collection-2-2",
        "title": "V-Guard Luxury Light Collection 2 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 9323,
        "inventoryQuantity": 94
      },
      {
        "id": "v-v-guard-luxury-light-collection-2-3",
        "title": "V-Guard Luxury Light Collection 2 - Variant 4",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 9823,
        "inventoryQuantity": 22
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-3",
    "name": "AO Smith Luxury Light Collection 3",
    "slug": "ao-smith-luxury-light-collection-3",
    "brand": "AO Smith",
    "category": "Pendant Lights",
    "price": 13408,
    "compareAtPrice": 15034,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 5,
    "reviews": 99,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 3. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-3-0",
        "title": "AO Smith Luxury Light Collection 3 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 13408,
        "inventoryQuantity": 23
      },
      {
        "id": "v-ao-smith-luxury-light-collection-3-1",
        "title": "AO Smith Luxury Light Collection 3 - Variant 2",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 13908,
        "inventoryQuantity": 27
      },
      {
        "id": "v-ao-smith-luxury-light-collection-3-2",
        "title": "AO Smith Luxury Light Collection 3 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 14408,
        "inventoryQuantity": 64
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-4",
    "name": "AO Smith Luxury Light Collection 4",
    "slug": "ao-smith-luxury-light-collection-4",
    "brand": "AO Smith",
    "category": "Pendant Lights",
    "price": 7617,
    "compareAtPrice": 8223,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4,
    "reviews": 443,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 4. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-4-0",
        "title": "AO Smith Luxury Light Collection 4 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 7617,
        "inventoryQuantity": 70
      },
      {
        "id": "v-ao-smith-luxury-light-collection-4-1",
        "title": "AO Smith Luxury Light Collection 4 - Variant 2",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 8117,
        "inventoryQuantity": 99
      },
      {
        "id": "v-ao-smith-luxury-light-collection-4-2",
        "title": "AO Smith Luxury Light Collection 4 - Variant 3",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 8617,
        "inventoryQuantity": 72
      },
      {
        "id": "v-ao-smith-luxury-light-collection-4-3",
        "title": "AO Smith Luxury Light Collection 4 - Variant 4",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 9117,
        "inventoryQuantity": 65
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-5",
    "name": "AO Smith Luxury Light Collection 5",
    "slug": "ao-smith-luxury-light-collection-5",
    "brand": "AO Smith",
    "category": "Pendant Lights",
    "price": 13827,
    "compareAtPrice": 14670,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.8,
    "reviews": 5,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 5. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-5-0",
        "title": "AO Smith Luxury Light Collection 5 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 13827,
        "inventoryQuantity": 44
      },
      {
        "id": "v-ao-smith-luxury-light-collection-5-1",
        "title": "AO Smith Luxury Light Collection 5 - Variant 2",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 14327,
        "inventoryQuantity": 30
      },
      {
        "id": "v-ao-smith-luxury-light-collection-5-2",
        "title": "AO Smith Luxury Light Collection 5 - Variant 3",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 14827,
        "inventoryQuantity": 29
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-6",
    "name": "Crompton Luxury Light Collection 6",
    "slug": "crompton-luxury-light-collection-6",
    "brand": "Crompton",
    "category": "Pendant Lights",
    "price": 12307,
    "compareAtPrice": 14135,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.9,
    "reviews": 231,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Crompton Luxury Light Collection 6. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-crompton-luxury-light-collection-6-0",
        "title": "Crompton Luxury Light Collection 6 - Variant 1",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 12307,
        "inventoryQuantity": 54
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Crompton"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-7",
    "name": "AO Smith Luxury Light Collection 7",
    "slug": "ao-smith-luxury-light-collection-7",
    "brand": "AO Smith",
    "category": "Pendant Lights",
    "price": 7853,
    "compareAtPrice": 9129,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.6,
    "reviews": 79,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the AO Smith Luxury Light Collection 7. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-ao-smith-luxury-light-collection-7-0",
        "title": "AO Smith Luxury Light Collection 7 - Variant 1",
        "color": "Rose Gold",
        "sweepSize": null,
        "price": 7853,
        "inventoryQuantity": 24
      },
      {
        "id": "v-ao-smith-luxury-light-collection-7-1",
        "title": "AO Smith Luxury Light Collection 7 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 8353,
        "inventoryQuantity": 66
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "AO Smith"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-8",
    "name": "V-Guard Luxury Light Collection 8",
    "slug": "v-guard-luxury-light-collection-8",
    "brand": "V-Guard",
    "category": "Pendant Lights",
    "price": 10650,
    "compareAtPrice": 11944,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.8,
    "reviews": 13,
    "isNew": true,
    "description": "Experience the pinnacle of design and performance with the V-Guard Luxury Light Collection 8. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-luxury-light-collection-8-0",
        "title": "V-Guard Luxury Light Collection 8 - Variant 1",
        "color": "Brushed Nickel",
        "sweepSize": null,
        "price": 10650,
        "inventoryQuantity": 15
      },
      {
        "id": "v-v-guard-luxury-light-collection-8-1",
        "title": "V-Guard Luxury Light Collection 8 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 11150,
        "inventoryQuantity": 86
      },
      {
        "id": "v-v-guard-luxury-light-collection-8-2",
        "title": "V-Guard Luxury Light Collection 8 - Variant 3",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 11650,
        "inventoryQuantity": 97
      },
      {
        "id": "v-v-guard-luxury-light-collection-8-3",
        "title": "V-Guard Luxury Light Collection 8 - Variant 4",
        "color": "Pearl White",
        "sweepSize": null,
        "price": 12150,
        "inventoryQuantity": 41
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-9",
    "name": "V-Guard Luxury Light Collection 9",
    "slug": "v-guard-luxury-light-collection-9",
    "brand": "V-Guard",
    "category": "Pendant Lights",
    "price": 4165,
    "compareAtPrice": 5755,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 4.5,
    "reviews": 158,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the V-Guard Luxury Light Collection 9. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-v-guard-luxury-light-collection-9-0",
        "title": "V-Guard Luxury Light Collection 9 - Variant 1",
        "color": "Matte Black",
        "sweepSize": null,
        "price": 4165,
        "inventoryQuantity": 62
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "V-Guard"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  },
  {
    "id": "prod-pendant-lights-10",
    "name": "Volaris Luxury Light Collection 10",
    "slug": "volaris-luxury-light-collection-10",
    "brand": "Volaris",
    "category": "Pendant Lights",
    "price": 14803,
    "compareAtPrice": 15467,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    "rating": 3.5,
    "reviews": 59,
    "isNew": false,
    "description": "Experience the pinnacle of design and performance with the Volaris Luxury Light Collection 10. Crafted for modern homes in Malappuram.",
    "variants": [
      {
        "id": "v-volaris-luxury-light-collection-10-0",
        "title": "Volaris Luxury Light Collection 10 - Variant 1",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 14803,
        "inventoryQuantity": 14
      },
      {
        "id": "v-volaris-luxury-light-collection-10-1",
        "title": "Volaris Luxury Light Collection 10 - Variant 2",
        "color": "Antique Brass",
        "sweepSize": null,
        "price": 15303,
        "inventoryQuantity": 49
      }
    ],
    "specifications": [
      {
        "name": "Brand",
        "value": "Volaris"
      },
      {
        "name": "Material",
        "value": "Premium Grade Aluminum/Glass"
      },
      {
        "name": "Warranty",
        "value": "2 Years On-Site"
      }
    ],
    "faqs": [
      {
        "question": "Is installation included?",
        "answer": "We provide expert installation services across Malappuram."
      },
      {
        "question": "What is the warranty period?",
        "answer": "This product comes with a comprehensive 2-year warranty."
      }
    ]
  }
];

export const dummyBrands = [
  { name: "Atomberg", slug: "atomberg", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "V-Guard", slug: "v-guard", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "Havells", slug: "havells", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "Crompton", slug: "crompton", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "AO Smith", slug: "ao-smith", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
  { name: "Volaris", slug: "volaris", logo: "https://images.unsplash.com/photo-1544941916-24e5491122a6?w=200&q=60" },
];

export const dummyCategories = [
  { name: "Smart BLDC Fans", slug: "smart-bldc-fans", count: 20 },
  { name: "Designer Fans", slug: "designer-fans", count: 15 },
  { name: "Decorative Lights", slug: "decorative-lights", count: 15 },
  { name: "Chandeliers", slug: "chandeliers", count: 10 },
  { name: "Pendant Lights", slug: "pendant-lights", count: 10 },
];

export const dummyReviews = [
  {
    id: "1",
    author: "Rahul M.",
    rating: 5,
    content: "Bought the Atomberg BLDC fan. Excellent service by Techno Designer. Delivery was super fast to Perinthalmanna.",
    date: "2 days ago"
  },
  {
    id: "2",
    author: "Sneha K.",
    rating: 4,
    content: "The chandelier collection is amazing. The store in Malappuram has a huge variety. Highly recommended.",
    date: "1 week ago"
  },
  {
    id: "3",
    author: "Anil P.",
    rating: 5,
    content: "Premium quality fans and lights. The staff was very helpful in choosing the right lighting for my living room.",
    date: "2 weeks ago"
  }
];
