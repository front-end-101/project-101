import './App.css'
import { Routes, Route } from 'react-router-dom'
import Todo from './Todo/Todo'
import ImageSlider from './ImageSlider/ImageSlider'
import Home from './Home/Home'
import Pagination from './pagination/Pagination'
import ImageUploader from './image-uploader/ImageUploader'
import FileStructure from './FileStructure/FileStructure'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<Todo/>} />
        <Route path='/image-slider' element={<ImageSlider/>} />
        <Route path='/pagination' element={<Pagination/>} />
        <Route path='/image-uploader' element={<ImageUploader/>} />
        <Route path='/file-structure' element={<FileStructure/>} />

      </Routes>
    </>
  )
}

export default App
