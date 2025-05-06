// src/components/Layout.jsx
const Layout = ({ header, footer, children }) => {
    return (
      <div className="layout">
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
      </div>
    );
  };
  
  export default Layout;
  