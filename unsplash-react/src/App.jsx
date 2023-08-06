import { createContext, useState } from "react";
import Images from "./components/Images";
import Bar from "./components/bar";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos_client_id=Pc0UFnaUVTel66qH0U1czn7qae2e4-MxRHRaUT8KB6c`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Bar>
        <SearchField />
      </Bar>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;