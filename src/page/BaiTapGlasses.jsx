import React, { useState } from "react";
import "./baiTapGlasses.scss";
const BaiTapGlasses = () => {
  const [urlMatKinh, setUrlMatKinh] = useState({
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  });
  console.log(urlMatKinh);
  let arrKinh = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  return (
    // <div className="bg-red-300 bai-tap-mat-kinh h-screen py-40">
    //   BaiTapGlasses
    //   <div className="container">
    //     <div className=" d-flex mat-kinh-content h-96 items-center ">
    //       <div className="mat-kinh-nguoi-mau h-full ">
    //         <img className="h-full" src={nguoiMau} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bai-tap-mat-kinh h-screen">
      <div className="overlay">
        <div className="  ">
          <h2 className=" text-white p-8 mb-8 title  uppercase w-full text-center text-3xl font-bold">
            Try glasses online
          </h2>
          <div className="mat-kinh-content  ">
            <div className="image  flex  justify-around">
              <div className="relative image-model-left">
                <img className=" h-64" src="./glassesImage/model.jpg" alt="" />
                <img
                  className="image-glasses-model absolute top-16 left-1/4  z-40 w-1/2"
                  src={urlMatKinh.url}
                  alt=""
                />
                <div className="absolute bottom-0 glasses-inform bg-orange-400 opacity-55 p-1  ">
                  <h3 className="text-blue-950 font-semibold ">
                    {urlMatKinh.name}{" "}
                  </h3>
                  <p className="text-xs text-white mb-5">{urlMatKinh.desc}</p>
                </div>
              </div>
              <img className="h-64" src="./glassesImage/model.jpg" alt="" />
            </div>
            <div className="flex flex-wrap p-5    mat-kinh-choose mx-32  my-10 bg-white">
              {arrKinh.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="mat-kinh-button flex item-center m-3   p-2  rounded border-zinc-500  border-2"
                    onClick={() => {
                      setUrlMatKinh({
                        name: item.name,
                        url: item.url,
                        desc: item.desc,
                      });
                    }}
                  >
                    <img className="w-full" src={item.url} alt="" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapGlasses;
