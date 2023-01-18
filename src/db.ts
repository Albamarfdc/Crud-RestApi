import { DataSource } from "typeorm";
import { User } from "./entities/User";

//conexion de la base de datos
export const AppDataSource = new DataSource ({
type: "postgres",
host: "localhost",
username: "postgres",
password: "1234",
port:5432,
database: "typeormdb",
entities:[User],
logging: true,
synchronize: true,
})

