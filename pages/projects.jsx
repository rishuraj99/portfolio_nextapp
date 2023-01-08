import Link from "next/link";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import StarIcon from "@mui/icons-material/Star";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = ({ data }) => {
  console.log(data);
  console.log(data.items);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        columnGap: "30px",
        rowGap: "20px",
      }}
    >
      {data.items.map((el,i) => (
        <Link key={el.i} href={el.html_url}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "2px solid black",
              padding: "1rem",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color:'black'
                }}
              >
                <FolderIcon /> <span>{el.name}</span>
              </div>
              <p>{el.description}</p>
              <div style={{ display: "flex", alignItems: "center" ,columnGap:'10px' }}>
                <StarIcon /> <span>{el.watchers}</span>
                <GitHubIcon /> <span>{el.forks}</span>
              </div>
            </div>
            <div>{el.language}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.github.com/search/repositories?q=user:rishuraj99+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data: data } };
}

export default Projects;