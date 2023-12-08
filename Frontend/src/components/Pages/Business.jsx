import React, { useEffect, useState } from 'react'
import Nav from '../Nav';
import img12 from './images2/img6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useParams } from 'react-router-dom'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../App.css'

// import required modules
import { Navigation } from 'swiper/modules';

function Business() {

    const param = useParams();
    const id = param.id;

    const [fetchnurseryData, setfetchnurseryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/nursery/get/nursery/${id}`);
                const data = await response.json();
                console.log(data.rows[0])
                setfetchnurseryData(data.rows[0]);

            } catch (error) {
                console.error('Error fetching plant data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <Nav />


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper "
             style={{ height: "500px" }}
             >

                {fetchnurseryData.gallery && fetchnurseryData.gallery.split(',').map((image, index) => (
                    <SwiperSlide key={index} >

                        <img className='w-40 m-1 rounded'
                            src={`http://localhost:5000/uploads/${image.trim()}`} alt={"not fouud"} />

                    </SwiperSlide>
                ))}

            </Swiper>


            <div className='flex justify-between w-full px-32 mt-16'>
                <div className='flex justify-center text-center'>

                    <img
                        className='w-20 h-20 mx-auto rounded-3xl'
                        src={`http://localhost:5000/uploads/${fetchnurseryData && fetchnurseryData.gallery ? fetchnurseryData.gallery.split(',')[0] : ''}`}
                        alt=""
                    />


                    <h1 className='items-center pt-6 text-xl font-bold' >{fetchnurseryData.business_name}</h1>
                </div>
                <div className='flex items-center justify-between text-center'>


                    <h2 className='px-4 text-xl font-bold' >{fetchnurseryData.phone}</h2>

                </div>


            </div>
            
            <div className='items-center block mt-10 text-center'>

                <h2 className='px-1 text-xl '>{fetchnurseryData.business_location}</h2>


            </div>

            <div className='px-24 mt-16 mb-32'>
                <p class="leading-relaxed" dangerouslySetInnerHTML={{ __html: fetchnurseryData.description }} ></p>
            </div>



        </div>
    )
}

export default Business