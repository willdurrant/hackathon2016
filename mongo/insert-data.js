var conn = new Mongo();
db = conn.getDB("hackathon-dev");

//Product
db.product.drop();

db.product.insert(
  {
    "tripName": "New York Trip",
    "tripStartDate": ISODate("2014-03-10T10:00:00.000Z"),
    "tripEndDate": ISODate("2014-03-24T14:00:00.000Z"),
    "legName": "Home to New York",
    "legStartDate": ISODate("2014-03-10T10:00:00.000Z"),
    "legEndDate": ISODate("2014-03-10T23:00:00.000Z"),
    "stageName": "Getting There",
    "productGroupName": "Before You Go",
    "productName": "Pets",
    "image": "pets.jpg"
  }
);

db.product.insert(
  {
    "tripName": "New York Trip",
    "tripStartDate": ISODate("2014-03-10T10:00:00.000Z"),
    "tripEndDate": ISODate("2014-03-24T14:00:00.000Z"),
    "legName": "Home to New York",
    "legStartDate": ISODate("2014-03-10T10:00:00.000Z"),
    "legEndDate": ISODate("2014-03-10T23:00:00.000Z"),
    "stageName": "Getting There",
    "productGroupName": "Before You Go",
    "productName": "Insurance",
    "image": "insurance.jpg"
  }
);

db.product.insert(
  {
    "tripName": "New York Trip",
    "tripStartDate": ISODate("2014-03-10T10:00:00.000Z"),
    "tripEndDate": ISODate("2014-03-24T14:00:00.000Z"),
    "legName": "Home to New York",
    "legStartDate": ISODate("2014-03-10T10:00:00.000Z"),
    "legEndDate": ISODate("2014-03-10T23:00:00.000Z"),
    "stageName": "Getting There",
    "productGroupName": "Before You Go",
    "productName": "Vaccination",
    "image": "vaccination.jpg"
  }
);
