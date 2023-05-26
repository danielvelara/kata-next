import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const searchTerm = context.query.searchTerm;
//   const response = await fetch(
//     `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=8v6g3rCmL618AVSMR99MrtIBksjsWXG6&limit=10`
//   );
//   const json = await response.json();
//   return { props: { gifs: json } };
// };

export default function Search(initialData: any) {
  const router = useRouter();
  const { searchTerm } = router.query;
  //   useEffect(() => {
  //     console.log(initialData);
  //   }, [initialData]);

  return (
    <div>
      <h1>Search for: {searchTerm}</h1>
      {/* {initialData.gifs.data.map((gif: any, i: any) => {
        <div key={i}>
          {" "}
          <h3>{gif.title}</h3>
        </div>;
      })} */}
    </div>
  );
}
