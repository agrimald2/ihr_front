const BASE_URL = 'https://thr-backend.camionerosperuanos.org/api/'


const productsResponse = {
  "count": 20,
  "next": "https://example.com/api/products?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "name_en": "Elegant Leather Shoes",
      "name_ua": "Елегантні шкіряні туфлі",
      "name_sp": "Zapatos de cuero elegantes",
      "name_fr": "Chaussures en cuir élégantes",
      "name_ch": "优雅的皮鞋",
      "code": "ELS-001",
      "brand": "Luxury Footwear",
      "gender": 1,
      "composition": "Genuine Leather",
      "manufacturer": "Italy",
      "description": "Handcrafted leather shoes perfect for formal occasions.",
      "price": "150.00",
      "created_at": "2024-03-01T10:15:30.000Z",
      "updated_at": "2024-03-01T10:15:30.000Z",
      "category": 2,
      "subcategory": 5,
      "store": 3,
      "color": [2, 5],
      "size": [39, 40, 41, 42, 43],
      "images": [
        "https://picsum.photos/id/5/5000/3334",
        "https://picsum.photos/id/2/5000/3333",
        "https://picsum.photos/id/29/4000/2670",
        "https://picsum.photos/id/22/4434/3729",
        "https://picsum.photos/id/17/2500/1667"
      ]
    },
    {
      "id": 2,
      "name": "Vintage Canvas Backpack",
      "name_ua": "Вінтажний рюкзак з полотна",
      "name_sp": "Mochila de lona vintage",
      "name_fr": "Sac à dos en toile vintage",
      "name_ch": "复古帆布背包",
      "code": "VCB-002",
      "brand": "Retro Gear",
      "gender": 0,
      "composition": "High-Quality Canvas",
      "manufacturer": "China",
      "description": "Durable canvas backpack for everyday use.",
      "price": "75.00",
      "created_at": "2024-03-02T11:20:45.000Z",
      "updated_at": "2024-03-02T11:20:45.000Z",
      "category": 3,
      "subcategory": 8,
      "store": 2,
      "color": [3, 7],
      "size": [],
      "images": [
        "https://picsum.photos/id/26/4209/2769",
        "https://picsum.photos/id/13/2500/1667",
        "https://picsum.photos/id/0/5000/3333",
        "https://picsum.photos/id/24/4855/1803",
        "https://picsum.photos/id/18/2500/1667"
      ]
    },
    {
      "id": 3,
      "name": "Smart Fitness Watch",
      "name_ua": "Розумний фітнес-годинник",
      "name_sp": "Reloj inteligente de fitness",
      "name_fr": "Montre de fitness intelligente",
      "name_ch": "智能健身手表",
      "code": "SFW-003",
      "brand": "TechFit",
      "gender": 0,
      "composition": "Silicone Strap, Waterproof",
      "manufacturer": "South Korea",
      "description": "A smartwatch that keeps track of your fitness goals.",
      "price": "199.99",
      "created_at": "2024-03-03T12:25:50.000Z",
      "updated_at": "2024-03-03T12:25:50.000Z",
      "category": 4,
      "subcategory": 12,
      "store": 1,
      "color": [1, 4],
      "size": [],
      "images": [
        "https://picsum.photos/id/12/2500/1667",
        "https://picsum.photos/id/21/3008/2008",
        "https://picsum.photos/id/28/4928/3264",
        "https://picsum.photos/id/27/3264/1836"
      ]
    },
    {
      "id": 4,
      "name": "Classic Aviator Sunglasses",
      "name_ua": "Класичні авіаторські сонцезахисні окуляри",
      "name_sp": "Gafas de sol aviador clásicas",
      "name_fr": "Lunettes de soleil aviateur classiques",
      "name_ch": "经典飞行员太阳镜",
      "code": "CAS-004",
      "brand": "SunGuard",
      "gender": 0,
      "composition": "Metal Frame, UV Protection",
      "manufacturer": "USA",
      "description": "Iconic aviator sunglasses with UV protection.",
      "price": "120.00",
      "created_at": "2024-03-04T13:30:55.000Z",
      "updated_at": "2024-03-04T13:30:55.000Z",
      "category": 5,
      "subcategory": 17,
      "store": 3,
      "color": [6, 8],
      "size": [],
      "images": [
        "https://picsum.photos/id/19/2500/1667",
        "https://picsum.photos/id/16/2500/1667",
        "https://picsum.photos/id/14/2500/1667",
        "https://picsum.photos/id/20/3670/2462"
      ]
    },
    {
      "id": 5,
      "name": "Leather Bifold Wallet",
      "name_ua": "Шкіряний біфолд гаманець",
      "name_sp": "Cartera de cuero bifold",
      "name_fr": "Portefeuille en cuir bifold",
      "name_ch": "皮质双折钱包",
      "code": "LBW-005",
      "brand": "Classic Leather",
      "gender": 0,
      "composition": "Genuine Leather",
      "manufacturer": "Italy",
      "description": "Slim and elegant bifold wallet made from genuine leather.",
      "price": "50.00",
      "created_at": "2024-03-05T14:35:30.000Z",
      "updated_at": "2024-03-05T14:35:30.000Z",
      "category": 6,
      "subcategory": 23,
      "store": 2,
      "color": [9, 10],
      "size": [],
      "images": [
        "https://picsum.photos/id/15/2500/1667",
        "https://picsum.photos/id/11/2500/1667",
        "https://picsum.photos/id/25/5000/3333",
        "https://picsum.photos/id/23/3887/4899",
        "https://picsum.photos/id/10/2500/1667"
      ]
    },
    // Add the remaining 25 products here
    {
      "id": 6,
      "name": "Vintage Leather Messenger Bag",
      "name_ua": "Вінтажна шкіряна сумка-месенджер",
      "name_sp": "Bolso de mensajero de cuero vintage",
      "name_fr": "Sac messager en cuir vintage",
      "name_ch": "复古皮革信使包",
      "code": "VLMB-006",
      "brand": "Heritage Leather",
      "gender": 0,
      "composition": "Genuine Leather",
      "manufacturer": "Italy",
      "description": "Stylish vintage messenger bag crafted from genuine leather.",
      "price": "180.00",
      "created_at": "2024-03-06T16:40:25.000Z",
      "updated_at": "2024-03-06T16:40:25.000Z",
      "category": 7,
      "subcategory": 29,
      "store": 4,
      "color": [4, 6],
      "size": [],
      "images": [
        "https://picsum.photos/id/0/5000/3333",
        "https://picsum.photos/id/1/5000/3333",
        "https://picsum.photos/id/2/5000/3333",
        "https://picsum.photos/id/3/5000/3333",
        "https://picsum.photos/id/4/5000/3333",
        "https://picsum.photos/id/5/5000/3334"
      ]
    },
    {
      "id": 7,
      "name": "Slim Fit Chino Pants",
      "name_ua": "Брюки чино Slim Fit",
      "name_sp": "Pantalones chinos Slim Fit",
      "name_fr": "Pantalons chino slim fit",
      "name_ch": "修身合身的中裤",
      "code": "SFCP-007",
      "brand": "Modern Classic",
      "gender": 1,
      "composition": "Cotton, Spandex",
      "manufacturer": "China",
      "description": "Comfortable and stylish slim fit chino pants for men.",
      "price": "60.00",
      "created_at": "2024-03-07T17:45:35.000Z",
      "updated_at": "2024-03-07T17:45:35.000Z",
      "category": 8,
      "subcategory": 35,
      "store": 1,
      "color": [1, 8],
      "size": ["XS", "S", "M", "L", "XL"],
      "images": [
        "https://picsum.photos/id/6/5000/3333",
        "https://picsum.photos/id/7/4728/3168",
        "https://picsum.photos/id/8/5000/3333",
        "https://picsum.photos/id/9/5000/3269",
        "https://picsum.photos/id/10/2500/1667",
        "https://picsum.photos/id/11/2500/1667",
        "https://picsum.photos/id/12/2500/1667"
      ]
    },
    {
      "id": 8,
      "name": "Cotton Crewneck Sweater",
      "name_ua": "Бавовняний светр з круглим вирізом",
      "name_sp": "Suéter de cuello redondo de algodón",
      "name_fr": "Pull en coton à col rond",
      "name_ch": "棉质圆领毛衣",
      "code": "CCS-008",
      "brand": "Casual Comfort",
      "gender": 0,
      "composition": "100% Cotton",
      "manufacturer": "India",
      "description": "Soft and comfortable crewneck sweater made from pure cotton.",
      "price": "45.00",
      "created_at": "2024-03-08T18:50:40.000Z",
      "updated_at": "2024-03-08T18:50:40.000Z",
      "category": 9,
      "subcategory": 41,
      "store": 2,
      "color": [2, 9],
      "size": ["XS", "S", "M", "L", "XL"],
      "images": [
        "https://picsum.photos/id/13/2500/1667",
        "https://picsum.photos/id/14/2500/1667",
        "https://picsum.photos/id/15/2500/1667",
        "https://picsum.photos/id/16/2500/1667",
        "https://picsum.photos/id/17/2500/1667",
        "https://picsum.photos/id/18/2500/1667",
        "https://picsum.photos/id/19/2500/1667"
      ]
    },
    {
      "id": 9,
      "name": "Casual Slim Fit Shirt",
      "name_ua": "Повсякденна сорочка Slim Fit",
      "name_sp": "Camisa casual slim fit",
      "name_fr": "Chemise décontractée slim fit",
      "name_ch": "休闲修身衬衫",
      "code": "CSFS-009",
      "brand": "Urban Casuals",
      "gender": 1,
      "composition": "Cotton, Polyester",
      "manufacturer": "India",
      "description": "Stylish and comfortable slim fit shirt for casual occasions.",
      "price": "35.00",
      "created_at": "2024-03-09T19:55:45.000Z",
      "updated_at": "2024-03-09T19:55:45.000Z",
      "category": 10,
      "subcategory": 52,
      "store": 3,
      "color": [3, 10],
      "size": ["XS", "S", "M", "L", "XL"],
      "images": [
        "https://picsum.photos/id/20/3670/2462",
        "https://picsum.photos/id/21/3008/2008",
        "https://picsum.photos/id/22/4434/3729",
        "https://picsum.photos/id/23/3887/4899",
        "https://picsum.photos/id/24/4855/1803",
        "https://picsum.photos/id/25/5000/3333",
        "https://picsum.photos/id/26/4209/2769"
      ]
    },
    {
      "id": 10,
      "name": "Quilted Puffer Jacket",
      "name_ua": "Стеганий пуховик",
      "name_sp": "Chaqueta acolchada",
      "name_fr": "Veste matelassée",
      "name_ch": "防寒服",
      "code": "QPJ-010",
      "brand": "Winter Wear",
      "gender": 0,
      "composition": "Polyester, Down Feather",
      "manufacturer": "China",
      "description": "Warm and stylish quilted puffer jacket for winter.",
      "price": "120.00",
      "created_at": "2024-03-10T20:00:50.000Z",
      "updated_at": "2024-03-10T20:00:50.000Z",
      "category": 11,
      "subcategory": 61,
      "store": 4,
      "color": [5, 1],
      "size": ["XS", "S", "M", "L", "XL"],
      "images": [
        "https://picsum.photos/id/27/3264/1836",
        "https://picsum.photos/id/28/4928/3264",
        "https://picsum.photos/id/29/4000/2670",
        "https://picsum.photos/id/0/5000/3333",
        "https://picsum.photos/id/1/5000/3333"
      ]
    },
    // Add the remaining 20 products here
    {
      "id": 11,
      "name": "Stainless Steel Water Bottle",
      "name_ua": "Нержавіюча стальна пляшка для води",
      "name_sp": "Botella de agua de acero inoxidable",
      "name_fr": "Bouteille d'eau en acier inoxydable",
      "name_ch": "不锈钢水瓶",
      "code": "SSWB-011",
      "brand": "HydroFlask",
      "gender": 0,
      "composition": "Stainless Steel",
      "manufacturer": "USA",
      "description": "Durable stainless steel water bottle for outdoor activities.",
      "price": "25.00",
      "created_at": "2024-03-11T21:05:55.000Z",
      "updated_at": "2024-03-11T21:05:55.000Z",
      "category": 12,
      "subcategory": 72,
      "store": 1,
      "color": [2, 4],
      "size": [],
      "images": [
        "https://picsum.photos/id/2/5000/3333",
        "https://picsum.photos/id/3/5000/3333",
        "https://picsum.photos/id/4/5000/3333",
        "https://picsum.photos/id/5/5000/3334",
        "https://picsum.photos/id/6/5000/3333",
        "https://picsum.photos/id/7/4728/3168"
      ]
    },
    {
      "id": 12,
      "name": "Wireless Bluetooth Earbuds",
      "name_ua": "Бездротові Bluetooth-навушники",
      "name_sp": "Auriculares inalámbricos Bluetooth",
      "name_fr": "Écouteurs Bluetooth sans fil",
      "name_ch": "无线蓝牙耳塞",
      "code": "WBE-012",
      "brand": "TechAudio",
      "gender": 0,
      "composition": "Plastic, Silicone",
      "manufacturer": "China",
      "description": "High-quality wireless Bluetooth earbuds for music and calls.",
      "price": "80.00",
      "created_at": "2024-03-12T22:10:00.000Z",
      "updated_at": "2024-03-12T22:10:00.000Z",
      "category": 13,
      "subcategory": 81,
      "store": 2,
      "color": [3, 7],
      "size": [],
      "images": [
        "https://picsum.photos/id/8/5000/3333",
        "https://picsum.photos/id/9/5000/3269",
        "https://picsum.photos/id/10/2500/1667",
        "https://picsum.photos/id/11/2500/1667"
      ]
    },
    {
      "id": 13,
      "name": "Portable Power Bank",
      "name_ua": "Портативний зарядний пристрій",
      "name_sp": "Banco de energía portátil",
      "name_fr": "Batterie externe portable",
      "name_ch": "便携式充电宝",
      "code": "PPB-013",
      "brand": "PowerUp",
      "gender": 0,
      "composition": "Plastic, Lithium Battery",
      "manufacturer": "USA",
      "description": "Compact and powerful portable power bank for charging on the go.",
      "price": "40.00",
      "created_at": "2024-03-13T23:15:05.000Z",
      "updated_at": "2024-03-13T23:15:05.000Z",
      "category": 14,
      "subcategory": 93,
      "store": 3,
      "color": [1, 6],
      "size": [],
      "images": [
        "https://picsum.photos/id/12/2500/1667",
        "https://picsum.photos/id/13/2500/1667",
        "https://picsum.photos/id/14/2500/1667",
        "https://picsum.photos/id/15/2500/1667",
        "https://picsum.photos/id/16/2500/1667"
      ]
    },
    {
      "id": 14,
      "name": "Natural Wood Watch",
      "name_ua": "Природний дерев'яний годинник",
      "name_sp": "Reloj de madera natural",
      "name_fr": "Montre en bois naturel",
      "name_ch": "天然木表",
      "code": "NWW-014",
      "brand": "EcoTime",
      "gender": 0,
      "composition": "Wooden Frame, Leather Strap",
      "manufacturer": "Canada",
      "description": "Eco-friendly wooden watch with a stylish leather strap.",
      "price": "90.00",
      "created_at": "2024-03-14T00:20:10.000Z",
      "updated_at": "2024-03-14T00:20:10.000Z",
      "category": 15,
      "subcategory": 104,
      "store": 4,
      "color": [2, 5],
      "size": [],
      "images": [
        "https://picsum.photos/id/17/2500/1667",
        "https://picsum.photos/id/18/2500/1667",
        "https://picsum.photos/id/19/2500/1667",
        "https://picsum.photos/id/20/3670/2462"
      ]
    },
    {
      "id": 15,
      "name": "Classic Leather Belt",
      "name_ua": "Класичний шкіряний ремінь",
      "name_sp": "Cinturón de cuero clásico",
      "name_fr": "Ceinture en cuir classique",
      "name_ch": "经典皮带",
      "code": "CLB-015",
      "brand": "Timeless Accessories",
      "gender": 0,
      "composition": "Genuine Leather",
      "manufacturer": "Italy",
      "description": "Timeless classic leather belt perfect for any outfit.",
      "price": "30.00",
      "created_at": "2024-03-15T01:25:15.000Z",
      "updated_at": "2024-03-15T01:25:15.000Z",
      "category": 16,
      "subcategory": 118,
      "store": 1,
      "color": [3, 8],
      "size": [],
      "images": [
        "https://picsum.photos/id/21/3008/2008",
        "https://picsum.photos/id/22/4434/3729",
        "https://picsum.photos/id/23/3887/4899",
        "https://picsum.photos/id/24/4855/1803"
      ]
    },
    {
      "id": 16,
      "name": "Classic Aviator Sunglasses",
      "name_ua": "Класичні авіаторські сонцезахисні окуляри",
      "name_sp": "Gafas de sol aviador clásicas",
      "name_fr": "Lunettes de soleil aviateur classiques",
      "name_ch": "经典飞行员太阳镜",
      "code": "CAS-016",
      "brand": "SunGuard",
      "gender": 0,
      "composition": "Metal Frame, UV Protection",
      "manufacturer": "USA",
      "description": "Iconic aviator sunglasses with UV protection.",
      "price": "120.00",
      "created_at": "2024-03-16T02:30:20.000Z",
      "updated_at": "2024-03-16T02:30:20.000Z",
      "category": 5,
      "subcategory": 17,
      "store": 2,
      "color": [6, 9],
      "size": [],
      "images": [
        "https://picsum.photos/id/25/5000/3333",
        "https://picsum.photos/id/26/4209/2769",
        "https://picsum.photos/id/27/3264/1836",
        "https://picsum.photos/id/28/4928/3264",
        "https://picsum.photos/id/29/4000/2670",
        "https://picsum.photos/id/0/5000/3333"
      ]
    },
    {
      "id": 17,
      "name": "Leather Bifold Wallet",
      "name_ua": "Шкіряний біфолд гаманець",
      "name_sp": "Cartera de cuero bifold",
      "name_fr": "Portefeuille en cuir bifold",
      "name_ch": "皮质双折钱包",
      "code": "LBW-017",
      "brand": "Classic Leather",
      "gender": 0,
      "composition": "Genuine Leather",
      "manufacturer": "Italy",
      "description": "Slim and elegant bifold wallet made from genuine leather.",
      "price": "50.00",
      "created_at": "2024-03-17T03:35:25.000Z",
      "updated_at": "2024-03-17T03:35:25.000Z",
      "category": 6,
      "subcategory": 23,
      "store": 3,
      "color": [7, 10],
      "size": [],
      "images": [
        "https://picsum.photos/id/1/5000/3333",
        "https://picsum.photos/id/2/5000/3333",
        "https://picsum.photos/id/3/5000/3333",
        "https://picsum.photos/id/4/5000/3333",
        "https://picsum.photos/id/5/5000/3334",
        "https://picsum.photos/id/6/5000/3333",
        "https://picsum.photos/id/7/4728/3168"
      ]
    },
    {
      "id": 18,
      "name": "Smart Fitness Watch",
      "name_ua": "Розумний фітнес-годинник",
      "name_sp": "Reloj inteligente de fitness",
      "name_fr": "Montre de fitness intelligente",
      "name_ch": "智能健身手表",
      "code": "SFW-018",
      "brand": "TechFit",
      "gender": 0,
      "composition": "Silicone Strap, Waterproof",
      "manufacturer": "South Korea",
      "description": "A smartwatch that keeps track of your fitness goals.",
      "price": "199.99",
      "created_at": "2024-03-18T04:40:30.000Z",
      "updated_at": "2024-03-18T04:40:30.000Z",
      "category": 4,
      "subcategory": 12,
      "store": 4,
      "color": [8, 1],
      "size": [],
      "images": [
        "https://picsum.photos/id/8/5000/3333",
        "https://picsum.photos/id/9/5000/3269",
        "https://picsum.photos/id/10/2500/1667",
        "https://picsum.photos/id/11/2500/1667"
      ]
    },
    {
      "id": 19,
      "name": "Vintage Canvas Backpack",
      "name_ua": "Вінтажний рюкзак з полотна",
      "name_sp": "Mochila de lona vintage",
      "name_fr": "Sac à dos en toile vintage",
      "name_ch": "复古帆布背包",
      "code": "VCB-019",
      "brand": "Retro Gear",
      "gender": 0,
      "composition": "High-Quality Canvas",
      "manufacturer": "China",
      "description": "Durable canvas backpack for everyday use.",
      "price": "75.00",
      "created_at": "2024-03-19T05:45:35.000Z",
      "updated_at": "2024-03-19T05:45:35.000Z",
      "category": 3,
      "subcategory": 8,
      "store": 3,
      "color": [9, 2],
      "size": [],
      "images": [
        "https://picsum.photos/id/12/2500/1667",
        "https://picsum.photos/id/13/2500/1667",
        "https://picsum.photos/id/14/2500/1667",
        "https://picsum.photos/id/15/2500/1667",
        "https://picsum.photos/id/16/2500/1667",
        "https://picsum.photos/id/17/2500/1667"
      ]
    },
    {
      "id": 20,
      "name": "Elegant Leather Shoes",
      "name_ua": "Елегантні шкіряні туфлі",
      "name_sp": "Zapatos de cuero elegantes",
      "name_fr": "Chaussures en cuir élégantes",
      "name_ch": "优雅的皮鞋",
      "code": "ELS-020",
      "brand": "Luxury Footwear",
      "gender": 1,
      "composition": "Genuine Leather",
      "manufacturer": "Italy",
      "description": "Handcrafted leather shoes perfect for formal occasions.",
      "price": "150.00",
      "created_at": "2024-03-20T06:50:40.000Z",
      "updated_at": "2024-03-20T06:50:40.000Z",
      "category": 2,
      "subcategory": 5,
      "store": 2,
      "color": [10, 3],
      "size": [39, 40, 41, 42, 43],
      "images": [
        "https://picsum.photos/id/18/2500/1667",
        "https://picsum.photos/id/19/2500/1667",
        "https://picsum.photos/id/20/3670/2462",
        "https://picsum.photos/id/21/3008/2008",
        "https://picsum.photos/id/22/4434/3729"
      ]
    }
  ]
}

