import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container m-6  min-w-screen">

        <div className='md:grid md:grid-cols-[1fr_2fr] md:items-center lg:items-start '>
          <div className="heading mt-8 lg:pl-8 md:mt-0 lg:self-center">
            <div className="home-1">
              <img src="images/top_icon.png" alt="top-icon" className='w-24 md:w-28 lg:w-36' />
            </div>
            <h1 className='text-7xl  my-12 font-bold lg:text-[5em]'>Skating <br /> Board <br /> School</h1>
            <p className='uppercase  font-medium  '>Read more</p>
          </div>
          <div className="skating-img mt-9 lg:mt-0">
            <img src="images/homepage.png" alt="banner" className='w-[80%]' />
          </div>
        </div>
        <div className="next-prev-btn mt-6">
          <button className='bg-blue-800 rounded-full p-6 mr-2'>
            <img src="images/arrow.png" alt="left-arrow" className='h-6 invert-[0.9] cursor-pointer' />
          </button>
          <button className='bg-blue-800 rounded-full p-6 ml-2'>
            <img src="images/right-arrow.png" alt="right-arrow" className='h-6 invert-[0.9] cursor-pointer' />
          </button>
        </div>
      </div>
      <div className="skate-cls mt-8">
        <div className="main">
          <div className="heading text-center ">
            <h1 className='font-bold text-4xl my-2.5'>Our Skating Classes</h1>
            <p className='font-medium'>Explore a variety of skating classes designed for all skill levels</p>
          </div>
          <div className="classes-boxes text-gray-200 md:flex">
            <div className="box flex flex-col items-center bg-red-600 p-8 m-8  rounded-xl hover:cursor-pointer hover:scale-105 hover:transition-transform">
              <img src="images/class1.png" alt="class-1" className='h-20 w-20' />
              <p className='my-2 text-xl font-medium'>Beginner</p>
              <p className='mx-4'>Start your skateboarding journey with our beginner classes. Learn essential skills like balance, pushing, and turning.</p>
            </div>
            <div className="box flex flex-col items-center bg-red-600 p-8 m-8 md:mx-0 rounded-xl hover:cursor-pointer hover:scale-105 hover:transition-transform">
              <img src="images/class2.png" alt="class-1" className='h-20 w-20' />
              <p className='my-2 text-xl font-medium'>Intermediate</p>
              <p className='mx-4'>Take your skateboarding to the next level with intermediate classes. Focus on advanced techniques and tricks.</p>
            </div>
            <div className="box flex flex-col items-center bg-red-600 p-8 m-8 rounded-xl hover:cursor-pointer hover:scale-105 hover:transition-transform">
              <img src="images/class3.png" alt="class-1" className='h-20 w-20' />
              <p className='my-2 text-xl font-medium'>Advanced</p>
              <p className='mx-4'>Achieve mastery in skateboarding with our advanced classes. Perfect complex tricks and prepare for competitions.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-skt bg-[url('/images/about_bg.jpg')] text-white bg-center pt-12 px-6
    ">
        <div className="main md:flex">
          <div className='md:max-w-1/2 md:self-center'>
            <div className="heading text-6xl">About <br />Skating <br /> X</div>
            <p className='my-6 '>At Skating X, we are passionate about teaching the art of skateboarding. Our experienced instructors provide personalized coaching to help you achieve your skating goals.</p>
          </div>
          <div className="about-img">
            <img src="images/about.png" alt="about" className='relative top-1' />
          </div>
        </div>
      </div>
      <div className="skt-vdo mt-8">
        <div className="main">
          <div className="heading text-center">
            <div className='font-semibold text-3xl md:text-6xl'>Skating Video</div>
            <p className=' my-4 md:text-2xl font-medium '>Watch our talented skaters in action</p>
          </div>
        </div>
        <div className="videos md:flex md:justify-center md:gap-2">
          <div className="video-1 ">
            <img src="images/sakt1.png" alt="skt-1" />
            <p className='uppercase pl-8 font-semibold'>see more</p>
          </div>
          <div className="video-2">
            <img src="images/sakt2.png" alt="skt-2" />
            <p className='uppercase pl-8 font-semibold'>see more</p>
          </div>
          <div className="video-3">
            <img src="images/sakt3.png" alt="skt-3" />
            <p className='uppercase pl-8 font-semibold'>see more</p>
          </div>
        </div>
      </div>
      <div className="skt-shop mt-8 pl-6 md:mt-20 lg:mt-10">
        <div className="main md:flex">
          <div className="heading md:max-w-1/2 md:self-center">
            <div className='font-semibold text-3xl md:text-6xl md:py-4 lg:py-8'>Our Skate Shop</div>
            <p className=' my-4 md:text-xl'>Discover a wide range of skateboarding gear and accessories. From boards to safety equipment, we have everything you need to get started or upgrade your setup.</p>
            <p className='uppercase font-bold md:py-4'>buy now</p>
          </div>
          <div className="shop-img">
            <img src="images/shop.png" alt="shop" />
          </div>
        </div>
      </div>
      <div className="relative testimonials  py-10 lg:py-20 bg-[url('/images/about_bg.jpg')] bg-center text-gray-100">
        <div className="main">
          <div className="heading">
            <p className='font-bold text-2xl md:text-4xl lg:text-6xl text-center pt-12 lg:pt-4'>Testimonial</p>
          </div>
          <div className="reviews mt-8 md:flex lg:grid lg:grid-cols-3 ">
            <div className="review relative flex flex-col items-center mx-8 p-8 mt-20 rounded-2xl  bg-red-600 hover:cursor-pointer hover:scale-105 hover:transition-transform">
              <div className="user absolute -top-12 bg-white px-7 py-5  rounded-full">
                <img src="/images/test1.png" alt="user-1" />
              </div>
              <div className="user-name my-6 font-semibold text-2xl">Rakesh kumar</div>
              <div className="te-img my-1">
                <img src="images/te.png" alt="te" />
              </div>
              <p className="comments mt-1.5">"The instructors at Skating X are amazing! I've learned so much and feel more confident on my board."</p>
            </div>
            <div className="review relative flex flex-col items-center mx-8 md:mx-0 p-8 mt-20 rounded-2xl  bg-white text-gray-900 hover:cursor-pointer hover:scale-105 hover:transition-transform">
              <div className="user shadow absolute -top-12 bg-white px-6 py-5  rounded-full">
                <img src="/images/test2.png" alt="user-1" />
              </div>
              <div className="user-name mt-9 mb-6 font-semibold text-2xl">Rajveer Singh</div>
              <div className="te-img ">
                <img src="images/te.png" alt="te" className=' invert-[0.8]' />
              </div>
              <p className="comments mt-1.5">"Skating X has the best facilities and equipment. I love coming here to practice and improve my skills."</p>
            </div>
            <div className="review relative flex flex-col items-center mx-8  p-8 mt-20 rounded-2xl   bg-red-600 hover:cursor-pointer hover:scale-105 hover:transition-transform">
              <div className="user absolute -top-12 bg-white px-7 py-5  rounded-full">
                <img src="/images/test3.png" alt="user-1" />
              </div>
              <div className="user-name my-6 font-semibold text-2xl">Sachin Meena</div>
              <div className="te-img">
                <img src="images/te.png" alt="te" />
              </div>
              <p className="comments mt-1.5">"The community at Skating X is so supportive. I've made great friends and learned a lot from my peers."</p>
            </div>
          </div>
          <div className="testimonials-btn absolute -bottom-10 left-[30%] md:left-[35%] lg:left-[40%]">
            <button className='bg-red-600 rounded-full p-4 mr-6'>
              <img src="images/less.png" alt="prev" className='h-9 cursor-pointer' />
            </button>
            <button className='bg-red-600 rounded-full p-4'>
              <img src="images/greater.png" alt="next" className='h-9 cursor-pointer' />
            </button>
          </div>
        </div>
      </div>
      <footer className='bg-blue-800 mt-12 text-center text-white p-4'>
      <div className='capitalize'>&copy; All rights reserved. Made with ❤️ by <a href="https://github.com/Ishwar-meena" target='_blank'>Hacker X</a></div>
      </footer>
    </>
  )
}

export default App
