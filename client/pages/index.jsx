import { useState } from "react";
import { Layout, Nav, BottomNavigate } from "../components";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Layout title={"หน้าแรก"}>
      <Nav />
      <section className="border">
        <div className="rounded-lg shadow-xl">
          <div className=""></div>
        </div>
      </section>
      <BottomNavigate />
    </Layout>
  );
}
