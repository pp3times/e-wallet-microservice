import Meta from "./Meta.jsx";

function Layout({ children, title }) {
  return (
    <>
      <Meta title={title} />
      <main className="min-h-screen flex flex-col items-center justify-between bg-screen">{children}</main>
    </>
  );
}

export default Layout;
