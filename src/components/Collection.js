import React from 'react'
import Top from './Top'
import OwlCarousel from "react-owl-carousel";


const Nfts = [
    {
      id: "1",
      name: "bloob 1",
      price: "9 ETH",
      image: "/assets/meta2.png",
    },
    {
      id: "2",
      name: "bloob 2",
      price: "10 ETH",
      image: "/assets/meta9.png",
    },
    {
      id: "3",
      name: "bloob 3",
      price: "5 ETH",
      image: "/assets/meta3.png",
    },
    {
      id: "4",
      name: "bloob 4",
      price: "8 ETH",
      image: "/assets/meta4.png",
    },
    {
      id: "5",
      name: "bloob 5",
      price: "12 ETH",
      image: "/assets/meta5.png",
    },
    {
      id: "6",
      name: "bloob 6",
      price: "1 ETH",
      image: "/assets/meta6.png",
    },
    {
      id: "7",
      name: "bloob 7",
      price: "15 ETH",
      image: "/assets/meta7.png",
    },
    {
      id: "8",
      name: "bloob",
      price: "22 ETH",
      image: "/assets/meta8.png",
    },
  ];

const Collection = () => {
  return (
    <div className="my-12">
      <Top title={"TOP NFTs"} />
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        autoplaySpeed={2000}
        smartSpeed={1000}
        autoplayTimeout={3000}
        responsive={{
          0: {
            margin: 2,
            items: 1,
          },
          640: {
            items: 2,
            margin: 10,
          },
          1024: {
            items: 3,
            margin: 20,
          },
          1536: {
            items: 4,
            margin: 30,
          },
        }}
      >
        {Nfts.map((t) => (
          <div
            key={t.id}
            className="top-hover relative border-8 border-edges pb-5 bg-subMain flex-colo"
          >
            <div className="relative w-full">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-64 object-cover"
              />
              <div className="top-hidden absolute transitione top-1 bottom-1 left-1 right-1 bg-overlay flex-colo">
                <h2 className="font-semibold text-whites">{t.name}</h2>
                <div className="mt-2 text-lg font-black tracking-wider text-whites">
                  {t.price}
                </div>
              </div>
            </div>

            <button className="px-6 text-whites border-edges tracking-wide py-3 mt-5 bt-linear font-bold text-sm rounded">
              Read More
            </button>
          </div>
        ))}
      </OwlCarousel>
    </div>
  )
}

export default Collection