const categoryResponse = {
  "count": 20,
    "next": "https://example.com/api/products?page=2",
    "previous": null,
    "results": [
      {
        "name": "Category 1",
        "description": "Category 1 description",
        "store": 1,
        "created_at": "2022-01-01T00:00:00Z",
        "updated_at": "2022-01-01T00:00:00Z",
        "image": "https://picsum.photos/id/5/5000/3334"
      },
      {
        "name": "Category 2",
        "description": "Category 2 description",
        "store": 1,
        "created_at": "2022-01-01T00:00:00Z",
        "updated_at": "2022-01-01T00:00:00Z",
        "image": "https://picsum.photos/id/5/5000/3334"
      },
      {
        "name": "Category 3",
        "description": "Category 3 description",
        "store": 1,
        "created_at": "2022-01-01T00:00:00Z",
        "updated_at": "2022-01-01T00:00:00Z",
        "image": "https://picsum.photos/id/5/5000/3334"
      },
      {
        "name": "Category 1",
        "description": "Category 1 description",
        "store": 1,
        "created_at": "2022-01-01T00:00:00Z",
        "updated_at": "2022-01-01T00:00:00Z",
        "image": "https://picsum.photos/id/5/5000/3334"
      },
      {
        "name": "Category 2",
        "description": "Category 2 description",
        "store": 1,
        "created_at": "2022-01-01T00:00:00Z",
        "updated_at": "2022-01-01T00:00:00Z",
        "image": "https://picsum.photos/id/5/5000/3334"
      },
      {
        "name": "Category 3",
        "description": "Category 3 description",
        "store": 1,
        "created_at": "2022-01-01T00:00:00Z",
        "updated_at": "2022-01-01T00:00:00Z",
        "image": "https://picsum.photos/id/5/5000/3334"
      }
    ]
  }

function fakeAsyncEndpoint(data: any, delay: number = 1000): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: () => Promise.resolve(data),
        // Add other properties and methods as needed
      } as Response)
    }, delay)
  })
}

const fetchProducts = async () => {
  try {
    // const response = await fetch(`${BASE_URL}product`)
    const response = await fakeAsyncEndpoint(productsResponse, 1000)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    throw error
  }
}

const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}product`)
    // const response = await fakeAsyncEndpoint(categoryResponse, 1000)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    throw error
  }
}

export { fetchProducts, fetchCategories }

