import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/Layouts/MainLayout'
import CastInfo from '../components/UI/Castinfo/Castinfo'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouLIst'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'
export default function HomeView() {
    return (
   <MainLayout>
       <FeaturedMedia/>
       <PosterView/>
       <CastInfo/> 
   </MainLayout>
    )
} 