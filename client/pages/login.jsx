import { Layout } from "../components";
import { TextField, Button } from "@mui/material";
import { Login } from "@mui/icons-material";

const Singin = () => {
  return (
    <Layout>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2B3467"
          fillOpacity="1"
          d="M0,288L26.7,288C53.3,288,107,288,160,261.3C213.3,235,267,181,320,165.3C373.3,149,427,171,480,197.3C533.3,224,587,256,640,261.3C693.3,267,747,245,800,208C853.3,171,907,117,960,101.3C1013.3,85,1067,107,1120,122.7C1173.3,139,1227,149,1280,144C1333.3,139,1387,117,1413,106.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <section className="w-10/12 rounded-lg shadow-lg flex flex-col justify-center items-center py-10 gap-y-7">
        <p className="text-3xl font-semibold text-primary">เข้าสู่ระบบ</p>
        <TextField className="w-11/12" type="text" id="email" label="Email" variant="outlined" />
        <TextField className="w-11/12" type="password" id="password" label="Password" variant="outlined" />
        <button className="text-white px-5 bg-primary rounded-md py-2 flex gap-x-2">
          <Login/>เข้าสู่ระบบ
        </button>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2B3467"
          fillOpacity="1"
          d="M0,256L30,266.7C60,277,120,299,180,288C240,277,300,235,360,208C420,181,480,171,540,165.3C600,160,660,160,720,160C780,160,840,160,900,160C960,160,1020,160,1080,160C1140,160,1200,160,1260,144C1320,128,1380,96,1410,80L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </Layout>
  );
};

export default Singin;
