
import { useEffect, useState } from 'react'

import SearchBar from './components/SearchBar/SearchBar'
import { fetchPhotosByInput } from './photos-api'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'

function App() {

  const [inputSearch, setInputSearch] = useState("")
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(false)
  const [showBtn, setShowBtn] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [description, setDescription] = useState(null);


  useEffect(() => { 
    if (!inputSearch) return;

    async function fetchPhotos() { 
      try{ 
        setLoading(true);
        const {total_pages, results} = await fetchPhotosByInput(inputSearch, page);
        setPhotos((prevPhotos) => [...prevPhotos, ...results]);
        setShowBtn(total_pages > page);
}
      catch(error) {setError(true)}

      finally { setLoading(false);}
      
    }
    fetchPhotos()
  },[inputSearch, page])


  const onSubmit = (inputSearch) =>{
  setInputSearch(inputSearch);
  setPhotos([]);
  setPage(1);
  setShowBtn(false)
}

const onClickButton = () => {
  setPage((prevPage) => prevPage + 1);
 
};

const openModal = (urlModal,description) => {
  setImageSrc(urlModal);
  setDescription(description);
};

const closeModal = () => {
  setImageSrc(null)
};

  

  return (<>
    <SearchBar onSubmit={onSubmit} />
    {loading && <Loader/>}
    {error && <ErrorMessage/>}
    {photos.length !== 0 && <ImageGallery photos={photos} openModal={openModal}/>}
    {showBtn && <LoadMoreBtn onClickButton={onClickButton} />}
    <ImageModal isOpen={imageSrc !== null} onClose={closeModal} urlModal={imageSrc} description={description}/>
  
  
  </>)
}

export default App