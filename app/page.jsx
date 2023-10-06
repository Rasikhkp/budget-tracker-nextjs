import Image from "next/image";
import panahAtas from "./gambar/panah-atas.png";
import panahBawah from "./gambar/panah-bawah.png";
import panahKanan from "./gambar/panah-kanan.png";
import stack from "./gambar/stack.png";
import { Create, Modal } from "./components/Create";
import { Show } from "./components/Show";
import { TransaksiProvider } from "./context/TransaksiContext";

export default function Home() {
	return (
		<TransaksiProvider>
			<div className="max-w-sm mx-auto bg-[#F8E9D4] h-fit text-[#3B424A]">
				<div className="px-5 py-5">
					<div className="flex justify-between">
						<div>
							<div>
								Okt • Pendapatan
								<Image
									className="inline ml-1"
									src={panahAtas}
									width={18}
									alt=""
								/>
							</div>
							<div className="text-[#BE505B] text-3xl font-bold">
								36.000
							</div>
							<div>
								664.000
								<Image
									className="inline ml-1"
									src={stack}
									width={18}
									alt=""
								/>
							</div>
						</div>
						<div>
							<div>
								Okt • Pengeluaran
								<Image
									className="inline ml-1"
									src={panahBawah}
									width={18}
									alt=""
								/>
							</div>
							<div className="text-3xl font-bold">700.000</div>
						</div>
					</div>
				</div>

				<div className="w-full bg-[#FCF1DF] min-h-screen rounded-t-[40px] shadow pt-10 px-5">
					<div className="flex justify-between w-full ">
						<div className="flex gap-2">
							<div className="rounded-lg px-2 flex items-center text-sm text-white bg-[#BE505B]">
								10 01
							</div>
							<div className="rounded-lg px-2 flex items-center text-sm bg-[#E8C0B8]">
								Min
							</div>
						</div>
						<div className="flex gap-2 text-lg font-bold">
							<div>+700.000</div>
							<div className="text-[#BE505B]">-36.000</div>
						</div>
					</div>
					<Show />
				</div>

				<Create />
				<div className="fixed px-5 w-96 bottom-5">
					<div className="p-2 drop-shadow w-full rounded-xl bg-[#FCF1DF] flex items-center justify-between">
						<div className="h-14 rounded-2xl bg-[#FAE0BB] p-2 flex gap-3 items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="p-5 rounded-xl bg-[#FFCC80]"></div>
								<div className="font-bold">Daftar</div>
							</div>
						</div>
						<div className="p-5 rounded-xl bg-[#FFCC80]"></div>
						<div className="p-5 rounded-xl bg-[#FFCC80]"></div>
						<div className="p-5 rounded-xl bg-[#FFCC80]"></div>
					</div>
				</div>
			</div>
		</TransaksiProvider>
	);
}
