require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./src/config/db");
const User = require("./src/models/user.model");
const Vehicle = require("./src/models/vehicle.model");
const Driver = require("./src/models/driver.model");
const Expense = require("./src/models/expense.model");
const Trip = require("./src/models/trip.model");
const Maintenance = require("./src/models/maintenance.model");

async function seed() {
    try {
        await connectDB();
        console.log("🌱 Connected to Database. Starting seed reset...\n");

        // 1. Clear old data from seeded collections
        console.log("🗑️ Clearing existing collections...");
        await User.deleteMany({});
        await Vehicle.deleteMany({});
        await Driver.deleteMany({});
        await Expense.deleteMany({});
        await Trip.deleteMany({});
        await Maintenance.deleteMany({});
        console.log("✅ Collections cleared.\n");

        // 2. Create Users with different roles
        console.log("👥 Seeding Users (Different Roles)...");
        
        const managerUser = await User.create({
            name: "Fleet Manager",
            email: "manager@fleetflow.com",
            password: "123456",
            role: "manager",
            phone: "9876543210",
        });

        const dispatcherUser = await User.create({
            name: "Dispatcher Dan",
            email: "dispatcher@fleetflow.com",
            password: "123456",
            role: "dispatcher",
            phone: "9876543211",
        });

        const safetyUser = await User.create({
            name: "Safety Officer Sara",
            email: "safety@fleetflow.com",
            password: "123456",
            role: "safety_officer",
            phone: "9876543212",
        });

        const financeUser = await User.create({
            name: "Finance Analyst Fred",
            email: "finance@fleetflow.com",
            password: "123456",
            role: "financial_analyst",
            phone: "9876543213",
        });

        console.log("✅ Users created:");
        console.log(`   - Manager: ${managerUser.email}`);
        console.log(`   - Dispatcher: ${dispatcherUser.email}`);
        console.log(`   - Safety Officer: ${safetyUser.email}`);
        console.log(`   - Financial Analyst: ${financeUser.email}\n`);

        // 3. Create Vehicles
        console.log("🚗 Seeding Vehicles...");
        
        const vehiclesData = [
            {
                name: "Truck Alpha",
                model: "Tata LPT 3521",
                licensePlate: "GJ01AB1234",
                type: "truck",
                maxCapacity: 12000,
                currentOdometer: 30000, // Will be updated dynamically based on trips
                status: "available",
                fuelType: "diesel",
                acquisitionCost: 1800000,
                acquisitionDate: new Date("2025-01-10"),
                year: 2023,
                color: "White",
                region: "Gujarat Depot",
                createdBy: managerUser._id,
            },
            {
                name: "Van Beta",
                model: "Mahindra Supro",
                licensePlate: "GJ05CD5678",
                type: "van",
                maxCapacity: 2000,
                currentOdometer: 15000, // Will be updated dynamically based on trips
                status: "on_trip",
                fuelType: "cng",
                acquisitionCost: 850000,
                acquisitionDate: new Date("2025-06-15"),
                year: 2024,
                color: "Silver",
                region: "Surat Depot",
                createdBy: managerUser._id,
            },
            {
                name: "Car Delta",
                model: "Maruti Dzire Tour",
                licensePlate: "GJ01XY9999",
                type: "car",
                maxCapacity: 500,
                currentOdometer: 5000, // Will be updated dynamically based on trips
                status: "in_shop",
                fuelType: "petrol",
                acquisitionCost: 650000,
                acquisitionDate: new Date("2025-09-01"),
                year: 2024,
                color: "White",
                region: "Ahmedabad Depot",
                createdBy: managerUser._id,
            },
            {
                name: "Bus Epsilon",
                model: "Ashok Leyland Viking",
                licensePlate: "GJ03YZ8888",
                type: "bus",
                maxCapacity: 8000,
                currentOdometer: 95000,
                status: "retired",
                fuelType: "diesel",
                acquisitionCost: 2800000,
                acquisitionDate: new Date("2023-03-20"),
                year: 2022,
                color: "Red",
                region: "Rajkot Depot",
                createdBy: managerUser._id,
            },
            {
                name: "Bike Gamma",
                model: "TVS XL100",
                licensePlate: "GJ03EF9012",
                type: "bike",
                maxCapacity: 150,
                currentOdometer: 2000, // Will be updated dynamically based on trips
                status: "available",
                fuelType: "petrol",
                acquisitionCost: 60000,
                acquisitionDate: new Date("2025-11-05"),
                year: 2024,
                color: "Red",
                region: "Gujarat Depot",
                createdBy: managerUser._id,
            },
        ];

        const vehicles = await Vehicle.create(vehiclesData);
        console.log(`✅ ${vehicles.length} Vehicles created.\n`);

        const truckAlpha = vehicles[0];
        const vanBeta = vehicles[1];
        const carDelta = vehicles[2];
        const busEpsilon = vehicles[3];
        const bikeGamma = vehicles[4];

        // 4. Create Drivers
        console.log("🧑‍✈️ Seeding Drivers...");
        
        const driversData = [
            {
                name: "Rajesh Kumar",
                email: "rajesh@fleetflow.com",
                phone: "9876543220",
                licenseNumber: "DL-1420230012345",
                licenseExpiry: new Date("2030-12-31"),
                safetyScore: 92,
                rating: 4.5,
                ratingCount: 32,
                status: "on_duty",
                assignedVehicle: null,
                createdBy: safetyUser._id,
            },
            {
                name: "Amit Singh",
                email: "amit@fleetflow.com",
                phone: "9876543221",
                licenseNumber: "DL-1420230012346",
                licenseExpiry: new Date("2028-06-15"),
                safetyScore: 88,
                rating: 4.2,
                ratingCount: 28,
                status: "on_trip",
                assignedVehicle: vanBeta._id,
                createdBy: safetyUser._id,
            },
            {
                name: "Suresh Pal",
                email: "suresh@fleetflow.com",
                phone: "9876543222",
                licenseNumber: "DL-1420230012347",
                licenseExpiry: new Date("2027-11-20"),
                safetyScore: 95,
                rating: 4.8,
                ratingCount: 40,
                status: "off_duty",
                assignedVehicle: null,
                createdBy: safetyUser._id,
            },
            {
                name: "Vijay Patel",
                email: "vijay@fleetflow.com",
                phone: "9876543223",
                licenseNumber: "DL-1420230012348",
                licenseExpiry: new Date("2026-09-10"),
                safetyScore: 55,
                rating: 2.5,
                ratingCount: 15,
                status: "suspended",
                assignedVehicle: null,
                createdBy: safetyUser._id,
            },
        ];

        const drivers = await Driver.create(driversData);
        console.log(`✅ ${drivers.length} Drivers created.\n`);

        const driverRajesh = drivers[0];
        const driverAmit = drivers[1];
        const driverSuresh = drivers[2];
        const driverVijay = drivers[3];

        // 5. Generate Trips & Linked Expenses Programmatically
        // Covering January to July 2026 (7 Months of data for timeline graphs)
        console.log("🗺️ Generating Trips & Linked Expenses from Jan to Jul 2026...");
        const tripsData = [];
        const expensesData = [];

        // Odometer tracking maps
        const currentOdometers = {
            [truckAlpha._id.toString()]: 30000,
            [vanBeta._id.toString()]: 15000,
            [carDelta._id.toString()]: 5000,
            [bikeGamma._id.toString()]: 2000,
        };

        // Standard Route List
        const routes = [
            { origin: "Ahmedabad Hub", destination: "Mumbai Depot", distance: 530, cargoWeight: 8500 },
            { origin: "Mumbai Depot", destination: "Pune Depot", distance: 150, cargoWeight: 7500 },
            { origin: "Pune Depot", destination: "Vadodara Hub", distance: 510, cargoWeight: 8200 },
            { origin: "Vadodara Hub", destination: "Surat Depot", distance: 150, cargoWeight: 1200 },
            { origin: "Surat Depot", destination: "Ahmedabad Hub", distance: 260, cargoWeight: 1400 },
            { origin: "Ahmedabad Hub", destination: "Rajkot Depot", distance: 220, cargoWeight: 600 },
            { origin: "Rajkot Depot", destination: "Jamnagar Hub", distance: 90, cargoWeight: 500 },
            { origin: "Jamnagar Hub", destination: "Ahmedabad Hub", distance: 310, cargoWeight: 800 },
            { origin: "Ahmedabad Hub", destination: "GIFT City", distance: 30, cargoWeight: 50 },
            { origin: "GIFT City", destination: "Gandhinagar Depot", distance: 15, cargoWeight: 30 }
        ];

        // Loop months: January (0) to July (6)
        for (let m = 0; m < 7; m++) {
            // Generate 4 trips per month (Jan-Jun), and 3 trips in July
            const tripsCount = (m === 6) ? 3 : 4;
            
            for (let t = 0; t < tripsCount; t++) {
                // Select vehicle and driver
                let vehicle, driver;
                if (t === 0) {
                    vehicle = truckAlpha;
                    driver = driverRajesh;
                } else if (t === 1) {
                    vehicle = vanBeta;
                    driver = driverAmit;
                } else if (t === 2) {
                    vehicle = carDelta;
                    driver = driverSuresh;
                } else {
                    vehicle = bikeGamma;
                    driver = driverSuresh;
                }

                // Choose route cyclically
                const routeIndex = (m * 4 + t) % routes.length;
                const route = routes[routeIndex];

                // Adapt cargo weight to vehicle capacity limits
                let cargo = route.cargoWeight;
                if (vehicle.type === "bike") cargo = Math.min(cargo, 100);
                if (vehicle.type === "car") cargo = Math.min(cargo, 400);
                if (vehicle.type === "van") cargo = Math.min(cargo, 1800);

                const startOdo = currentOdometers[vehicle._id.toString()];
                const endOdo = startOdo + route.distance;
                currentOdometers[vehicle._id.toString()] = endOdo;

                // Dates calculation (distribute dates over the month)
                const day = 5 + (t * 6);
                const startDate = new Date(2026, m, day, 8, 0, 0);
                const endDate = new Date(2026, m, day, 17, 30, 0);

                // Make the very last trip in July active ("dispatched") and another draft
                let status = "completed";
                if (m === 6 && t === 1) {
                    status = "dispatched"; // Van Beta currently on active trip
                } else if (m === 6 && t === 2) {
                    status = "draft"; // Bike Gamma local dispatch trip
                }

                tripsData.push({
                    vehicle: vehicle._id,
                    driver: driver._id,
                    cargoWeight: cargo,
                    origin: route.origin,
                    destination: route.destination,
                    distance: route.distance,
                    status: status,
                    startOdometer: startOdo,
                    endOdometer: (status === "completed") ? endOdo : null,
                    startDate: startDate,
                    endDate: (status === "completed") ? endDate : null,
                    notes: `Standard cargo transit run from ${route.origin} to ${route.destination}.`,
                    rating: (status === "completed") ? (Math.floor(Math.random() * 2) + 4) : 0, // 4 or 5 star rating
                    createdBy: dispatcherUser._id,
                });
            }
        }

        const createdTrips = await Trip.create(tripsData);
        console.log(`✅ ${createdTrips.length} Trips created.`);

        // Now generate fuel and toll expenses dynamically based on completed trips
        for (const trip of createdTrips) {
            if (trip.status === "completed") {
                const vehicle = vehicles.find(v => v._id.toString() === trip.vehicle.toString());
                
                // Set efficiency details
                let kmPerLiterOrKg = 12; // default
                let fuelCost = 100; // default petrol

                if (vehicle.type === "truck") {
                    kmPerLiterOrKg = 4; // heavy truck uses diesel
                    fuelCost = 90;
                } else if (vehicle.type === "van") {
                    kmPerLiterOrKg = 15; // cng van
                    fuelCost = 80;
                } else if (vehicle.type === "bike") {
                    kmPerLiterOrKg = 50; // fuel efficient bike
                    fuelCost = 100;
                }

                const fuelUsed = Math.round((trip.distance / kmPerLiterOrKg) * 10) / 10;
                const totalFuelCost = Math.round(fuelUsed * fuelCost);

                // Push Fuel Expense
                expensesData.push({
                    vehicle: trip.vehicle,
                    trip: trip._id,
                    type: "fuel",
                    amount: totalFuelCost,
                    liters: fuelUsed,
                    date: trip.endDate,
                    notes: `Refuel for ${trip.origin} ➔ ${trip.destination} run.`,
                    createdBy: financeUser._id,
                });

                // Add Toll Fee for long distances (>100 km)
                if (trip.distance > 100) {
                    const tollCost = Math.round(trip.distance * 1.5);
                    expensesData.push({
                        vehicle: trip.vehicle,
                        trip: trip._id,
                        type: "other",
                        amount: tollCost,
                        date: trip.endDate,
                        notes: `Expressway fastag toll charge. Route: ${trip.origin} ➔ ${trip.destination}`,
                        createdBy: financeUser._id,
                    });
                }
            }
        }

        // Update Vehicles' current odometer readings to match their final trip values
        for (const vehicleId of Object.keys(currentOdometers)) {
            await Vehicle.findByIdAndUpdate(vehicleId, {
                currentOdometer: currentOdometers[vehicleId]
            });
        }
        console.log("✅ Vehicle odometer readings synchronized with final trip values.");

        // 6. Create Maintenance Logs & Linked Maintenance Expenses
        console.log("🔧 Seeding Maintenance Logs...");
        
        const maintenanceData = [
            {
                vehicle: truckAlpha._id,
                serviceType: "oil_change",
                description: "Replaced engine synthetic oil, oil filter, and air filter element.",
                cost: 6500,
                serviceDate: new Date(2026, 0, 15), // January
                completionDate: new Date(2026, 0, 15),
                status: "completed",
                mechanic: "Jay Bharat Truck Garage",
                notes: "Lube service completed.",
                createdBy: safetyUser._id,
            },
            {
                vehicle: vanBeta._id,
                serviceType: "tire_rotation",
                description: "4-wheel rotation, balancing, and alignment.",
                cost: 2400,
                serviceDate: new Date(2026, 1, 10), // February
                completionDate: new Date(2026, 1, 10),
                status: "completed",
                mechanic: "Sharma Motors",
                createdBy: safetyUser._id,
            },
            {
                vehicle: carDelta._id,
                serviceType: "inspection",
                description: "Full diagnostic safety inspection and computer scan.",
                cost: 1200,
                serviceDate: new Date(2026, 2, 22), // March
                completionDate: new Date(2026, 2, 22),
                status: "completed",
                mechanic: "Maruti Service Hub",
                createdBy: safetyUser._id,
            },
            {
                vehicle: truckAlpha._id,
                serviceType: "brake_service",
                description: "Front brake pads skimming and new pad set installation.",
                cost: 5500,
                serviceDate: new Date(2026, 3, 18), // April
                completionDate: new Date(2026, 3, 18),
                status: "completed",
                mechanic: "Jay Bharat Truck Garage",
                createdBy: safetyUser._id,
            },
            {
                vehicle: bikeGamma._id,
                serviceType: "general",
                description: "Periodic tuning, spark plug cleanup, chain tightening & lubrication.",
                cost: 800,
                serviceDate: new Date(2026, 4, 12), // May
                completionDate: new Date(2026, 4, 12),
                status: "completed",
                mechanic: "Local TVS Autocare",
                createdBy: safetyUser._id,
            },
            {
                vehicle: vanBeta._id,
                serviceType: "engine_repair",
                description: "Radiator leak repair, coolant flush, and hose replacement.",
                cost: 4200,
                serviceDate: new Date(2026, 5, 20), // June
                completionDate: new Date(2026, 5, 20),
                status: "completed",
                mechanic: "Sharma Motors",
                createdBy: safetyUser._id,
            },
            {
                vehicle: carDelta._id,
                serviceType: "brake_service",
                description: "Brake calipers replacement and fluid bleeding.",
                cost: 4500,
                serviceDate: new Date(2026, 6, 12), // July (Current)
                status: "in_progress", // Car Delta remains in shop
                mechanic: "Maruti Service Hub",
                createdBy: safetyUser._id,
            },
        ];

        const createdMaintenance = await Maintenance.create(maintenanceData);
        console.log(`✅ ${createdMaintenance.length} Maintenance records created.`);

        // Add maintenance costs to expenses
        for (const mLog of createdMaintenance) {
            if (mLog.status === "completed") {
                expensesData.push({
                    vehicle: mLog.vehicle,
                    type: "maintenance",
                    amount: mLog.cost,
                    date: mLog.completionDate,
                    notes: `Service Invoice: ${mLog.description}`,
                    createdBy: financeUser._id,
                });
            }
        }

        // Add annual insurance costs for vehicles
        expensesData.push({
            vehicle: truckAlpha._id,
            type: "insurance",
            amount: 24000,
            date: new Date(2026, 0, 5), // Jan
            notes: "Annual comprehensive commercial vehicle insurance policy renewal.",
            createdBy: financeUser._id,
        });

        expensesData.push({
            vehicle: vanBeta._id,
            type: "insurance",
            amount: 12000,
            date: new Date(2026, 1, 15), // Feb
            notes: "Annual logistics insurance coverage.",
            createdBy: financeUser._id,
        });

        // Save all accumulated expenses
        const createdExpenses = await Expense.create(expensesData);
        console.log(`✅ ${createdExpenses.length} Expense records saved.\n`);

        console.log("🎉 Seed Data Reset and Insertion Complete!");
        console.log("==========================================");
        console.log("📊 DATABASE SUMMARY STATS (JANUARY - JULY 2026):");
        console.log(`   👥 Users:               ${await User.countDocuments()}`);
        console.log(`   🚗 Vehicles:            ${await Vehicle.countDocuments()}`);
        console.log(`   🧑‍✈️ Drivers:             ${await Driver.countDocuments()}`);
        console.log(`   🗺️ Trips:               ${await Trip.countDocuments()}`);
        console.log(`   💰 Expenses:            ${await Expense.countDocuments()}`);
        console.log(`   🔧 Maintenance Logs:    ${await Maintenance.countDocuments()}`);
        console.log("==========================================");

        process.exit(0);
    } catch (error) {
        console.error("❌ Seed execution error:", error);
        process.exit(1);
    }
}

seed();
