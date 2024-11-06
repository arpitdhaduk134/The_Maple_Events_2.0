// // import React from 'react';
// // import './events.css'; // Import the CSS for styling
// // import event1 from '../../Images/event1.avif';
// // import event2 from '../../Images/event2.avif';
// // import event3 from '../../Images/event3.avif';
// // import event4 from '../../Images/event4.avif';

// // const Events = () => {
// //   const eventItems = [
// //     {
// //       id: 1,
// //       title: 'Spring Gala',
// //       date: 'April 15, 2024',
// //       description: 'Join us for an elegant spring gala featuring live music and gourmet dining.',
// //       image: event1,
// //     },
// //     {
// //       id: 2,
// //       title: 'Corporate Networking',
// //       date: 'May 10, 2024',
// //       description: 'Connect with industry leaders at our corporate networking event.',
// //       image: event2,
// //     },
// //     {
// //       id: 3,
// //       title: 'Summer Festival',
// //       date: 'June 20, 2024',
// //       description: 'A fun-filled day with activities, food, and entertainment for the whole family.',
// //       image: event3,
// //     },
// //     {
// //       id: 4,
// //       title: 'Charity Run',
// //       date: 'July 25, 2024',
// //       description: 'Participate in our charity run to support local causes.',
// //       image: event4,
// //     },
// //     // Add more event items as needed
// //   ];

// //   return (
// //     <div className="events-container">
// //       <h1 className="events-title">Upcoming Events</h1>
// //       <div className="events-grid">
// //         {eventItems.map((event) => (
// //           <div key={event.id} className="event-card">
// //             <img src={event.image} alt={event.title} className="event-image" />
// //             <div className="event-details">
// //               <h3 className="event-title">{event.title}</h3>
// //               <p className="event-date">{event.date}</p>
// //               <p className="event-description">{event.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Events;


// // import React from 'react';
// // import './events.css'; 
// // import eventImg from '../../Images/i2.jpg';

// // const Events = () => {
// //     return (
// //         <div className='portfolio-mergecontainer'>
// //             <div className="portfolio-container">
// //                 <div className="portfolio-text">
// //                     <h2>UPCOMING EVENTS</h2>
// //                     <p>
// //                     SEAMLESS EVENTS, TIMELESS MOMENTS
// //                     </p>
// //                 </div>
// //                 <div className="portfolio-image">
// //                     <img src={eventImg} alt="Portfolio" className="rounded-image" /> {/* Adjust the image source */}
// //                 </div>
// //             </div>
// //             {/* Additional portfolio items can be added here */}
// //         </div>
// //     );
// // };

// // export default Events;


// // src/components/Events.js
// import React from 'react';
// import './events.css'; // Import the CSS for styling
// import event1 from '../../Images/event1.avif';
// import event2 from '../../Images/event2.avif';
// import event3 from '../../Images/event3.avif';
// import event4 from '../../Images/event4.avif';

// const Events = () => {
//   const eventItems = [
//     {
//       id: 1,
//       title: 'Spring Gala',
//       date: 'April 15, 2024',
//       description: 'Join us for an elegant spring gala featuring live music and gourmet dining.',
//       image: event1,
//     },
//     {
//       id: 2,
//       title: 'Corporate Networking',
//       date: 'May 10, 2024',
//       description: 'Connect with industry leaders at our corporate networking event.',
//       image: event2,
//     },
//     {
//       id: 3,
//       title: 'Summer Festival',
//       date: 'June 20, 2024',
//       description: 'A fun-filled day with activities, food, and entertainment for the whole family.',
//       image: event3,
//     },
//     {
//       id: 4,
//       title: 'Charity Run',
//       date: 'July 25, 2024',
//       description: 'Participate in our charity run to support local causes.',
//       image: event4,
//     },
//     // Add more event items as needed
//   ];

//   return (
//     <div className="events-container">
//       <h1 className="events-title">Upcoming Events</h1>
//       <div className="events-grid">
//         {eventItems.map((event) => (
//           <div key={event.id} className="event-card">
//             <img src={event.image} alt={event.title} className="event-image" />
//             <div className="event-details">
//               <h3 className="event-title">{event.title}</h3>
//               <p className="event-date">{event.date}</p>
//               <p className="event-description">{event.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Events;
import React, { useState } from 'react';
import image1 from '../../Images/i2.jpg'; // Sample image
import './events.css';
import event1 from '../../Images/event1.avif';
import event2 from '../../Images/event2.avif';
import event3 from '../../Images/event3.avif';
import event4 from '../../Images/event4.avif';

// Sample image data
const imageData = [
  { id: 1, src: image1, alt: 'Image 1' },
  { id: 2, src: image1, alt: 'Image 2' },
  { id: 3, src: image1, alt: 'Image 3' },
  { id: 4, src: image1, alt: 'Image 4' },
  // Add more images as needed
];
const eventItems = [
  {
    id: 1,
    title: 'Spring Gala',
    date: 'April 15, 2024',
    description: 'Join us for an elegant spring gala featuring live music and gourmet dining.',
    image: event1,
  },
  {
    id: 2,
    title: 'Corporate Networking',
    date: 'May 10, 2024',
    description: 'Connect with industry leaders at our corporate networking event.',
    image: event2,
  },
  {
    id: 3,
    title: 'Summer Festival',
    date: 'June 20, 2024',
    description: 'A fun-filled day with activities, food, and entertainment for the whole family.',
    image: event3,
  },
  {
    id: 4,
    title: 'Charity Run',
    date: 'July 25, 2024',
    description: 'Participate in our charity run to support local causes.',
    image: event4,
  },
  // Add more event items as needed
];


const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open the image in expanded view
  const openImage = (image) => {
    setSelectedImage(image);
  };

  // Close the expanded image view
  const closeImage = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length
    );
  };

  return (
    <div>
    <div className="gallery">
      {/* Display images as thumbnails */}
      <div className="image-grid">
        {imageData.map((image) => (
          <div
            key={image.id}
            className="thumbnail"
            onClick={() => openImage(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Show selected image in expanded view on the webpage */}
      {selectedImage && (
        <div className="expanded-image-view">
           <button onClick={showPreviousImage} className="arrow-left">
              &lt;
            </button>
          <img
             src={imageData[currentIndex].src}
             alt={imageData[currentIndex].alt}
            className="expanded-image"
          />
          <button onClick={showNextImage} className="arrow-right">
              &gt;
            </button>
        </div>
      )}

      {/* Cancel button */}
      {selectedImage && (
        <button onClick={closeImage} className="cancel-button">Cancel</button>
      )}
    </div>
    <div className="events-container">
      <h1 className="events-title">Memorable Events</h1>
      <div className="events-grid">
        {eventItems.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageGallery;
