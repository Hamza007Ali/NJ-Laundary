import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  let  {headerBtnShow} = props;
	const [headerProps, setHeaderProps] = useState({
		text: "",
		button: false,
	});
	let location = useLocation();
	useEffect(() => {
		switch (location.pathname) {
			case "/residental-wash-&-flod":
				setHeaderProps({
					text: "Residential Wash & Flod",
					button: false,
				});
				break;
        case "/fold":
				setHeaderProps({
					text: "Fold",
					button: false,
				});
				break;
        case "/load":
				setHeaderProps({
					text: "Start / Load",
					button: false,
				});
				break;
        case "/in-progress":
				setHeaderProps({
					text: "In Progress",
					button: false,
				});
				break;
        case "/attendence":
				setHeaderProps({
					text: "Attendance/Driver",
					button: false,
				});
				break;
			default:
				setHeaderProps({
					text: "Welcome Back, MD!",
					button: false,
				});
		}
	}, [location]);

	return (
		<div className="px-6 md:px-[34px]">
			<div className="flex flex-row my-[30px]">
				<Sidebar />
				<div className="w-full ml-0 lg:ml-[104px]">
					<Header headerText={headerProps.text} headerBtnShow={headerBtnShow} />
					{props?.children}
				</div>
			</div>
		</div>
	);
};
export default Layout;
