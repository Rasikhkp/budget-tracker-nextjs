"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import panahKanan from "../gambar/panah-kanan.png";
import { TransaksiContext } from "../context/TransaksiContext";

export const Show = ({ lists }) => {
	// const [transaksi, setTransaksi] = useState([]);
	// console.log("rerender");

	// useEffect(() => {
	// 	fetch("api/transaksi")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setTransaksi(data);
	// 		});
	// }, []);
	const { transaksi } = useContext(TransaksiContext);

	return (
		<div className="w-full mt-5 pb-52">
			{transaksi.map((item, index) => {
				return (
					<div key={index}>
						<div key={index} className="font-bold">
							13.00
							<Image
								src={panahKanan}
								width={18}
								className="inline"
								alt=""
							/>
						</div>
						<div className="flex justify-end w-full">
							<div className="w-72 h-14 rounded-2xl bg-[#FAE0BB] p-2 flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="p-5 rounded-xl bg-[#FFCC80]"></div>
									<div className="font-bold">
										<div className="text-sm">Makanan</div>
										<div className="text-xs">{item.keterangan}</div>
									</div>
								</div>
								<div className="text-[#BE505B] font-bold text-lg">
									-{item.harga}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
