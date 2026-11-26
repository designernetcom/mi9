export const certs = [
  {
    name: "Star House",
    image: starHouseImage,
  },
  {
    name: "Tea Board",
    image: teaBoard,
  },
  {
    name: "GST",
    image: gst,
  },
  {
    name: "LEI",
    image: lei,
  },
  {
    name: "PAN",
    image: pan,
  },
  {
    name: "Annex B",
    image: annexB,
  },
  {
    name: "IEC",
    image: iec,
  },
];

import heroImage from "../assets/img/hero.avif";
import aboutImage from "../assets/img/owner.jpg";
import tamarindImage from "../assets/img/tamarind.png";
import spicesImage from "../assets/img/spices.avif";
import fruitsImage from "../assets/img/fruits.avif";
import vegetablesImage from "../assets/img/vegetables.avif";
import grainsImage from "../assets/img/grains.avif";
import dryFruitsImage from "../assets/img/dryfruits.png";
import ctaImage from "../assets/img/cta.avif";
import gumImage from "../assets/img/gunder.png";
import riceImage from "../assets/img/rice.avif";
import tamarind1Image from "../assets/img/tamarind1.jpg";
import greenRaisinImage from "../assets/img/green-raisin.png";
import greenRaisinBoxImage from "../assets/img/green-raisin-box.png";

import starHouseImage from "../assets/img/star-house.png";
import annexB from "../assets/img/annex-b.jpg";
import gst from "../assets/img/gst.png";
import iec from "../assets/img/iec.png";
import lei from "../assets/img/lei.jpg";
import pan from "../assets/img/pan.png";
import teaBoard from "../assets/img/tea-board.png";

export const img = {
  hero: heroImage,
  about: aboutImage,
  tamarind: tamarindImage,
  spices: spicesImage,
  fruits: fruitsImage,
  vegetables: vegetablesImage,
  grains: grainsImage,
  dryfruits: dryFruitsImage,
  cta: ctaImage,
  gum: gumImage,
  tamarind1: tamarind1Image,
  rice: riceImage,
  greenRaisin: greenRaisinImage,
  greenRaisinBox: greenRaisinBoxImage,
  // starHouse: starHouseImage,
};

