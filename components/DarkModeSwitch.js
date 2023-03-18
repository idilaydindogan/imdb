"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === "system" ? systemTheme : theme;
	return (
		<>
			{mounted &&
				(currentTheme === "dark" ? (
					<button
						onClick={() => setTheme("light")}
						className="text-xl cursor-pointer hover:text-amber-500"
					>
						<MdLightMode />
					</button>
				) : (
					<button
						onClick={() => setTheme("dark")}
						className="text-xl cursor-pointer hover:text-amber-500"
					>
						<BsFillMoonFill />
					</button>
				))}
		</>
	);
};

export default DarkModeSwitch;
