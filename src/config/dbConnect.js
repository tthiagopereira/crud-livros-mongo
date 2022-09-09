import mongoose from "mongoose";

//informe a url do caminho do seu mongo
mongoose.connect("");

let db = mongoose.connection;

export default db;