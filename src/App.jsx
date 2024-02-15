import { useState } from 'react'
import './App.css'
import axios from 'axios'
import {Imgs} from './components/Imgs'

function App() {
  const [files, setFiles ]= useState("")
  
  const [image, setImage] =  useState("");  
  const [uploadedImg, setUploadedImg] = useState("");
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const result = await axios.post("http://localhost:8081", {
      image: image
    })
    try {
      const uploadedImage = result.data.public_id;
      setUploadedImg(uploadedImage);
    } catch (error) {
      console.log(error);
    }
  }
  const previewFiles = (file) =>{
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend= () =>{
      setImage(reader.result);
      console.log(image);
    }

  }
  const handleChange = (e)=>{
    const file= e.target.files[0];
    setFiles(files);
    previewFiles(file)
  }

  return (
    <section>
      <div className="form">
      <form onSubmit= {(e)=> handleSubmit(e)}>
        <label htmlFor="fileInput" >Upload your photo here</label>
        <input type="file"  id="fileInput" onChange={(e) => handleChange(e)} required accept="image/png, image/jpeg, image.jfif"/>
        <button>Submit</button>
      </form>
      </div>
      <img src={image} alt="" />
      <Imgs uploadedImage = {uploadedImg}/>
      <Imgs uploadedImage = {uploadedImg}/>
      <Imgs uploadedImage = {uploadedImg}/>
      <Imgs uploadedImage = {uploadedImg}/>




    </section>
  )
}

export default App
