import Layout from '../../layouts/Layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Favorite = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    setSurahs(JSON.parse(localStorage.getItem('favSurahs')));
  }, []);

  return (
    <>
      <Layout title="Favorite">
        <h1 className="text-3xl text-green-dark">Favorite page</h1>
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
                    <i className="bi bi-heart-fill"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default Favorite;
