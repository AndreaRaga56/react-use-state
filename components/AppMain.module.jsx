import blogPosts from "../content"
import style from "./AppMain.module.css";
import AppCard from "./AppCard.module";
console.log(style.main)

function AppMain() {

  const posts = blogPosts.map((curPost, i) =>
    curPost.published &&
    <AppCard
    key={i}
    tags={curPost.tags}
    title={curPost.title}
    content={curPost.content}
    image={curPost.image}
    id={curPost.id}    
    />
  )  

  return (
    <section className={style.main}>
      <div className={style.container}>
        <h1 className={style.titolo}>IL MIO BLOG</h1>
        <div className={style.flex}>
          {posts}
        </div>
      </div>
    </section>
  )
}

export default AppMain