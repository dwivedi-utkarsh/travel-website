import  { useEffect, useState } from 'react'

import { json, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import thar from './../../assets/Cars/thar.png';
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
const Carbook = () => {
  const { id } = useParams();
  const car = cars.find((item) => item.id === parseInt(id));

  const location = useLocation();
  const [prevlocation, setPrevLocation] = useState(" ");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  if (!car) {
      return <div>Product not found</div>;
  }

  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [address, setaddress] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

  const [errname, seterrname] = useState("");
  const [errlastname, seterrlastname] = useState("");
  const [erraddress, seterraddress] = useState("");
  const [errstartdate, seterrstartdate] = useState("");
  const [errenddate, seterrenddate] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handlename = (e) => {
    setname(e.target.value);
    seterrname("");
  };

  const handlelastname = (e) => {
    setlastname(e.target.value);
    seterrlastname("");
  };

  const handleaddress = (e) => {
    setaddress(e.target.value);
    seterraddress("");
  };

  const handlestartdate = (e) => {
    setstartdate(e.target.value);
    seterrstartdate("");
  };

  const handleenddate = (e) => {
    setenddate(e.target.value);
    seterrenddate("");
  };

  const handleConfermBooking = (e) => {
    e.preventDefault();

    let valid = true;

    if (!name) {
      seterrname("enter your name");
      valid = false;
    }

    if (!lastname) {
      seterrlastname("enter your lastname");
      valid = false;
    }

    if (!address) {
      seterraddress("enter your address");
      valid = false;
    }

    if (!startdate) {
      seterrstartdate("enter start date");
      valid = false;
    }

    if (!enddate) {
      seterrenddate("enter end date");
      valid = false;
    }

    if (valid) {
      const data = {
        name,
        lastname,
        address,
        startdate,
        enddate
      };
      localStorage.setItem("data", JSON.stringify(data));

      setSuccessMsg(
        `thanks you dear ${name} ${lastname}, your car booking message has been received successfully.`
      );

      setname("");
      setlastname("");
      setaddress("");
      setstartdate("");
      setenddate("");
    }
  };

  return (
    <div className=" max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg sm:max-w-full sm:p-2 md:max-w-2xl md:flex md:space-x-6 my-32">
      {successMsg && (
        <p className="pb-4 mx-16   text-center text-green-500 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {successMsg}
        </p>
      )}
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold text-center mb-4 md:text-3xl md:text-left">
          Book {car.Name}
        </h1>
        <img
          src={car.imgUrl}
          alt={car.Name}
          className="w-full h-auto object-cover mb-4 rounded-md"
        />
        <div className="space-y-2 text-sm sm:text-xs md:text-base">
          <p className="text-gray-700">
            <strong>Drive:</strong> {car.Drive}
          </p>
          <p className="text-gray-700">
            <strong>Features:</strong> {car.Features}
          </p>
          <p className="text-gray-700">
            <strong>Price:</strong> {car.Money}
          </p>
        </div>
      </div>

      {!successMsg && (
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h2 className="text-xl font-semibold my-4">Fill Car Booking Form</h2>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <label className="w-full sm:w-1/2 md:w-1/3">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handlename}
                className={`w-full p-2 border ${
                  errname ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errname && (
                <p className="text-red-500 text-sm mt-1">{errname}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <label className="w-full sm:w-1/2 md:w-1/3">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={lastname}
                onChange={handlelastname}
                className={`w-full p-2 border ${
                  errlastname ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errlastname && (
                <p className="text-red-500 text-sm mt-1">{errlastname}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <label className="w-full sm:w-1/2 md:w-1/3">Car Name</label>
              <input
                type="text"
                placeholder="Enter your car name"
                value={car.Name}
                readOnly
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <label className="w-full sm:w-1/2 md:w-1/3">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={handleaddress}
                className={`w-full p-2 border ${
                  erraddress ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {erraddress && (
                <p className="text-red-500 text-sm mt-1">{erraddress}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <label className="w-full sm:w-1/2 md:w-1/3">Start Date</label>
              <input
                type="date"
                value={startdate}
                onChange={handlestartdate}
                className={`w-full p-2 border ${
                  errstartdate ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errstartdate && (
                <p className="text-red-500 text-sm mt-1">{errstartdate}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <label className="w-full sm:w-1/2 md:w-1/3">End Date</label>
              <input
                type="date"
                value={enddate}
                onChange={handleenddate}
                className={`w-full p-2 border ${
                  errenddate ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errenddate && (
                <p className="text-red-500 text-sm mt-1">{errenddate}</p>
              )}
            </div>

            <div>
              <button
                className="w-full bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 transition-colors duration-200"
                onClick={handleConfermBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carbook;
