import { ConfigProvider } from "antd";
interface IAntdConfigPrvider {
  children?: React.ReactNode;
}
export const AntdConfigProvider = ({ children }: IAntdConfigPrvider) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000000",
          fontFamily: '"Oswald", Arial, sans-serif',
          // fontSize: 20,
        },
        components: {
          Modal: {
            colorIcon: "#FFFFFF",
            wireframe: true,
          },
          Menu: {
            colorText: "#ffffff",
            itemHoverColor: "#ff6000",
            colorPrimary: "#ff6000",
          },
          Button: {
            // colorPrimary: "$third-color",
            fontFamily: '"Oswald", Arial, sans-serif',
            fontSize: 20,
            // algorithm: true,
            defaultBg: "#ff6000",
            defaultBorderColor: "#ff6000",
            defaultHoverBorderColor: "#ff6000",
            defaultHoverBg: "#ff6000",
            defaultColor: "#ffffff",
            defaultHoverColor: "#ffffff",
          },
          Collapse: {
            // colorText: ""
            colorTextHeading: "#ffffff",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
