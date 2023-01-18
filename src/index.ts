import app from "./app";
import { PORT } from "./config";
import { AppDataSource } from "./db";

async function main() {
    try{
        await AppDataSource.initialize();
        app.listen(PORT);
        console.log("✅ DB is connected");
        console.log("🟢 Running on port", PORT);
    }
    catch(err){
        console.log("❌ DB is not connected" + err);
    }
}

main();