export const products = [
  {
    slug: "indian-tamarind",
    name: "Indian Tamarind",
    image: img.tamarind1,
    eyebrow: "INDIAN AGRICULTURAL PRODUCE",
    lead: "Naturally tangy. Rich in pulp. Sourced from India for global markets.",
    detail:
      "Indian Tamarind is a naturally tangy and versatile fruit widely cultivated across India. Known for its distinctive sweet-sour flavor, rich pulp, and excellent culinary value, Indian tamarind is widely used in food processing, traditional cuisine, sauces, chutneys, beverages, and spice blends.",
    applications_desc:
      "Sourced from selected growing regions in India, our tamarind is carefully processed and packed to preserve its natural taste, aroma, color, and pulp quality. We offer export-quality tamarind suitable for wholesalers, food manufacturers, distributors, and international buyers.",
    contact_desc:
      "We focus on supplying quality Indian tamarind to international markets with careful handling, hygienic processing, secure packaging, and dependable bulk supply. Our export solutions can be tailored according to buyer requirements, quantity, packaging format, and destination market.",

    applications: [
      "Tamarind paste and concentrate",
      "Chutneys and sauces",
      "Pickles and curries",
      "Beverages and refreshing drinks",
      "Spice blends and seasonings",
      "Food processing",
    ],
    features: [
      "Premium-quality Indian tamarind",
      "Naturally sweet and tangy flavor",
      "Rich, concentrated pulp",
      "Carefully cleaned and processed",
      "Export-ready packaging",
    ],
  },

  {
    slug: "basmati-rice",
    name: "Basmati Rice",
    eyebrow: "OUR PRODUCTS",
    image: img.rice,
    lead: "Premium Indian 1509 Basmati Rice for global markets.",
    detail:
      "Indian Pusa 1509 Basmati Rice, carefully selected and processed for export markets. Final specifications are confirmed according to the agreed grade and buyer requirements.",

    applications_desc:
      "Pusa 1509 Basmati Rice is suitable for retail distribution, food service, catering, and international rice markets.",

    applications: [
      "Retail & Wholesale Distribution",
      "Restaurants & Catering",
      "Biryani & Rice Dishes",
      "Food Service & Hospitality",
    ],

    contact_desc:
      "Discuss your required rice grade, processing type, packaging, and destination market with our export team.",

    features: [
      "Long-Grain Basmati Rice",
      "Carefully Graded Quality",
      "Controlled Moisture",
      "Export Packaging Options",
      "Buyer-Specific Specifications",
    ],

    specifications: [
      { parameter: "Variety", value: "Pusa 1509 Basmati Rice" },
      { parameter: "Average Grain Length", value: "8.35 mm (offered lot)" },
      { parameter: "Purity", value: "92–95% minimum, as agreed" },
      { parameter: "Moisture Content", value: "Under 15% (offered lot)" },
      {
        parameter: "Broken Grains",
        value: "1% maximum, subject to confirmation",
      },
      {
        parameter: "Cooked Grain Elongation",
        value: "Approximately 16–19.5 mm; grade-dependent",
      },
      {
        parameter: "Natural Field Admixture",
        value: "5–8% maximum, as agreed",
      },
      {
        parameter: "Damaged / Discoloured Grains",
        value: "1% maximum (offered lot)",
      },
      { parameter: "Immature Grains", value: "2% maximum, as agreed" },
      {
        parameter: "Foreign Matter / Black Grains",
        value: "Nil / free from black grains, subject to inspection",
      },
      { parameter: "Kett Whiteness", value: "31 (offered lot)" },
      { parameter: "Crop", value: "Old crop" },
    ],

    commercialDetails: {
      price: "Approximately USD 1,100 per metric tonne",
      incoterm: "FOB Mundra, India",
      note: "Indicative offer supplied by MI9; confirm current price, grade, quantity, and contract specifications before publishing as a firm quotation.",
    },
  },

  {
    slug: "indian-spices",
    name: "Indian Spices",
    image: img.spices,
    eyebrow: "AROMATIC INDIAN SPICES",
    lead: "Authentic Indian Spices — Rich in Aroma, Flavor & Tradition",

    detail:
      "India is renowned worldwide for its diverse range of aromatic and flavorful spices. We source quality Indian spices from trusted growers and suppliers, ensuring excellent freshness, purity, aroma, and consistency for international markets.",
    applications_desc:
      "Our Indian spices are carefully selected, processed, cleaned, graded, and packed to meet the requirements of overseas buyers. From everyday culinary spices to specialty varieties, we offer products suitable for food manufacturers, distributors, wholesalers, restaurants, and retail markets.",
    contact_desc:
      "We connect international buyers with India's rich spice heritage by supplying carefully selected Indian spices for global markets. Our focus is on quality, consistency, timely delivery, and long-term business relationships.",

    applications: [
      "Culinary & Cooking",
      "Food Processing",
      "Spice Blends & Seasonings",
      "Beverages",
      "Pickles & Chutneys",
      "Meat & Seafood Products",
    ],
    features: [
      "Premium Indian Origin",
      "Rich Aroma & Flavor",
      "Fresh & Quality Assured",
      "Wide Variety",
      "Natural Color & Taste",
    ],
  },

  {
    slug: "food-grains",
    name: "Food Grains",
    image: img.grains,
    eyebrow: "INDIAN GRAINS",
    lead: "Indian Food Grains — Quality, Purity & Reliable Supply",

    detail:
      "India has a rich agricultural heritage and is a major producer of a wide variety of food grains. We source quality grains from trusted farmers, suppliers, and established agricultural regions, with careful attention to purity, grain quality, freshness, uniformity, and buyer requirements.",
    applications_desc:
      "Our food grains are carefully cleaned, sorted, graded, and packed for domestic and international markets. We cater to importers, wholesalers, distributors, retailers, food manufacturers, restaurants, and institutional buyers, offering dependable sourcing and export-ready supply solutions.",
    contact_desc:
      "Our food grains represent the agricultural diversity and quality of India, sourced through reliable supply networks for international markets. We focus on quality, consistency, efficient handling, competitive sourcing, and timely delivery, helping overseas buyers build dependable long-term supply partnerships.",

    applications: [
      "Retail & Supermarkets",
      "Food Processing",
      "Hotels & Restaurants",
      "Bakery & Milling",
      "Animal Feed",
      "Wholesale & Distributio",
    ],
    features: [
      "Quality-Sourced Grains",
      "Clean & Carefully Sorted",
      "Uniform Size & Grade",
      "Natural Taste & Quality",
      "Reliable Bulk Supply",
    ],
  },

  {
    slug: "fresh-fruits",
    name: "Fresh Fruits",
    image: img.fruits,
    eyebrow: "FRESH INDIAN PRODUCE",
    lead: "Fresh Indian Fruits — Naturally Fresh, Carefully Selected",

    detail:
      "India's diverse climate and fertile agricultural regions produce a wide variety of fresh, flavorful, and nutritious fruits throughout the year. We source fresh fruits from trusted growers and suppliers, selecting produce based on freshness, quality, appearance, maturity, and market requirements.",

    applications_desc:
      "Our fresh fruits are carefully handled, sorted, graded, packed, and prepared for export to international markets. We serve wholesalers, distributors, retailers, food businesses, and importers looking for dependable sources of quality Indian fruits.",
    contact_desc:
      "We bring the richness of India's diverse fruit-growing regions to international buyers through carefully sourced and export-ready fresh fruits. Our focus is on freshness, quality, reliable sourcing, timely delivery, and long-term partnerships.",

    applications: [
      "Fresh Consumption",
      "Juices & Beverages",
      "Jams & Preserves",
      "Food Processing",
      "Bakery & Confectionery",
      "Food Service & Hospitality",
    ],
    features: [
      "Fresh & Naturally Grown",
      "Premium Quality",
      "Rich Taste & Aroma",
      "Careful Sorting & Grading",
      "Hygienic Handling",
    ],
  },

  {
    slug: "fresh-vegetables",
    name: "Fresh Vegetables",
    image: img.vegetables,
    eyebrow: "FRESH INDIAN PRODUCE",
    lead: "Fresh Indian Vegetables — Quality Sourced for Global Markets",

    detail:
      "India is one of the world's leading agricultural producers, offering a diverse range of fresh vegetables throughout the year. We source vegetables from trusted growers and suppliers, selecting produce for freshness, quality, appearance, size, and market suitability.",
    applications_desc:
      "Our fresh vegetables are carefully sorted, graded, handled, and packed to support the requirements of international buyers. We cater to importers, wholesalers, distributors, retailers, restaurants, hotels, food-service businesses, and food processors.",
    contact_desc:
      "With careful sourcing, grading, hygienic handling, and export-oriented packaging, we aim to deliver fresh produce that meets the expectations of global buyers while maintaining its natural taste, texture, and nutritional value.",
    applications: [
      "Retail & Supermarkets",
      "Wholesale & Distribution",
      "Hotels & Restaurants",
      "Food Processing",
      "Food-Service Industry",
      "Juice & Food Preparation",
    ],
    features: [
      "Freshly Sourced",
      "Quality Selection",
      "Natural Freshness",
      "Careful Sorting & Grading",
      "Hygienic Handling",
    ],
  },

  {
    slug: "gunder-gum",
    name: "Gunder Gum",
    image: img.gum,
    eyebrow: "NATURAL GUNDER GUM",
    lead: "Quality Indian Gunder Gum for Global Markets",

    detail:
      "Gunder Gum, also known as Gond or edible gum, is a natural plant-derived gum traditionally used in Indian food preparations and various culinary applications. Carefully sourced and selected, it is valued for its distinctive properties and versatility. We focus on product quality, cleanliness, consistent supply, and packaging suitable for international buyers.",

    applications_desc:
      "Gunder Gum is commonly used in traditional Indian sweets, laddoos, panjiri, and other food preparations. Depending on the grade and intended use, it may also serve selected food-processing and traditional product applications. Product specifications and suitability are confirmed according to buyer requirements.",

    contact_desc:
      "MI9 International aims to supply quality Gunder Gum to importers, wholesalers, distributors, food manufacturers, and specialty ingredient buyers. Contact our team to discuss product grade, quantity, packaging preferences, destination market, and export requirements.",

    applications: [
      "Traditional Indian Sweets",
      "Laddoos & Panjiri",
      "Food Preparation",
      "Specialty Food Ingredients",
      "Wholesale & Distribution",
      "Food Processing Applications",
    ],

    features: [
      "Carefully Selected Product",
      "Natural Plant-Derived Gum",
      "Quality Inspection",
      "Clean Handling & Storage",
      "Buyer-Specific Packaging",
    ],
  },

  {
    slug: "dry-fruits",
    name: "Dry Fruits",
    image: img.dryfruits,
    eyebrow: "PREMIUM DRY FRUITS",
    lead: "Premium Indian & Imported Dry Fruits — Quality for Global Markets",

    detail:
      "Dry fruits are valued worldwide for their rich taste, nutritional properties, convenience, and versatility. We source carefully selected dry fruits and nuts from trusted suppliers, focusing on quality, freshness, appearance, taste, and consistency. Our range is suitable for international importers, wholesalers, distributors, retailers, food manufacturers, hotels, bakeries, and confectionery businesses.",

    applications_desc:
      "Our products are carefully sorted, graded, hygienically handled, and packed according to product and buyer requirements. With reliable sourcing and export-oriented packaging, we aim to provide quality dry fruits for diverse international markets.",

    contact_desc:
      "We provide a diverse range of quality dry fruits and nuts for international buyers, combining careful sourcing with professional handling and export-oriented packaging. Our focus on quality, consistency, freshness, and reliable supply helps us serve long-term requirements across retail, food service, processing, bakery, and confectionery markets.",

    applications: [
      "Retail & Supermarkets",
      "Food & Confectionery",
      "Bakery Industry",
      "Hotels & Restaurants",
      "Snack Products",
      "Food Processing",
    ],

    features: [
      "Premium Quality Selection",
      "Freshness & Natural Taste",
      "Carefully Sorted & Graded",
      "Hygienically Handled",
      "Export-Ready Packaging",
    ],

    // Subcategories displayed on the SAME Dry Fruits page
    subcategories: [
      {
        name: "Raisin",
        description:
          "Explore raisin varieties for retail, food service, bakery, and international bulk supply.",

        products: [
          {
            name: "Green Raisin",
            image: img.greenRaisin,
            packagingImage: img.greenRaisinBox,
            packing: "10 kg Box Packing",
            description:
              "Green raisins with a naturally sweet taste and distinctive golden-green appearance, suitable for retail distribution, bakery, confectionery, snacks, and food processing.",

            features: [
              "Green Raisins",
              "10 kg Box Packing",
              "Suitable for Bulk Buyers",
              "Export-Oriented Packaging",
            ],
          },
        ],
      },
    ],
  },
];

export const stats = [
  ["2+", "Employees"],
  ["2002", "Established"],
  ["₹50 Cr", "Annual Turnover"],
  ["7+", "Export Countries"],
];

export const gallery = [
  img.hero,
  img.spices,
  img.fruits,
  img.vegetables,
  img.grains,
  img.dryfruits,
  img.tamarind,
  img.gum,
  img.cta,
];

export const company = {
  phone: "+91 9371095152",

  email: "mi9international@gmail.com",

  corporate: "144 MG Road, Pune 411001, Maharashtra, India.",

  branch: "381/17 Bhawani Peth, Pune 411042, Maharashtra, India.",
};
