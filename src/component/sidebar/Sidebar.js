import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./Submenu";
import { IconContext } from "react-icons/lib";
import logo from "../../assets/images/ic_dolphin.png";
import "./Sidebar.css";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  // left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#2c2c2c" }}>
        <SidebarNav>
          <SidebarWrap>
            <NavIcon to="#">
              <img
                className="logo"
                src={logo}
                alt="logo"
                // onClick={showSidebar}
              />
              <div
                className="row logo-text"
                style={{ margin: 10 }}
                // onClick={showSidebar}
              >
                <h5>3DOLPHINS</h5>
                <p>Version 5.2.X</p>
              </div>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
