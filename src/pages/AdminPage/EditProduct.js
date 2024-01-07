import React from 'react'
import EditForm from './EditForm';
import { useGetProductByIdQuery } from '../../features/productApi';
import { useParams } from 'react-router';

const EditProduct = () => {
  const { id } = useParams();

  const { isLoading, isError, error, data } = useGetProductByIdQuery(id);

  return (
    <>
      {data && <EditForm product={data} />}

    </>
  )
}

export default EditProduct