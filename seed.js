const mongoose = require("mongoose");
const Room = require("./models/roomModel");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected to MongoDB");

    // Check if rooms already exist
    const count = await Room.countDocuments();
    if (count === 0) {
      console.log("No rooms found. Seeding initial data...");
      
      const sampleRooms = [
        {
          roomNumber: "R01",
          capacity: 5,
          status: "available",
          pricePerHour: 100000,
          features: ["TV", "Microphone", "AC"],
        },
        {
          roomNumber: "R02",
          capacity: 10,
          status: "available",
          pricePerHour: 150000,
          features: ["TV", "Microphone", "AC", "VIP Sofa"],
        },
        {
          roomNumber: "R03",
          capacity: 15,
          status: "maintenance",
          pricePerHour: 200000,
          features: ["TV", "Microphone", "AC", "Stage"],
        },
      ];

      await Room.insertMany(sampleRooms);
      console.log("Successfully seeded sample rooms.");
    } else {
      console.log(`Database already has ${count} rooms.`);
    }

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
