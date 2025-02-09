import React from 'react'
import './GalleryPage.css'
import blank from '../../assets/blank.png'

const galleryData = [
  {
    img: blank,
    title: "Project Title 1",
    description: "Description of the first project or image. Add details about what's happening in this photo."
  },
  {
    img: blank,
    title: "Project Title 2",
    description: "Description of the second project or image. Add details about what's happening in this photo."
  },
  {
    img: blank,
    title: "Project Title 3",
    description: "Description of the third project or image. Add details about what's happening in this photo."
  },
  {
    img: blank,
    title: "Project Title 4",
    description: "Description of the fourth project or image. Add details about what's happening in this photo."
  },
  // Add more images and descriptions here
]

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Explore our Projects</p>
      </div>
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryPage
