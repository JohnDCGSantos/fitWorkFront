import React from 'react'
import { apiBaseUrl } from '../config'
import '../ExerciseDetails.css'
export default function ExercisesDetailsImages({ images }) {
  return (
    
      <div className='exerciseDetails-images-container'>
     {images && (
            <div className='exerciseDetails-images'>
              {images.map((imageName, imgIndex) => (
                <img
                  key={imgIndex}
                  src={`${apiBaseUrl}/images/${imageName}`}
                  alt={`Exercise ${imgIndex}`}
                />
              ))}
            </div>
          )}
              </div>
    
  )
}
