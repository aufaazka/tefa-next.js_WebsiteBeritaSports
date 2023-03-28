import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'

export default function index() {
  const data = [
    { gambar: '/photo/1.jpg', nama: 'Juventus vs Barcelona' },
    { gambar: '/photo/2.jpg', nama: 'Barcelona vs Real Madrid' },
    { gambar: '/photo/3.jpg', nama: 'MAN UTD vs Liverpool' },
    { gambar: '/photo/4.jpg', nama: 'Indonesia vs Afghanistan' },
  ]
  const dua = [
    { gambar: '/photo/satu.jpg', nama: 'Volleyball National' },
    { gambar: '/photo/dua.jpg', nama: 'Woman Volleyball 2 June' },
    { gambar: '/photo/tiga.jpg', nama: 'Mens Volleyball ' },
    { gambar: '/photo/empat.jpg', nama: 'Indonesia vs Kamboja' },
  ]
  const tiga = [
    { gambar: '/photo/rabu.jpg', nama: 'Basketball WorldCup Asian' },
    { gambar: '/photo/asia.jpg', nama: 'Philipina vs NewZealend' },
    { gambar: '/photo/game.jpg', nama: 'Australia vs Indonesia' },
    { gambar: '/photo/gratis.jpg', nama: 'Indonesia vs Jordan' },
  ]
  const satu = [
    { gambar: '/photo/quarter.jpg', nama: 'Indonesia vs China' },
    { gambar: '/photo/live.jpg', nama: 'Indonesia vs India' },
    { gambar: '/photo/final.jpg', nama: 'Cup Finals' },
    { gambar: '/photo/semifinal.jpg', nama: 'Indonesia vs Japan' },
  ]
  return (
    <section
      id="about GArena"
      className="flex flex-col lg:gap-14 lg:flex-col w-full"
    >
      <Head>
        <title>About Sports Arena</title>
        <meta name="description" content="About GArena" />
      </Head>


      <nav role="navigation">
        <ul className="flex flex-col md:flex-row justfiy-between flex-wrap -mb-8">
          <div className="md:flex md:flex-row grid-cols-3">
            <li className="m-1 border border-red-700 rounded-full text-red-700 hover:bg-red-700 hover:text-white px-4 py-2 text-xl">
              <a href="#Football Matches">Football</a>
            </li>
            <li className="m-1 border border-red-700 rounded-full text-red-700 hover:bg-red-700 hover:text-white px-4 py-2 text-xl">
              <a href="#Volley Matches">Volley</a>
            </li>
            <li className="m-1 border border-red-700 rounded-full text-red-700 hover:bg-red-700 hover:text-white px-4 py-2 text-xl">
              <a href="#Basketball Matches">Basketball</a>
            </li>
            <li className="m-1 border border-red-700 rounded-full text-red-700 hover:bg-red-700 hover:text-white px-4 py-2 text-xl">
              <a href="#Badminton Matches">Badminton</a>
            </li>
          </div>
          <div className='ml-0 md:ml-auto mb-8 md:mb-0'>
            <li className="m-1 border bg-red-700 border-red-700 rounded-full text-white hover:bg-red-700 hover:text-white px-4 py-2 ml-auto text-xl">
              <a href="#Contact us">Contact-Us</a>
            </li>
          </div>
        </ul>
      </nav>

      <section
        id="Football Matches"
        className="flex flex-col lg:gap-14 lg:flex-col w-full"
      >
        <span className="text-center text-white text-2xl mb-0 mt-[18px] py-5 bg-red-800 ">
          Football Matches
        </span>
        <div className="mb-5 flex gap-8 py-9 lg:flex-row flex-wrap justify-center mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {data.map((data) => (
              <li className="bg-zinc-300 rounded-md overflow-hidden mx-8 mb-4 w-36 md:w-60 hover:shadow-xl text-left p-4">
                <Image
                  width={300}
                  height={350}
                  src={data.gambar}
                  alt=""
                  className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mx-auto mb-2"
                />
                <p className="text-base mb-2 text-black text-center">
                  <strong>{data.nama}</strong>
                </p>
                <p className="text-sm mb-2">{data.tanggal}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="Volley Matches"
        className="flex flex-col lg:gap-14 lg:flex-col w-full"
      >
        <span className="text-center text-white text-2xl mb-0 mt-2 py-5 bg-red-800 ">
          Volly Matches
        </span>
        <div className="mb-2 flex gap-8 py-9 lg:flex-row flex-wrap justify-center mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {dua.map((data) => (
              <li className="bg-zinc-300 rounded-md overflow-hidden mx-8 mb-4 w-36 md:w-60 hover:shadow-xl text-left p-4">
                <Image
                  width={300}
                  height={350}
                  src={data.gambar}
                  alt=""
                  className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mx-auto mb-2"
                />
                <p className="text-base mb-2 text-black text-center">
                  <strong>{data.nama}</strong>
                </p>
                <p className="text-sm mb-2">{data.tanggal}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="Basketball Matches"
        className="flex flex-col lg:gap-14 lg:flex-col w-full"
      >
        <span className="text-center text-white text-2xl mb-0 mt-[18px] py-5 bg-red-800 ">
          Basketball Matches
        </span>
        <div className="mb-2 flex gap-8 py-9 lg:flex-row flex-wrap justify-center mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {tiga.map((data) => (
              <li className="bg-zinc-300 rounded-md overflow-hidden mx-8 mb-4 w-36 md:w-60 hover:shadow-2xl text-left p-4">
                <Image
                  width={300}
                  height={350}
                  src={data.gambar}
                  alt=""
                  className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mx-auto mb-2"
                />
                <p className="text-base mb-2 text-black text-center">
                  <strong>{data.nama}</strong>
                </p>
                <p className="text-sm mb-2">{data.tanggal}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="Badminton Matches"
        className="flex flex-col lg:gap-14 lg:flex-col w-full"
      >
        <span className="text-center text-white text-2xl mb-0 mt-[18px] py-5 bg-red-800 ">
          Badminton Matches
        </span>
        <div className="mb-2 flex gap-8 py-9 lg:flex-row flex-wrap justify-center mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {satu.map((data) => (
              <li className="bg-zinc-300 rounded-md overflow-hidden mx-8 mb-4 w-36 md:w-60 hover:shadow-2xl text-left p-4">
                <Image
                  width={300}
                  height={350}
                  src={data.gambar}
                  alt=""
                  className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mx-auto mb-2"
                />
                <p className="text-base mb-2 text-black text-center">
                  <strong>{data.nama}</strong>
                </p>
                <p className="text-sm mb-2">{data.tanggal}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="Contact us"
        className="flex flex-col lg:gap-14 lg:flex-col w-full -mb-24"
      >
        <div className="mb-1 m-auto max-w-[1240px] p-4 h-screen ">
          <h1 className="text-2xl font-bold text-center p-4"> Contact Us </h1>
          <form className="max-w-[600px] m-auto">
            <div className="grid grid-cols-2 gap-2">
              <input
                className="border shadow-lg p-3"
                type="text"
                placeholder="Name"
              />
              <input
                className="border shadow-lg p-3"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              className="border shadow-lg p-3 w-full my-2"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="border shadow-lg p-3 w-full"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
          </form>
        </div>
      </section>
    </section>
  )
}
