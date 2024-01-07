import React from 'react'
import CardUi from '../components/CardIUi';
import { useGetAllProductsQuery } from '../features/productApi';


const HomePage = () => {

  const { isLoading, isError, data, error } = useGetAllProductsQuery();



  if (isLoading) {

    return <div className='h-[300px] mt-14'>
      <lottie-player src="https://lottie.host/01986b4b-7629-473a-8223-f06d23ec4120/LelU3WnIJp.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>

  }



  return (
    <div className='p-5 grid grid-cols-3 gap-2 items-start'>
      {data && data.map((product) => {
        return <CardUi key={product._id} product={product} />
      })}

    </div>
  )
}

export default HomePage