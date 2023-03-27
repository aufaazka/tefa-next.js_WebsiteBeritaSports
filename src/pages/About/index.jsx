import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'

export default function index() {
  const satu = [
    { gambar: '/photo/sejarah-badminton.jpg', 
    desc: 'Sejarah bulu tangkis di dunia mulanya muncul di Mesir sekitar 2000 tahun lalu. Namun beberapa sumber menyebut olahraga ini sejatinya juga berkembang di China dan India. Di China, permainan Jianzi dipercaya menjadi cikal bakal bulu tangkis. Jianzi sendiri merupakan permainan menggunakan kok atau yang saat ini kita sebut shuttlecock.' },
    { gambar: '/photo/sejarah-voli.jpg', 
    desc: 'Permainan bola voli diciptakan oleh William G. Morgan tahun 1895 di Massachuset. Awal mulanya dia menciptakan permainan bernama Mintonette untuk menggantikan permainan bola basket yang dianggap melelahkan. Jumlah pemain mintonette tidak ditentukan.' },
    { gambar: '/photo/sejarah-basket.jpg', 
    desc: 'Jika menelisik lebih jauh, sejarah bola basket dimulai pada 1891, yang diciptakan oleh seorang guru asal Kanada, Amerika Serikat bernama Dr. James Naismith. Alasan Naismith menciptakan olahraga basket karena dia ingin menggantikan olahraga di luar ruangan menjadi di dalam ruangan ketika musim dingin tiba.' },
    { gambar: '/photo/sejarah-sepakbola.jpg', 
    desc: 'Dilansir dari buku Bahan Ajar Sepakbola Dasar yang disusun Emral dari Universitas Negeri Padang (UNP), sejarah awal sepak bola terjadi pada era tahun 1122-247 sebelum Masehi (SM) di Cina. Saat itu, permainan ini dikenal dengan nama Tsu-Chiu. Tsu berarti kaki, Chiu berarti bola.' },
  ]
  return (
    <section
      id="about GArena"
      className="flex flex-col lg:gap-14 lg:flex-col w-full"
    >
      <Head>
        <title>About GArena</title>
        <meta name="description" content="About GArena" />
      </Head>
      <div className="mb-auto mt-8 space-y-5 w-80 md:w-1/3 grid place-content-center text-center mx-auto md:mx-0">
        <h1 className="text-5xl font-medium w-[800px]">
          <TypewriterComponent
            options={{
              strings: ['History'],
              changeDelay: 3,
              changeDeleteSpeed: 2,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>

      <div className="mb-30 justify-center mx-automax w-full max-h-fit">
        <ul className="">
          {satu.map((item, index) => (
            <li
              className={`flex flex-rowbox-border md:box-content bg-zinc-300 rounded-md overflow-hidden mx-8 mb-4  hover:shadow-2xl text-left p-4 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              key={index}
            >
              <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                <img src={item.gambar} alt="image" className="" />
              </div>
              <div className={`order-${index % 2 === 0 ? '2' : '1'}`}>
                <p className='px-10'>  
                  {index % 2 === 0
                    ? ''
                    : ''}{
                      item.desc
                    }
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
