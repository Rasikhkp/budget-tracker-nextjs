import mongoose, { Schema } from "mongoose";

const transaksiSchema = new Schema({
	keterangan: String,
	harga: Number,
});

const Transaksi =
	mongoose.models.Transaksi || mongoose.model("Transaksi", transaksiSchema);

export default Transaksi;
