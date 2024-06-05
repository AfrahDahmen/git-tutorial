import React from "react";
import Dropdown from "@/components/ui/Dropdown";
import Icon from "@/components/ui/Icon";
import { Menu } from "@headlessui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { accountService } from "@/_services/account.service";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let UserName = localStorage.getItem("nom");
  let UserRole = localStorage.getItem("role");

  const ProfileMenuSeller = [
    {
      label: "Profile",
      icon: "heroicons-outline:user",
      action: () => {
        navigate("/seller/profile");
      },
    },
    {
      label: "Deconnecter",
      icon: "heroicons-outline:login",
      action: () => {
        accountService.logout();
        navigate("/auth/login");
      },
    },
  ];

  const ProfileMenuAdmin = [
    {
      label: "Gestion de profil",
      icon: "heroicons-outline:user-circle",
      action: () => {
        navigate("/gestionProfile/gestion");
      },
    },
    {
      label: "Deconnecter",
      icon: "heroicons-outline:login",
      action: () => {
        accountService.logout();
        navigate("/auth/login");
      },
    },
  ];

  let ProfileMenu = [];

  if (UserRole === "seller") {
    ProfileMenu = ProfileMenuSeller;
  } else {
    ProfileMenu = ProfileMenuAdmin;
  }

  return (
    <Dropdown
      label={
        <div className="flex items-center">
          <div className="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">
            Admin
            </span>
            <span className="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
              <Icon icon="heroicons-outline:chevron-down"></Icon>
            </span>
          </div>
        </div>
      }
      classMenuItems="w-[180px] top-[58px]"
    >
      {ProfileMenu.map((item, index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <div
              onClick={() => item.action()}
              className={`${
                active
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50"
                  : "text-slate-600 dark:text-slate-300"
              } block ${
                item.hasDivider
                  ? "border-t border-slate-100 dark:border-slate-700"
                  : ""
              }`}
            >
              <div className={`block cursor-pointer px-4 py-2`}>
                <div className="flex items-center">
                  <span className="block text-xl ltr:mr-3 rtl:ml-3">
                    <Icon icon={item.icon} />
                  </span>
                  <span className="block text-sm">{item.label}</span>
                </div>
              </div>
            </div>
          )}
        </Menu.Item>
      ))}
    </Dropdown>
  );
};

export default Profile;
