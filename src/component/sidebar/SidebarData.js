import React from "react";
import "./Sidebardata.css";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as VscIcons from "react-icons/vsc";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as GoIcons from "react-icons/go";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Task Management",
    path: "/taskmanagement",
    icon: <RiIcons.RiTaskFill />,
  },
  {
    title: "Integration",
    path: "/integration",
    icon: <VscIcons.VscSymbolProperty />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Integration 1",
        path: "/integration/integration1",
        icon: <VscIcons.VscSymbolProperty />,
        cName: "sub-nav",
      },
      {
        title: "Integration 2",
        path: "/integration/integration2",
        icon: <VscIcons.VscSymbolProperty />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Marketing",
    path: "/marketing",
    icon: <AiIcons.AiOutlineNotification />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Marketing",
        path: "/marketing/marketing1",
        icon: <AiIcons.AiOutlineNotification />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Customer Service",
    path: "/customerservice",
    icon: <BiIcons.BiArchiveIn />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer Service 1",
        path: "/customerservice/customerservice1",
        icon: <BiIcons.BiArchiveIn />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Bot Settings",
    path: "/botsettings",
    icon: <MdIcons.MdAndroid />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Bot Settings 1",
        path: "/botsettings/botsettings1",
        icon: <MdIcons.MdAndroid />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Analityc",
    path: "/analityc",
    icon: <GoIcons.GoGraph />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Complaint Report",
        path: "/analityc/complaintreport",
        icon: <GoIcons.GoGraph />,
      },
    ],
  },
  {
    title: "API",
    path: "/api",
    icon: <BsIcons.BsCloudUploadFill />,
  },
  {
    title: "Documentation",
    path: "/documentation",
    icon: <BsIcons.BsFillFileTextFill />,
  },
];
