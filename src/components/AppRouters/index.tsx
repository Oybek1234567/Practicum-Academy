import { Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Icons } from "../../assets/Icons";
import { MenuList } from "../../constants/data";
import { Link, Route, Routes } from "react-router-dom";
import { Router } from "../../constants/routes";
import HeaderPage from "../../page/header";

const AppRouters = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();
    return (
        <div>
            <Layout style={{ width: "100%", height: "120vh" }}>
                <Sider
                    trigger={null}
                    width={"20%"}
                    style={{ backgroundColor: "#166199" }}>
                    <div className='demo-logo-vertical' />
                    <Link to={"/"}>
                    <Icons.logo
                        
                        style={{
                            marginLeft: "30px",
                            marginTop: "46px",
                        }}
                        
                    />
                    </Link>
                    <Menu
                        theme='dark'
                        mode='inline'
                        defaultSelectedKeys={["1"]}
                        items={MenuList.map(
                            ({ id, title, path, icon, children }) => {
                                if (children) {
                                    return {
                                        key: id,
                                        label: <Link to={path}>{title}</Link>,
                                        icon: icon,
                                    };
                                }
                                return {
                                    key: id,
                                    label: <Link to={path}>{title}</Link>,
                                    icon: icon,
                                };
                            }
                        )}
                        style={{
                            marginTop: "150px",
                            backgroundColor: "inherit",
                            fontSize: "18px",
                            letterSpacing: "2px",
                            width: "80%",
                            marginLeft: "20px",
                            marginRight: "20px"
                        }}
                    />
                </Sider>
                <Icons.close style={{ marginTop: "132px", transform: "translateX(-20px)" }} />
                <Layout style={{ backgroundColor: "#F6F6F8" }}>
                        <HeaderPage />
                    <Content
                        style={{
                            marginTop: "100px",
                            padding: 24,
                            minHeight: 280,
                            background: "#F6F6F8",
                            borderRadius: borderRadiusLG,
                        }}>
                        <Routes>
                            {Router.map((item) => (
                                <Route
                                    path={item.path}
                                    element={item.element}
                                    key={item.id}
                                />
                            ))}
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AppRouters;
