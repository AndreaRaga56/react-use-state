/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./AppCard.module.css";

function AppCard({ id, title, content, image, tags}) {

    const tagElems = tags.map((curTag, index)=>{
        return <span key={index} className={curTag}>{curTag} </span>
    })

    const seHaiImg = () =>{
        return <div> <img className={style.immagine} src={image} alt="" /></div>
    }

    const seNonHaiImg =()=>{
        return <div> <img className={style.immagine} src="https://placehold.co/600x400" alt="" /></div>
    }

    return (
        <div className={style.card}>
            {image? seHaiImg(): seNonHaiImg()}
            <h3 className={style.titoloPost}>{title}</h3>
            <p className={style.paragrafo}>{content}</p>
            <div className={style.tag}>{tagElems}</div>
            <div className={style.button}>LEGGI DI PIÙ</div>
        </div>
    )
}

export default AppCard