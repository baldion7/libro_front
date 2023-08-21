import { useEffect, useState } from 'react';

export const CommentList = ({pent}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://191.101.1.160/api/comments');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error al obtener los comentarios:', error);
      }
    };
    fetchComments();
    const intervalId = setInterval(fetchComments, 1000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      {data && data.map((comment) => (
        <div key={comment.id} className={'mx-auto max-w-7xl px-6 lg:px-8 flex items-start pl-3 flex-row pb-6 '}>
          <div className={'items-center mr-3'}>
            <img src={'https://www.gravatar.com/avatar/7826a3c63d58b7063f7907ed4dc6f8f2?size=50&r=pg&d=mm'} />
          </div>
          <div className={'flex  justify-center items-center flex-col'}>
            <div className={'w-96'}>
              <div>Comentarios Anteriores</div>
              <p className="mb-3 text-gray-500 dark:text-gray-400">{comment.Content}</p>
            </div>
            <div className={'w-96'}>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nombre
              </label>
              <p className="mb-3 text-gray-500 dark:text-gray-400">{comment.Author}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
