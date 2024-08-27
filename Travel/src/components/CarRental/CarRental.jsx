import React from 'react';
import thar from '../../assets/Cars/thar.png';
import aura from '../../assets/Cars/aura.png';
import dzire from '../../assets/Cars/dzire.png';
import scorpio from '../../assets/Cars/scorpio.png';
import innova from '../../assets/Cars/innova.png';
import verna from '../../assets/Cars/verna.png';
import tigor from '../../assets/Cars/tigor.png';
import sport from '../../assets/Cars/sport.png';
import safari from '../../assets/Cars/safari.png';
import punch from '../../assets/Cars/punch.png';
import i20 from '../../assets/Cars/i20.png';
import hyrider from '../../assets/Cars/hyrider.png';
import hexa from '../../assets/Cars/hexa.png';
import harrier from '../../assets/Cars/harrier.png';
import fortuner from '../../assets/Cars/fortuner.png';
import ertiga from '../../assets/Cars/ertiga.png';
import creta from '../../assets/Cars/creta.png';
import vitara from '../../assets/Cars/vitara.png';
import indever from '../../assets/Cars/indever.png';

import { useNavigate } from 'react-router-dom';
import ourcar from '../../assets/Cars/ourcar.png'

const cars = [



  {
    id: 1,
    imgUrl: thar,
    Name: "Mahindra Thar",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 2,
    imgUrl: aura,
    Name: "Aura",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 4500/24h",
    Button: "Book",
  },
  {
    id: 3,
    imgUrl: dzire,
    Name: "Dzire",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 4000/24h",
    Button: "Book",
  },
  {
    id: 4,
    imgUrl: scorpio,
    Name: "Scorpio",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 5,
    imgUrl: innova,
    Name: "Innova",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 6000/24h",
    Button: "Book",
  },
  {
    id: 6,
    imgUrl: verna,
    Name: "Verna",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 7,
    imgUrl: tigor,
    Name: "Tigor",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 3500/24h",
    Button: "Book",
  },
  {
    id: 8,
    imgUrl: sport,
    Name: "Sport",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 10000/24h",
    Button: "Book",
  },
  {
    id: 9,
    imgUrl: safari,
    Name: "Safari",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 6000/24h",
    Button: "Book",
  },
  {
    id: 10,
    imgUrl: punch,
    Name: "Punch",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 4500/24h",
    Button: "Book",
  },
  {
    id: 11,
    imgUrl: i20,
    Name: "i20",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 3000/24h",
    Button: "Book",
  },
  {
    id: 12,
    imgUrl: hyrider,
    Name: "Hyrider",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 13,
    imgUrl: hexa,
    Name: "Hexa",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 7000/24h",
    Button: "Book",
  },
  {
    id: 14,
    imgUrl: harrier,
    Name: "Harrier",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 15,
    imgUrl: fortuner,
    Name: "Fortuner",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 8000/24h",
    Button: "Book",
  },
  {
    id: 16,
    imgUrl: ertiga,
    Name: "Ertiga",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 17,
    imgUrl: creta,
    Name: "Creta",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 18,
    imgUrl: creta,
    Name: "Creta",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 19,
    imgUrl: vitara,
    Name: "Vitara Breeza",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
  {
    id: 20,
    imgUrl: indever,
    Name: "Indever",
    Drive: "Self drive",
    Features: "Full AC",
    Money: "$ 5500/24h",
    Button: "Book",
  },
];

const CarRental = () => {

  const navigate = useNavigate()
const handlebook = (id) => {
  navigate(`/Carbook/${id}`);
}
  return ( 
    <div className='my-16'>
    <div className="relative">
      <img src={ourcar} className="w-full h-auto object-cover sm:h-48" alt="Our Cars" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-center text-white font-bold px-8 py-4">
          Our Cars
        </h2>
      </div>
    </div>



      <div className='p-6 bg-gray-100'>
  <div className='text-center mb-12'>
    <h1 className='font-bold text-4xl text-green-900'>Why People Like Us?</h1>
  </div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='font-semibold text-2xl text-green-800 mb-4'>Best Price Guarantee</h2>
      <p className='text-gray-700'>
        We strive to deliver superior services to our valued customers while keeping our prices competitive and reasonable. We have some fantastic deals available that we're sure you'll love.
      </p>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='font-semibold text-2xl text-green-800 mb-4'>Best Quality Cars</h2>
      <p className='text-gray-700'>
        We understand the importance of comfort and hygiene during a journey, which can make the experience feel much lighter. We ensure a comfortable and hygienic trip.
      </p>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='font-semibold text-2xl text-green-800 mb-4'>City to City</h2>
      <p className='text-gray-700'>
        We are based in Jaipur, Rajasthan and offer services throughout the state. Whether you're planning a trip to any of the cities, we've got you covered.
      </p>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='font-semibold text-2xl text-green-800 mb-4'>Airport Pickup and Drop</h2>
      <p className='text-gray-700'>
        We offer economical airport pickup and drop services from any location in Jaipur City.
      </p>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='font-semibold text-2xl text-green-800 mb-4'>Tour Package</h2>
      <p className='text-gray-700'>
        Browse through our array of affordable rental car services in Jaipur and confirm your travel arrangements with us. We offer pre-arranged travel itineraries and provide customized plans tailored to your preferences and convenience.
      </p>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='font-semibold text-2xl text-green-800 mb-4'>Rent Cars for Events</h2>
      <p className='text-gray-700'>
        For your special occasions and weddings, choose us as your rent-a-car in Jaipur. We offer a wide selection of cars to accommodate any number of guests, ensuring convenience for all your special events.
      </p>
    </div>
</div>

<div className='border  bg-slate-100 mb-4 px-8'>
  <h1 className='text-center font-bold text-4xl  px-4 py-6'>Available Cars</h1>
  <div className=' mb-8'>
  <p>we specialize in providing top-notch car rental services in India. Whether you're a tourist looking to explore the beautiful sights of the country or a local in need of reliable transportation, we've got you covered. Our fleet of vehicles is well-maintained, comfortable, and equipped with all the necessary amenities to ensure a smooth and enjoyable journey for our customers.</p>
  </div>
</div>








<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  {cars.map((car) => (
    <div
      key={car.id}
      className="border p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
    >
      <img
        src={car.imgUrl}
        alt={car.Name}
        className="w-full h-auto object-cover rounded mb-4"
      />
      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-bold mb-2">{car.Name}</h3>
        <p className="text-gray-700">{car.Drive}</p>
        <p className="text-gray-700">{car.Features}</p>
        <p className="text-lg font-bold">{car.Money}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 transition-colors duration-200"
          onClick={() => handlebook(car.id)}
        >
          {car.Button}
        </button>
      </div>
    </div>
  ))}
</div>




    </div>
  </div>
  
  
  
  )
}


export default CarRental