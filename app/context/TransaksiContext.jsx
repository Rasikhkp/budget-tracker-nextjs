"use client";

import { createContext, useState } from "react";

export const TransaksiContext = createContext();

export const TransaksiProvider = ({ children }) => {
	const [transaksi, setTransaksi] = useState([]);

	return (
		<TransaksiContext.Provider value={{ transaksi, setTransaksi }}>
			{children}
		</TransaksiContext.Provider>
	);
};
