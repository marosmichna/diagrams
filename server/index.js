import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js"
import transactionRoutes from "./routes/transaction.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

/* CONFIGURATIONS */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("comon"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(
    {
        origin: ["https://diagrams-gf1z.vercel.app"],
        methods: ["GET"],
        credentials: true
    }
));

const MONGO_URL='mongodb+srv://maros24121990:1234@cluster0.uhtzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'



/* ROUTES */

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */

const PORT = 1337 || 9000;
mongoose
    .connect(MONGO_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(async () => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        /* Add Data One Time Only or as nedded */

        // await mongoose.connection.db.dropDatabase();
        // KPI.insertMany(kpis);
        // Product.insertMany(products);
        // Transaction.insertMany(transactions);

    })
    .catch((error) => console.log(`${error} did not connect`));