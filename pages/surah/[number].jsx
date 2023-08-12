import Head from 'next/head';

export default function Surah(props) {
  const surah = props.data.data;
  const pageTitle = `${surah.englishName}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        {surah.ayahs.map((ayah) => (
          <li>{ayah.text}</li>
        ))}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch('https://api.alquran.cloud/v1/surah');
  const dataJSON = await response.json();
  const surahs = dataJSON.data;

  console.log(surahs);
  const paths = surahs.map((surah) => ({
    params: { number: `${surah.number}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://api.alquran.cloud/v1/surah/${params.number}`);
  const dataJSON = await response.json();

  return {
    props: {
      data: dataJSON,
    },
  };
}
