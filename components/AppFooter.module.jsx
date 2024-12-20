import style from "./AppFooter.module.css";
console.log(style.main)

function AppFooter() {
  return (
    <>
      <section className={style.footer}>
        <p className={style.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, provident, consectetur, fuga quis repudiandae fugit nobis distinctio voluptates ea possimus sunt eum! Necessitatibus, enim commodi! Ratione, voluptatem?</p>
      </section>
    </>
  )
}

export default AppFooter