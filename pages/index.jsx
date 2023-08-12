import Link from 'next/link';
import Layout from '../layouts/Layout';
import { useState } from 'react';
import addFavSurah from '../utils/addFavSurah';
import Toast from '../components/Toast';

export default function Home(props) {
  const [process, setProcess] = useState(false);
  const [res, setRes] = useState(false);
  const surahs = props.data.data;

  const addFavList = (e, number) => {
    e.preventDefault;
    console.log(addFavSurah(surahs, number));
    const result = addFavSurah(surahs, number);
    if (!result) {
      setRes(true);
    } else {
      setRes(false);
    }
    setProcess(true);
    setTimeout(() => {
      setProcess(false);
    }, 3000);
  };

  return (
    <>
      <Layout title={'Home'}>
        {process ? <Toast type={res} /> : ''}
        <ul className="pt-3">
          {surahs.map((surah) => (
            <li className="px-3 py-3 rounded-2xl border-4 border-solid border-green-dark mb-3" key={surah.number}>
              <Link className="text-green-dark" href={`/surah/${surah.number}`}>
                <h1 className="font-semibold text-2xl">
                  {surah.englishName} - {surah.name}
                </h1>
              </Link>
              <p className="text-green-dark">{surah.englishNameTranslation}</p>
              <div className="flex">
                <div className="ml-auto flex">
                  <button className="btn btn-green-dark" onClick={(e) => addFavList(e, surah.number)}>
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.alquran.cloud/v1/surah');
  const dataJSON = await res.json();

  return {
    props: {
      data: dataJSON,
    },
  };
}
