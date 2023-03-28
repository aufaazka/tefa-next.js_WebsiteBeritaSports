import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { Minus } from '@/components/Minus'
import { Plus } from '@/components/Plus'
import Link from 'next/link'

function getFood(id) {
  const [data, setData] = useState([])

  const url = 'https://api.jsonbin.io/v3/b/6421398eace6f33a22fdd266'
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(url)
        const result = await data.json()
        console.log(result.record)
        setData(result.record)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  console.log("id = " + id);
  const item = data.find((e) => e.id === Number(id))
  console.log("item = " + item);
  if (typeof item === 'object') {
    return item
  }
  return {}
}

function Detail() {
  const router = useRouter()
  const {slug} = router.query;
  console.log("slug = " + slug)
  const food = getFood(slug)

  if (Object.keys(food).length === 1) {
    return <div>Item not found</div>
  }

  const [qty, setQty] = useState(1)
  const [adding, setAdding] = useState(false)

  const total = qty * food.price

  const handleOnAddToCart = () => {
    setAdding(true)
    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? 's' : ''}...`
    )
    addItem(props, qty)
  }

  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* News's image */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 mb-12 ">
            <img
              src={food.image}
              alt={food.name}
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* News's details */}
          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 mt-80 md:mt-24">
            <h2 className="text-3xl font-semibold">{food.headline}</h2>
            <p className='w-80'>
              Source : <a href={food.url} className="italic text-black hover:underline text-">{food.url}</a>
            </p>
            <p className="mt-4">{food.desc}</p>
            <div className="mt-4 pt-4">
                <p className="mt-4">{food.date}</p>
              <div className="mt-1 flex items-center space-x-3">
                {/* <button
                  onClick={() => setQty((prev) => prev - 1)}
                  disabled={qty <= 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-orange-900 rounded-md p-1 border-0"
                >
                  <Minus />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  disabled={qty >= food.stock}
                  className="hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                >
                  <Plus />
                </button> */}
              </div>
              <div className="flex flex-col">
                {/* <button
                  type="button"
                  onClick={handleOnAddToCart}
                  disabled={adding}
                  className="mt-8 border rounded py-2 px-6 bg-orange-900  hover:text-gray-600 hover:bg-gray-100 border-gray-600 hover:border-gray-600 focus:ring-4 focus:ring-opacity-50 focus:ring-gray-500 text-white transition-colors disabled:cursor-not-allowed"
                >
                  Add to cart ({total})
                </button> */}
                <div className="w-24 mt-5 border rounded py-2 px-8 bg-orange-900 hover:text-gray-600 hover:bg-gray-100 border-gray-600 hover:border-gray-600 focus:ring-4 focus:ring-opacity-50 focus:ring-gray-500 text-white transition-colors disabled:cursor-not-allowed flex flex-row">
                  <Link href="/News">Back</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail
