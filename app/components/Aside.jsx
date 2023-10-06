import React from "react";

export const Aside = () => {
	return (
		<aside className="w-32 h-[calc(100vh-64px)] bg-[#FFFFFF] drop-shadow-md">
			<div className="flex flex-col items-center justify-center py-3 transition-all duration-500 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
				<svg
					width="30px"
					height="30px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M12 12C12 11.4477 12.4477 11 13 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H13C12.4477 20 12 19.5523 12 19V12Z"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
						></path>{" "}
						<path
							d="M4 5C4 4.44772 4.44772 4 5 4H8C8.55228 4 9 4.44772 9 5V19C9 19.5523 8.55228 20 8 20H5C4.44772 20 4 19.5523 4 19V5Z"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
						></path>{" "}
						<path
							d="M12 5C12 4.44772 12.4477 4 13 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H13C12.4477 8 12 7.55228 12 7V5Z"
							stroke="#000000"
							stroke-width="2"
							stroke-linecap="round"
						></path>{" "}
					</g>
				</svg>
				<div className="text-sm">Dashboard</div>
			</div>
			<div className="flex flex-col items-center justify-center py-3 transition-all duration-500 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
				<svg
					fill="#000000"
					width="30px"
					height="30px"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path d="M17.0020048,13 C17.5542895,13 18.0020048,13.4477153 18.0020048,14 C18.0020048,14.5128358 17.6159646,14.9355072 17.1186259,14.9932723 L17.0020048,15 L5.41700475,15 L8.70911154,18.2928932 C9.0695955,18.6533772 9.09732503,19.2206082 8.79230014,19.6128994 L8.70911154,19.7071068 C8.34862757,20.0675907 7.78139652,20.0953203 7.38910531,19.7902954 L7.29489797,19.7071068 L2.29489797,14.7071068 C1.69232289,14.1045317 2.07433707,13.0928192 2.88837381,13.0059833 L3.00200475,13 L17.0020048,13 Z M16.6128994,4.20970461 L16.7071068,4.29289322 L21.7071068,9.29289322 C22.3096819,9.8954683 21.9276677,10.9071808 21.1136309,10.9940167 L21,11 L7,11 C6.44771525,11 6,10.5522847 6,10 C6,9.48716416 6.38604019,9.06449284 6.88337887,9.00672773 L7,9 L18.585,9 L15.2928932,5.70710678 C14.9324093,5.34662282 14.9046797,4.77939176 15.2097046,4.38710056 L15.2928932,4.29289322 C15.6533772,3.93240926 16.2206082,3.90467972 16.6128994,4.20970461 Z"></path>{" "}
					</g>
				</svg>
				<div className="text-sm">Transaksi</div>
			</div>
			<div className="flex flex-col items-center justify-center py-3 transition-all duration-500 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
				<svg
					fill="#000000"
					width="30px"
					height="30px"
					viewBox="0 0 24 24"
					data-name="Layer 1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<title></title>
						<path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,10.3H17a2.3,2.3,0,0,1,0-4.6h3ZM20,8H17a4,4,0,0,0,0,8h3v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1Zm-4,4a1,1,0,1,0,1-1A1,1,0,0,0,16,12Z"></path>
					</g>
				</svg>
				<div className="text-sm">Akun</div>
			</div>
		</aside>
	);
};
