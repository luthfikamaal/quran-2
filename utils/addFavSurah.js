const addFavSurah = (surahs, number) => {
  const selectedSurah = surahs.find((surah) => surah.number == number);
  let favSurahs = JSON.parse(localStorage.getItem('favSurahs'));
  console.log(favSurahs);
  if (!favSurahs) {
    favSurahs = [selectedSurah];
    localStorage.setItem('favSurahs', JSON.stringify(favSurahs));
    return number;
  }
  let check = favSurahs.find((fav) => fav.number == selectedSurah.number);
  if (check) {
    return false;
  }
  favSurahs.push(selectedSurah);
  localStorage.setItem('favSurahs', JSON.stringify(favSurahs));
  return number;
};

export default addFavSurah;
