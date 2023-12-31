import connectDB from "@/libs/mongodb";
import Transaksi from "@/models/transaksi";
import { NextResponse } from "next/server";

export async function POST(req) {
	const { ket, harga } = await req.json();
	// console.log("transaksi");

	try {
		await connectDB();
		await Transaksi.create({ keterangan: ket, harga: harga });
		const data = await Transaksi.find();

		return NextResponse.json(data);
	} catch (error) {
		console.log(error);
	}
}

export async function GET() {
	await connectDB();
	const data = await Transaksi.find();
	return NextResponse.json(data);
}
