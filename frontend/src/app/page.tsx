import CardList from "./components/Home/CardList";
import Navbar from "./components/Home/Navbar";
import SearchBar from "./components/Home/SearchBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <CardList />
    </>
  );
};

export default Home;
