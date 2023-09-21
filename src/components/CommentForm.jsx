import { CommentList } from './CommentList.jsx'
import { useRef, useState } from 'react'

export const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
  });
  const formRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formRef.current.reset();
    try {
       await fetch('http://olevengalecuento.online/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }

  };
  return (
    <div className="bg-white w-full">
      <form className={'mx-auto max-w-7xl px-6 lg:px-8 flex items-start pl-3 flex-row pb-6 '} onSubmit={handleSubmit} ref={formRef}>
        <div className={'items-center mr-3'}>
          <img src={'https://www.gravatar.com/avatar/7826a3c63d58b7063f7907ed4dc6f8f2?size=50&r=pg&d=mm'}/>
        </div>
        <div className={'flex  justify-center items-center flex-col'}>
          <div className={'w-96'}>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Déja tu comentario aqui
            </label>
            <textarea id="message" rows="4" name={'content'}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Déja tu comentario aqui"  onChange={handleChange}></textarea>
          </div>
          <div className={'w-96'}>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre
            </label>
            <input type="text" id="first_name" name={'name'}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Tu hombre" required  onChange={handleChange}/>
          </div>

          <button className={'bg-blue-300 px-4 py-2 rounded mt-3'}>Enviar</button>
        </div>
      </form>
      <CommentList pent={handleSubmit}/>
    </div>
  )
}

