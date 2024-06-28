import { useState } from "react";
import cls from "./HeaderAnchor.module.sass";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Anchor, Drawer } from "antd";

interface IHeaderAnchor {
  items: {
    title: string;
    key: string;
    href: string;
  }[];
}

export const HeaderAnchor = ({items}:IHeaderAnchor) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={cls.anchor}>
      <div className={cls.menu_icon}>
        {!openMenu && (
          <MenuOutlined
            onClick={() => setOpenMenu(true)}
            style={{
              color: "white",
              fontSize: "4rem",
              position: "fixed",
              top: "3rem",
              left: "3rem",
              backgroundColor: "rgba(50, 70, 50, 0.7)",
              padding: '2rem',
              borderRadius: '50%',
              zIndex: 2
            }}
          />
        )}
        {openMenu && (
          <CloseOutlined
            onClick={() => setOpenMenu(true)}
            style={{
              color: "white",
              fontSize: "4rem",
              position: "fixed",
              top: "3rem",
              left: "3rem",
              padding: '2rem',
            }}
          />
        )}
      </div>

      <span className={cls.menu_top}>
        <Anchor
          items={items}
          direction="horizontal"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "3rem",
            justifyItems: "space-around",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></Anchor>
      </span>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        closable={false}
        style={{ backgroundColor: "#161616" }}
        width={"60%"}
      >
        <Anchor items={items}></Anchor>
      </Drawer>
    </div>
  );
};
