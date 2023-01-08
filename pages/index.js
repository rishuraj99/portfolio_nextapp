import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import Experience from "./experience";
import Projects from "./projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ maindata, secondData }) {
  console.log("data whole", secondData);
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        margin: "auto",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "auto",
          width: "30%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "block",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <Image
            src={secondData.avatar_url}
            height={100}
            width={100}
            alt={secondData.name}
          />
          <h2> {secondData.name}</h2>
          <p> {secondData.bio}</p>
          <Link href="https://drive.google.com/file/d/1LP5TIv6yoBAK4VLmNmEg3riQoujuoRQA/view?usp=sharing">
            <button>Resume</button>
          </Link>
          <Link href={secondData.html_url}>
            <button>Follow</button>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "5px",
            padding: "1rem",
          }}
        >
          <button>Typescript</button>
          <button>Chakra Ui</button>
          <button>Redux</button>
          <button>Mui</button>
          <button>Javascript</button>
          <button>Html</button>
          <button>Css</button>
          <button>Reactjs</button>
        </div>
        <div
          style={{
            gap: "5px",
            padding: "1rem",
          }}
        >
          <Experience />
        </div>
      </div>
      <div
        style={{
          width: "70%",
          height: "auto",
          margin: "auto",
        }}
      >
        <Projects data={maindata} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.github.com/search/repositories?q=user:rishuraj99+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const data = await res.json();

  const userApi = await fetch(`https://api.github.com/users/rishuraj99`);
  const data2 = await userApi.json();

  // Pass data to the page via props
  return { props: { maindata: data, secondData: data2 } };
}