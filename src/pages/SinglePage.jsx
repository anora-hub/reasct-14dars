import React from 'react'
import { useParams } from 'react-router-dom'
import useGet from '../Hook/useGet';
import SweperCard from '../components/SweperCard';

const SinglePage = () => {
  const { id } = useParams();

  const { data, loading } = useGet({ url: `products/${id}` });

  if (loading) {
    return <div>Loading...</div>
  }

  const item = data?.data;

  return (
    <div className=' grid grid-cols-2 container mx-auto py-5' >
     <div>
        <SweperCard  images={item.images}/>
     </div>
     <div>
     <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quis voluptatem dolorem animi ea nobis. Quis sint repellendus ea illum voluptatibus quia quibusdam reiciendis necessitatibus consequuntur facere, assumenda non cum id placeat dolore reprehenderit? Nam ipsam necessitatibus expedita, repellendus nobis doloremque temporibus enim officia aliquid deserunt velit ducimus obcaecati pariatur a corrupti architecto accusamus tempore voluptas dolores numquam ab, consequuntur harum. Error eaque nisi quis amet doloremque vitae omnis, nam molestiae facere. Nostrum qui, cupiditate pariatur distinctio rem suscipit magnam maiores numquam aliquam, quasi unde laudantium consectetur ipsum aspernatur praesentium voluptatum explicabo aut laboriosam voluptatem commodi. Voluptatibus, quam enim. Molestiae?</h1>
     </div>
      
    </div>
  )
}

export default SinglePage;
