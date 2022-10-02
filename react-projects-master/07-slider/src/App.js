import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  //Dieu kien chuyen slider
  // lastIndex = 3
  // index = -1 => index = lastIndex = 3
  // index = 4 => index = 0
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people])

 
  //Auto slider 3s
  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => clearInterval(slider);
  // }, [index])


  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;



          //Add class
          //personIndex = 0, 1, 2, 3 Khong doi
          //index = 0 thay doi
          let position = 'nextSlide';

          //next => index + 1 = 1 => personIndex === index
          if (personIndex === index) {
            position = 'activeSlide';
          }

          /*
            personIndex        0                          1                         2                         3
                                                                                                        personIndex = 3
                                                                                                        people.length - 1 = 3
                              index                      next                      next                      last

                                                                              personIndex = 2
                                                                              index - 1 = 2
                              next                       next                      last                      index

                                                    personIndex = 1
                                                    index - 1 = 1
                              next                       last                      index                      next

                          personIndex = 0
                          index - 1 = 0
                              last                       index                      next                      next
                              
          */
          //prev => index - 1 = 0 => personIndex === index
          //prev => index - 1 = -1 => dk2 => index = 0 , personIndex = people.length - 1 = 3
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
            console.log('personIndex ------' + personIndex);
            console.log('index-------------' + index);
            console.log('///');
          }
 
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App;





/*
const nextSlide = () =>{
  setIndex(index === index.length - 1 ? 0 : index + 1)
}

const prevSlide = () => {
  setIndex(index === 0 ? index.length - 1 : index - 1)
}
{people.map((person, personIndex) => {
<article className={personIndex === index ? an hien : an} key={personIndex}>
...
</article>
}
*/