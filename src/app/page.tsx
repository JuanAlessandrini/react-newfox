"use client"; 
import Image from 'next/image'
import {useState, useEffect} from 'react';
import type{MouseEventHandler} from 'react';
import {LazyImage} from '../../components/RandomFox'
import {random} from 'lodash'

export default function Home() {
  const generateId = ()=> random(1,400);
  
  const [images, setImages] = useState<Array<IFoxImageItem>>([
    
  ]);
  
  // {
  //   id: 'item'+ (keyId++).toString,
  //   url:`https://randomfox.ca/images/${random()}.jpg`
  // }
  const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault();
      const newImageItem:IFoxImageItem = {
        id: generateId(),
        url:`https://randomfox.ca/images/${random(1,123)}.jpg`
      };

      setImages(
        [
          ...images,
          newImageItem
        ]
      );

  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <button className="btn" onClick={addNewFox}>Agregar Zorro</button>
        
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/img/JAS_logo_neg_vert.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {images.map((image, index)=>(
            <div className="p-4">
              <LazyImage id={image.id} url={image.url} width={200} onClick={()=>{console.log('click!')}} title='IMagen de Zorro'/>
            </div>
          ))}
        </div>
      
    </main>
  )
}
