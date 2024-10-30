import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { imgDB } from "./Config";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

export default function FirebaseImgUpload() {
    const [image, setImage] = useState('');
    const [imgUrl, setImgUrl] = useState([]);

    const handleClick = () => {
        const imgRef = ref(imgDB, `images/${v4()}`);
        uploadBytes(imgRef, image)
    }

    useEffect(() => {
        listAll(ref(imgDB, "images")).then(imgs => {
            console.log(imgs)
            imgs.items.forEach(val => {
                getDownloadURL(val).then(url=> {
                    setImgUrl(data=> [...data, url])
                })
            })
        })
    },[])

    return (
        <>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
            <br/>
            {
                imgUrl.map(dataVal=><div>
                    <img src={dataVal} height='200px' width='200px'/>
                </div>)
            }
        </>
    )
        
}