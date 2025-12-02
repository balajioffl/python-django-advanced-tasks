
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => 
  {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) 
    {
      setImageUrl(savedImage);
    }
  }, []);

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post("http://localhost:8000/api/upload/", formData, 
    {
      headers: { "Content-Type": "multipart/form-data" }
    });

    const url = res.data.image;
    console.log(res.data)

    setImageUrl(url);
    localStorage.setItem("uploadedImage", url);

  };

  return (
    <div className="container">
      <input type="file" className="upload-btn" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadImage}>Upload</button>

      {imageUrl && 
      (
        <div className="preview-box">

          <h3>Uploaded Image</h3>
          <img src={`http://localhost:8000${imageUrl}`} width="200" />

        </div>
      )}
     </div>
  );
}

export default App;
