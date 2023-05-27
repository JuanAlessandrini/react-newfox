import type {FunctionComponent} from 'react';
import { useRef, useEffect , useState} from 'react';
import type { ImgHTMLAttributes } from 'react';

//generatte rnd fn

type LazyImageProps = {id: string, width: number, url:string};
type ImageNative = ImgHTMLAttributes<HTMLImageElement>;
type Props = LazyImageProps & ImageNative;

export const LazyImage = (props : Props) => {
    const node = useRef<HTMLImageElement>(null);
    const [src, setSrc] = useState("");

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setSrc(props.url);
                }
            })
        });
        if(node.current){
            observer.observe(node.current);
        }
        

        return ()=>{
            observer.disconnect()
        }
    },[props]);
    
    return <img ref={node} key={props.id}  src={src}  className="rounded bg-gray-300" {...props} />
}