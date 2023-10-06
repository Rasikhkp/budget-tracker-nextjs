export const Nav = () => {
	return (
		<nav className="flex items-center w-full h-16 bg-blue-500 drop-shadow-md">
			<div className="flex items-center justify-center w-32 h-full">
				<svg
					width="40px"
					height="40px"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<g id="dollars" transform="translate(-777 -183)">
							{" "}
							<circle
								id="Ellipse_15"
								data-name="Ellipse 15"
								cx="15"
								cy="15"
								r="15"
								transform="translate(778 184)"
								fill="#fff1b6"
								stroke="#333"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							></circle>{" "}
							<g id="Group_47" data-name="Group 47">
								{" "}
								<line
									id="Line_63"
									data-name="Line 63"
									y2="20"
									transform="translate(793 189)"
									fill="#ffffff"
									stroke="#333"
									stroke-miterlimit="10"
									stroke-width="2"
								></line>{" "}
								<g id="Group_46" data-name="Group 46">
									{" "}
									<path
										id="Path_51"
										data-name="Path 51"
										d="M792.985,199a3.5,3.5,0,1,1,3.486-3.5"
										fill="none"
										stroke="#333"
										stroke-miterlimit="10"
										stroke-width="2"
									></path>{" "}
									<path
										id="Path_52"
										data-name="Path 52"
										d="M793.015,199a3.5,3.5,0,1,1-3.486,3.5"
										fill="none"
										stroke="#333"
										stroke-miterlimit="10"
										stroke-width="2"
									></path>{" "}
								</g>{" "}
							</g>{" "}
						</g>{" "}
					</g>
				</svg>
			</div>
			<div className="ml-3 text-2xl text-white">Dashboard</div>
		</nav>
	);
};
