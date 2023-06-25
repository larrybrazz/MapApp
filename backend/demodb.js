// const { MongoClient } = require("mongodb");

// async function main() {
//   const url =
//     "mongodb+srv://larrybrazz70:Olanrewaju47@cluster0.flnrkql.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(url);

//   try {
//       await client.connect();
      

//       await deleteAll(client)
//     //   await  listDatabases(client)
//     //   await deleteListingsScrapedBeforeDate(client , new Date("2019-02-15"))
//     //   await deleteListingsByName(client , "Loft")
//     //   await updateAllListingsToHavePropertyType(client)
//     //   await upsertListingByName(client, "Loft" , {name: "Loft" , bedrooms: 2, bathrooms: 2})
//     //   await updateListingsByName(client,"infinite Views" , {bedrooms: 6, beds:8})
//     //   await findListingsWithMinDataEntry(client, {
//     //       minimumNumberOfBedrooms: 4,
//     //       minimumNumberOfBathrooms: 2,
//     //       maximumNumberOfResults: 5
//     //   })

//     //   await createMultipleListing(client, [
//     //    {  name: "Lovely Loft",
//     //       summary: "A charming loft in Paris",
//     //       bedrooms: 1,
//     //           bathrooms: 1,
//     //       last_review: new Date()

//     //     },
//     //    {  name: "Lovely Loft",
//     //       summary: "A charming loft in Paris",
//     //       bedrooms: 1,
//     //           bathrooms: 1,
//     //       last_review: new Date()

//     //     },
//     //    {  name: "Main Loft",
//     //       summary: "A charming loft in Paris",
//     //       bedrooms: 2,
//     //       bathrooms: 6,
//     //       last_review: new Date()

//     //     },
//     //    {  name: "Absolute Loft",
//     //       summary: "A charming loft in Paris",
//     //       bedrooms: 4,
//     //           bathrooms: 0,
//     //       last_review: new Date()

//     //     },
//     //   ])
//   } catch (e) {
//     console.error(e); // Invoke console.error with the error object
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// async function updateAllListingsToHavePropertyType(client) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews")
//         .updateMany({ property_type: { $exists: false } }, { $set: { property_type: "unknown" } }, { upsert: true })
    
//     console.log(`${result.matchedCount} documents matched the query criteria`);
//     console.log(`${result.modifiedCount} documents was/were updated`);
    
// }
// async function deleteAll(client) {
//     const result = await client.db("sample_airbnb").collection("listingAndReviews").deleteMany({});

//     console.log(`${result.deletedCount} document(s) was/were deleted`);

// }

// async function deleteListingsScrapedBeforeDate(client, date) {
//     const result = await client.db("sample_airbnb").collection("listingAndReviews").deleteMany({ "last_scraped": { $lt: date } });
    
//     console.log(`${result.deletedCount} document(s) was/were deleted`)
// }
// async function deleteListingsByName(client, nameOfListing) {
//     const result = await client.db("sample_airbnb").collection("listingAndReviews").deleteOne({ name: nameOfListing })
    
//     console.log(`${result.deletedCount} document(s) was/were deleted`)
// }

// async function upsertListingByName(client, nameOfListing, updatedListing) {
//         const result = await client
//           .db("smaple_airbnb")
//           .collection("listingsAndReviews")
//           .updateOne(
//             {
//               nameOfListing,
//             },
//               { $set: updatedListing },
//             {upsert: true}
//     );
//     console.log(`${result.matchedCount} documents matched the query criteria`);

//     if (result.upsertedCount > 0) {
//         console.log(`One document was inserted with the id ${result.upsertedId}`)
//     } else {
//         console.log(`${result.modifiedCount} documents was updated`)
//     }
// }

// async function updateListingsByName(client, nameOfListing, updatedListing) {
//     const results = await client.db("smaple_airbnb").collection("listingsAndReviews").updateOne({
//         nameOfListing
//     }, { $set: updatedListing })
    
//     console.log(`${results.matchedCount} documents matched the query criteria`)
//     console.log(`${results.modifiedCount} documents was/were queried`)
// }

// async function findListingsWithMinDataEntry(client, {
//     minimumNumberOfBedrooms = 0,
//     minimumNumberOfBathrooms = 0,
//     maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
// } = {}) {
//     const cursor = client.db("smaple_airbnb").collection("listingsAndReviews").find({
//         bedrooms: { $gte: minimumNumberOfBedrooms },
//         bathrooms: {$gte: minimumNumberOfBathrooms}
//     }).sort({ last_review: -1 })
//         .limit(maximumNumberOfResults)
    
//     const results = await cursor.toArray();
//     if (results.length > 0) {
//         console.log(`Found listings with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
//         results.forEach((result, i) => {
//             date = new Date(result.last_review).toDateString();
//             console.log();
//             console.log(`${1 + 1}. name: ${result.name}`);
//             console.log(`_id: ${result._id}`);
//             console.log(`bedrooms:${result.bedrooms}`)
//             console.log(`bathrooms:${result.bathrooms}`)
//             console.log(`Most recent review date:${new Date (result.last_review)}`)
//         })
//     } else {
//         console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`)
//     }
// }

// async function findzoneListingByName(client, nameOfListing) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });

//     if (result) {
//         console.log(`Found a listing in the collection with the namr ${nameOfListing}`);
//         console.log(result);
//     } else {
//         console.log(`No listing found with the name ${nameOfListing}`)
//     }
// }

// async function createMultipleListing(client, newListings) {
//     const result = await client.db("smaple_airbnb").collection("listiongsAndRviews").insertMany(newListings);

//     console.log(`${result.insertedCount} new listings created with the following id (s):`)
//     console.log(result.insertedIds);
// }

// async function createListing(client, newListing) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing)
    
//     console.log(`New listing with the following id:${result.insertedId} `)
// }

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => {
//     console.log(`${db.name}`);
//   });
// }
