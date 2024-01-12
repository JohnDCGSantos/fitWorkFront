import ExerciseCardList from './ExerciseCardList'
import { useRef, useState, useEffect } from 'react'

const ExerciseList = ({ exercises, sortCriteria }) => {
  const containerRef = useRef(null)
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the button top if has scrolled down
      setShowScrollButton(window.scrollY > 100)
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  //sort exercises
  const sortExercises = criteria => {
    const sortedExercises = [...exercises]

    sortedExercises.sort((a, b) => {
      const valueA = Array.isArray(a[criteria]) ? a[criteria][0] || '' : a[criteria] || ''
      const valueB = Array.isArray(b[criteria]) ? b[criteria][0] || '' : b[criteria] || ''

      if (valueA < valueB) return -1
      if (valueA > valueB) return 1
      return 0
    })

    return sortedExercises
  }
  //group sorted exercises by subcategories
  const groupExercisesByCriteria = criteria => {
    const sortedExercises = sortExercises(criteria)

    return sortedExercises.reduce((groupedExercises, exercise) => {
      const key = Array.isArray(exercise[criteria])
        ? exercise[criteria][0] || 'other'
        : exercise[criteria] || 'other'

      if (!groupedExercises[key]) {
        groupedExercises[key] = []
      }

      groupedExercises[key].push(exercise)
      return groupedExercises
    }, {})
  }
  //index for sorted subcategories
  //dont want index when display by name
  const generateIndex = criteria => {
    if (criteria === 'name') {
      return null
    }

    const groupedExercises = groupExercisesByCriteria(criteria)
    const indexItems = []
    let otherItems = null

    Object.keys(groupedExercises).forEach((value, index) => {
      const capitalizedValue =
        value && typeof value === 'string'
          ? value.charAt(0).toUpperCase() + value.slice(1)
          : 'Other'

      const indexButton = (
        <div key={`index_${index}`} className='index-item'>
          <button
            onClick={scrollToSection}
            className='index-button'
            data-id={value && typeof value === 'string' ? value.toLowerCase() : ''}
          >
            {capitalizedValue}
          </button>
        </div>
      )

      if (capitalizedValue === 'Other') {
        otherItems = indexButton
      } else {
        indexItems.push(indexButton)
      }
    })

    // put subcategory other at the end
    return <div className='index-container'>{[...indexItems, otherItems]}</div>
  }
  //scroll to section cliking on index link
  const scrollToSection = event => {
    const sectionId = event.currentTarget.getAttribute('data-id') // gives the sectionId from the clicked button

    if (sectionId) {
      const sectionElement = document.getElementById(sectionId)
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
    }
  }
  //render exercises
  const renderExercises = () => {
    const groupedExercises = groupExercisesByCriteria(sortCriteria)
    if (Object.keys(groupedExercises).length === 0) {
      return <p>No exercises found.</p>
    }

    const titlesAndExercises = []
    let otherExercises = []

    if (sortCriteria !== 'name') {
      Object.keys(groupedExercises).forEach((value, index) => {
        if (value !== 'other') {
          const capitalizedTitle = value.charAt(0).toUpperCase() + value.slice(1)

          titlesAndExercises.push(
            <div key={`group_${index}`} className='group-container'>
              <h2
                className='titleIndex'
                id={
                  capitalizedTitle && typeof capitalizedTitle === 'string'
                    ? capitalizedTitle.toLowerCase()
                    : ''
                }
              >
                {capitalizedTitle}
              </h2>
            </div>
          )

          titlesAndExercises.push(
            <ExerciseCardList key={`exercise_group_${index}`} exercises={groupedExercises[value]} />
          )
        } else {
          // Store 'Other' category exercises separately to show at the end
          otherExercises = groupedExercises[value]
        }
      })
    } else {
      titlesAndExercises.push(
        <ExerciseCardList key={`exercise_container_all`} exercises={exercises} />
      )
    }

    // Render exercises for 'Other' category at end
    if (otherExercises.length > 0) {
      // Add a title for the 'Other' category
      titlesAndExercises.push(
        <div key={`group_other`} className='group-container'>
          <h2 className='titleIndex' id='other'>
            Other
          </h2>
        </div>
      )

      titlesAndExercises.push(
        <ExerciseCardList key={`exercise_group_other`} exercises={otherExercises} />
      )
    }

    return titlesAndExercises
  }

  return (
    <div>
      <div ref={containerRef}>
        {showScrollButton && (
          <div className='scrollToTopButton'>
            <button className='scrollTop' onClick={scrollToTop}>
              Top
            </button>
          </div>
        )}
        <div>{generateIndex(sortCriteria)}</div>
        <div>{renderExercises()}</div>
      </div>
    </div>
  )
}

export default ExerciseList
