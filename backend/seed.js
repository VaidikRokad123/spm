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
                currentOdometer: 30000,
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
                currentOdometer: 15000,
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
                currentOdometer: 5000,
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
                status: "available",
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
                currentOdometer: 2000,
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

        // 5. Generate Trips & Linked Expenses Programmatically
        // Dates cover recent 30-day window (July 19 to August 18, 2026) as well as earlier 2026 months
        console.log("🗺️ Generating Rich Trips & Expenses (Including Recent 30-Day Window)...");
        const tripsData = [];
        const expensesData = [];

        // Odometer tracking maps
        const currentOdometers = {
            [truckAlpha._id.toString()]: 30000,
            [vanBeta._id.toString()]: 15000,
            [carDelta._id.toString()]: 5000,
            [busEpsilon._id.toString()]: 95000,
            [bikeGamma._id.toString()]: 2000,
        };

        const activeVehicles = [truckAlpha, vanBeta, carDelta, busEpsilon, bikeGamma];
        const activeDrivers = [driverRajesh, driverAmit, driverSuresh];

        // Specific trip schedules designed to fall directly in the active date window (July 19 - Aug 18, 2026)
        const recentTripSchedules = [
            // July 20 to Aug 18 entries
            { v: truckAlpha, d: driverRajesh, origin: "Ahmedabad Hub", dest: "Mumbai Depot", dist: 530, cargo: 9500, date: new Date("2026-07-20T08:00:00") },
            { v: vanBeta, d: driverAmit, origin: "Surat Depot", dest: "Vadodara Hub", dist: 150, cargo: 1400, date: new Date("2026-07-22T09:30:00") },
            { v: carDelta, d: driverSuresh, origin: "Ahmedabad Hub", dest: "GIFT City", dist: 40, cargo: 200, date: new Date("2026-07-24T10:00:00") },
            { v: bikeGamma, d: driverRajesh, origin: "Ahmedabad Hub", dest: "Gandhinagar Depot", dist: 30, cargo: 50, date: new Date("2026-07-25T11:00:00") },
            { v: busEpsilon, d: driverAmit, origin: "Rajkot Depot", dest: "Ahmedabad Hub", dist: 220, cargo: 4500, date: new Date("2026-07-27T07:00:00") },

            { v: truckAlpha, d: driverRajesh, origin: "Mumbai Depot", dest: "Pune Depot", dist: 160, cargo: 8800, date: new Date("2026-07-29T08:30:00") },
            { v: vanBeta, d: driverAmit, origin: "Vadodara Hub", dest: "Ahmedabad Hub", dist: 110, cargo: 1200, date: new Date("2026-07-31T09:00:00") },
            { v: carDelta, d: driverSuresh, origin: "GIFT City", dest: "Ahmedabad Hub", dist: 40, cargo: 150, date: new Date("2026-08-02T14:00:00") },
            { v: bikeGamma, d: driverSuresh, origin: "Gandhinagar Depot", dest: "Ahmedabad Hub", dist: 30, cargo: 40, date: new Date("2026-08-04T15:00:00") },
            { v: busEpsilon, d: driverRajesh, origin: "Ahmedabad Hub", dest: "Surat Depot", dist: 260, cargo: 5000, date: new Date("2026-08-05T06:30:00") },

            { v: truckAlpha, d: driverRajesh, origin: "Pune Depot", dest: "Surat Depot", dist: 410, cargo: 9200, date: new Date("2026-08-07T08:00:00") },
            { v: vanBeta, d: driverAmit, origin: "Ahmedabad Hub", dest: "Rajkot Depot", dist: 220, cargo: 1600, date: new Date("2026-08-09T09:30:00") },
            { v: carDelta, d: driverSuresh, origin: "Ahmedabad Hub", dest: "Sanand Industrial Gate", dist: 70, cargo: 300, date: new Date("2026-08-11T10:15:00") },
            { v: bikeGamma, d: driverAmit, origin: "Ahmedabad Hub", dest: "Bavla Station", dist: 45, cargo: 60, date: new Date("2026-08-13T11:00:00") },
            { v: busEpsilon, d: driverSuresh, origin: "Surat Depot", dest: "Rajkot Depot", dist: 450, cargo: 6000, date: new Date("2026-08-14T07:00:00") },

            // Active/Current trips up to Aug 18
            { v: truckAlpha, d: driverRajesh, origin: "Surat Depot", dest: "Ahmedabad Hub", dist: 260, cargo: 10000, date: new Date("2026-08-16T08:00:00") },
            { v: vanBeta, d: driverAmit, origin: "Rajkot Depot", dest: "Jamnagar Hub", dist: 90, cargo: 1100, date: new Date("2026-08-17T09:00:00"), status: "dispatched" },
            { v: bikeGamma, d: driverSuresh, origin: "Ahmedabad Hub", dest: "GIFT City", dist: 35, cargo: 50, date: new Date("2026-08-18T10:00:00"), status: "draft" }
        ];

        for (const item of recentTripSchedules) {
            const startOdo = currentOdometers[item.v._id.toString()];
            const tripStatus = item.status || "completed";
            const endOdo = startOdo + item.dist;

            if (tripStatus === "completed") {
                currentOdometers[item.v._id.toString()] = endOdo;
            }

            const endDate = new Date(item.date.getTime() + 6 * 3600 * 1000); // 6 hours later

            tripsData.push({
                vehicle: item.v._id,
                driver: item.d._id,
                cargoWeight: item.cargo,
                origin: item.origin,
                destination: item.dest,
                distance: item.dist,
                status: tripStatus,
                startOdometer: startOdo,
                endOdometer: (tripStatus === "completed") ? endOdo : null,
                startDate: item.date,
                endDate: (tripStatus === "completed") ? endDate : null,
                notes: `Cargo transport from ${item.origin} to ${item.dest}`,
                rating: (tripStatus === "completed") ? 5 : 0,
                createdBy: dispatcherUser._id,
            });
        }

        const createdTrips = await Trip.create(tripsData);
        console.log(`✅ ${createdTrips.length} Trips created.`);

        // Generate Expenses for completed trips
        for (const trip of createdTrips) {
            if (trip.status === "completed") {
                const vehicle = vehicles.find(v => v._id.toString() === trip.vehicle.toString());
                
                let kmPerLiter = 12;
                let fuelCostPerUnit = 95;

                if (vehicle.type === "truck") {
                    kmPerLiter = 4.2;
                    fuelCostPerUnit = 90;
                } else if (vehicle.type === "bus") {
                    kmPerLiter = 3.8;
                    fuelCostPerUnit = 90;
                } else if (vehicle.type === "van") {
                    kmPerLiter = 14.5;
                    fuelCostPerUnit = 80;
                } else if (vehicle.type === "car") {
                    kmPerLiter = 16.8;
                    fuelCostPerUnit = 96;
                } else if (vehicle.type === "bike") {
                    kmPerLiter = 48.0;
                    fuelCostPerUnit = 96;
                }

                const litersUsed = Math.round((trip.distance / kmPerLiter) * 10) / 10;
                const totalFuelAmount = Math.round(litersUsed * fuelCostPerUnit);

                expensesData.push({
                    vehicle: trip.vehicle,
                    trip: trip._id,
                    type: "fuel",
                    amount: totalFuelAmount,
                    liters: litersUsed,
                    date: trip.endDate || trip.startDate,
                    notes: `Refuel (${litersUsed}L) for route ${trip.origin} ➔ ${trip.destination}`,
                    createdBy: financeUser._id,
                });

                // Toll expense for trips > 100km
                if (trip.distance > 100) {
                    const tollCost = Math.round(trip.distance * 1.8);
                    expensesData.push({
                        vehicle: trip.vehicle,
                        trip: trip._id,
                        type: "other",
                        amount: tollCost,
                        date: trip.endDate || trip.startDate,
                        notes: `Fastag Toll fee for ${trip.origin} ➔ ${trip.destination}`,
                        createdBy: financeUser._id,
                    });
                }
            }
        }

        // Update Vehicles' current odometer readings
        for (const vehicleId of Object.keys(currentOdometers)) {
            await Vehicle.findByIdAndUpdate(vehicleId, {
                currentOdometer: currentOdometers[vehicleId]
            });
        }
        console.log("✅ Vehicle odometers updated with completed trip distances.");

        // 6. Create Maintenance Logs & Linked Expenses (Including July/August 2026)
        console.log("🔧 Seeding Maintenance Logs in active date range...");
        
        const maintenanceData = [
            {
                vehicle: truckAlpha._id,
                serviceType: "oil_change",
                description: "Full Synthetic engine oil & oil filter replacement.",
                cost: 8500,
                serviceDate: new Date("2026-07-21T10:00:00"),
                completionDate: new Date("2026-07-21T16:00:00"),
                status: "completed",
                mechanic: "Jay Bharat Truck Garage",
                notes: "Engine lube service done.",
                createdBy: safetyUser._id,
            },
            {
                vehicle: busEpsilon._id,
                serviceType: "brake_service",
                description: "Heavy bus brake drum resurfacing and lining replacement.",
                cost: 14200,
                serviceDate: new Date("2026-07-26T09:00:00"),
                completionDate: new Date("2026-07-26T17:00:00"),
                status: "completed",
                mechanic: "Ashok Leyland Service Center",
                createdBy: safetyUser._id,
            },
            {
                vehicle: vanBeta._id,
                serviceType: "tire_rotation",
                description: "4-wheel alignment, balancing, and tire rotation.",
                cost: 3200,
                serviceDate: new Date("2026-08-01T10:00:00"),
                completionDate: new Date("2026-08-01T14:00:00"),
                status: "completed",
                mechanic: "Sharma Tyres & Alignment",
                createdBy: safetyUser._id,
            },
            {
                vehicle: carDelta._id,
                serviceType: "inspection",
                description: "Periodic AC filter cleaning and computerized engine scan.",
                cost: 2800,
                serviceDate: new Date("2026-08-06T11:00:00"),
                completionDate: new Date("2026-08-06T15:00:00"),
                status: "completed",
                mechanic: "Maruti Authorized Service",
                createdBy: safetyUser._id,
            },
            {
                vehicle: bikeGamma._id,
                serviceType: "general",
                description: "Spark plug replacement, chain lubing, and brake adjustment.",
                cost: 950,
                serviceDate: new Date("2026-08-10T10:00:00"),
                completionDate: new Date("2026-08-10T12:00:00"),
                status: "completed",
                mechanic: "Local TVS Service Point",
                createdBy: safetyUser._id,
            },
            {
                vehicle: truckAlpha._id,
                serviceType: "brake_service",
                description: "Air brake valve replacement & air pressure test.",
                cost: 6200,
                serviceDate: new Date("2026-08-14T09:00:00"),
                completionDate: new Date("2026-08-14T15:00:00"),
                status: "completed",
                mechanic: "Jay Bharat Truck Garage",
                createdBy: safetyUser._id,
            },
            {
                vehicle: carDelta._id,
                serviceType: "engine_repair",
                description: "Clutch plate overhaul and flywheel refacing.",
                cost: 7500,
                serviceDate: new Date("2026-08-16T09:00:00"),
                status: "in_progress",
                mechanic: "Maruti Authorized Service",
                createdBy: safetyUser._id,
            },
        ];

        const createdMaintenance = await Maintenance.create(maintenanceData);
        console.log(`✅ ${createdMaintenance.length} Maintenance records created.`);

        // Push Maintenance costs to Expenses table so ROI and Cost-per-km graphs render fully
        for (const mLog of createdMaintenance) {
            if (mLog.status === "completed") {
                expensesData.push({
                    vehicle: mLog.vehicle,
                    type: "maintenance",
                    amount: mLog.cost,
                    date: mLog.completionDate || mLog.serviceDate,
                    notes: `Maintenance Service: ${mLog.description}`,
                    createdBy: financeUser._id,
                });
            }
        }

        // Add commercial insurance policy expenses
        expensesData.push({
            vehicle: truckAlpha._id,
            type: "insurance",
            amount: 25000,
            date: new Date("2026-07-20T10:00:00"),
            notes: "Annual Commercial Truck Insurance Renewal",
            createdBy: financeUser._id,
        });

        expensesData.push({
            vehicle: busEpsilon._id,
            type: "insurance",
            amount: 32000,
            date: new Date("2026-07-25T10:00:00"),
            notes: "Annual Passenger Bus Fleet Coverage",
            createdBy: financeUser._id,
        });

        expensesData.push({
            vehicle: vanBeta._id,
            type: "insurance",
            amount: 14000,
            date: new Date("2026-08-01T10:00:00"),
            notes: "Logistics Delivery Van Insurance Policy",
            createdBy: financeUser._id,
        });

        // Save all accumulated expenses
        const createdExpenses = await Expense.create(expensesData);
        console.log(`✅ ${createdExpenses.length} Total Expense records saved.\n`);

        console.log("🎉 Seed Data Reset and Insertion Complete!");
        console.log("==========================================");
        console.log("📊 DATABASE SUMMARY STATS:");
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
