"use client";

import { useContext, useState, useEffect } from "react";
import pensil from "../gambar/pensil.png";
import Image from "next/image";
import { TransaksiContext } from "../context/TransaksiContext";

export const Create = ({ onBuatTransaksi }) => {
	const [modal, setModal] = useState(false);
	const [ket, setKet] = useState("");
	const [harga, setHarga] = useState();
	const { setTransaksi } = useContext(TransaksiContext);

	const buatTransaksi = async () => {
		const res = await fetch("api/transaksi", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ket, harga }),
		});
		console.log(res.data);
		setModal(false);
		setKet("");
		setHarga();
		// setTransaksi(res);
	};

	useEffect(() => {
		async function ambilTransaksi() {
			const res = await fetch("api/transaksi");
			const data = await res.json();

			setTransaksi(data);
		}

		ambilTransaksi();
	}, []);

	return (
		<div className="fixed z-10">
			<button
				onClick={() => setModal(true)}
				className="flex justify-end mb-5 fixed bottom-[85px] w-[345px] translate-x-5"
			>
				<div className="w-10 bottom-28 h-10 flex items-center justify-center rounded-xl  bg-[#BE505B] drop-shadow">
					<Image alt="" src={pensil} width={20} />
				</div>
			</button>

			<div
				onClick={() => setModal(false)}
				className={`fixed backdrop-blur-sm transition-opacity duration-500 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-screen h-screen bg-black/50 ${
					modal ? "opacity-100" : "-z-10 opacity-0"
				}`}
			></div>

			<div
				className={`left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-2xl bg-[#FDE5C3] w-72 fixed p-5 ${
					modal ? "opacity-100" : "hidden opacity-0"
				}`}
			>
				<label htmlFor="keterangan">Keterangan</label>
				<input
					onInput={(e) => setKet(e.target.value)}
					value={ket}
					type="text"
					name="keterangan"
					id="keterangan"
					className="py-2 px-4 w-full my-1 rounded-md outline-none bg-[#f3dcbb]"
					placeholder="Bakso Urat"
				/>
				<label htmlFor="keterangan">Harga</label>
				<input
					onInput={(e) => setHarga(e.target.value)}
					value={harga || ""}
					type="number"
					name="keterangan"
					id="keterangan"
					className="py-2 px-4 w-full my-1 rounded-md outline-none bg-[#f3dcbb]"
					placeholder="40000"
				/>
				<div className="flex justify-between gap-3 mt-5">
					<button
						onClick={() => setModal(false)}
						className="flex-1 py-2 text-center rounded-xl transition-all bg-[#FEDEAF] hover:bg-[#e9cca0] focus:bg-[#c0a884]"
					>
						Cancel
					</button>
					<button
						onClick={buatTransaksi}
						className="flex-1 py-2 text-center rounded-xl transition-all bg-[#FFCC80] hover:bg-[#e4b672] focus:bg-[#be985f]"
					>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};
