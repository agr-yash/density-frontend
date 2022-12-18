import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import LibraryBooksTwoToneIcon from "@mui/icons-material/LibraryBooksTwoTone";

const Navbar = () => {
  const arr = Array.from(Array(36).keys());

  return (
    <div className="navbar">
      <div className="left-container">
        <div className="density-brand">
          <div className="density-logo">
            {arr.map((ele, index) => {
              return <div key={index} className="grid-item"></div>;
            })}
          </div>
          <div className="density-heading">density</div>
        </div>
        <ul>
          <li>Onboarding</li>
          <li>Deposit</li>
          <li>Withdraw</li>
          <li>Adjust Margin</li>
        </ul>
      </div>
      <div class="icons">
        <LibraryBooksTwoToneIcon />
        <AccountBalanceWalletTwoToneIcon />
        <PermIdentityTwoToneIcon />
        <NotificationsNoneTwoToneIcon />
        <LogoutIcon />
      </div>
    </div>
  );
};

export default Navbar;
