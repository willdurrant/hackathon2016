var conn = new Mongo();
db = conn.getDB("hackathon-dev");

//Alert
db.alert.drop();

db.alert.insert({"uniqueId": 1, "level": "info", "msg": "Did you know you are entitled to use the lounge?"});
db.alert.insert({"uniqueId": 2, "level": "error", "msg": "Herd of wildebeest on the M25 between Jct 8 and Jct 9"});

//Stage
db.stage.drop();

db.stage.insert(
  {
    "stageName": "Getting There",
    "productGroups": [
      {
        "productGroupName": "Before You Go",
        "strapLineText": "Have you remembered to do...?",
        "products": [{"productName": "Visa"}, {"productName": "Money"}, {"productName": "Health"}, {"productName": "Insurance"}, {"productName": "Pets"}]
      },
      {
        "productGroupName": "On Your Way",
        "strapLineText": "How are you getting to..?",
        "products": [{"productName": "Transfers"}, {"productName": "Travel Updates"}]
      },
      {
        "productGroupName": "At The Airport",
        "strapLineText": "What are you going to do there...?",
        "products": [{"productName": "Fast Track"}, {"productName": "Airport Check In"}, {"productName": "Lounge Access"}, {"productName": "Shopping"}]
      },
      {
        "productGroupName": "Get To The Hotel",
        "strapLineText": "How are you getting to...?",
        "products": [{"productName": "Transfer"}, {"productName": "Hotel Check In"}]
      }
    ]
  }
);

//Product
db.product.drop();

db.product.insert(
  { "productGroupName": "Before You Go",
    "productName": "Visa",
    "image": "visa.jpg"
  }
);

db.product.insert(
  { "productGroupName": "Before You Go",
    "productName": "Money",
    "image": "currency exchange.jpg"
  }
);

db.product.insert(
  { "productGroupName": "Before You Go",
    "productName": "Health",
    "image": "health.jpg"
  }
);

db.product.insert(
  { "productGroupName": "Before You Go",
    "productName": "Insurance",
    "image": "insurance.jpg"
  }
);

db.product.insert(
  { "productGroupName": "Before You Go",
    "productName": "Pets",
    "image": "pets.jpg"
  }
);
