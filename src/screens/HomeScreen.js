import React from 'react'
import Commonproductcont from "../components/CommonProductcont";
import Flashsalecont from "../components/Flashsalecont";
import MainSlider from '../components/MainSlider';
import Categoriescont from '../components/Categoriescont';


export default function HomeScreen() {
  return (
    <>
    <MainSlider></MainSlider>
    <Flashsalecont></Flashsalecont>
    <Commonproductcont></Commonproductcont>
    <Categoriescont></Categoriescont>
    </>
  )
}
