import style from "./Sidebar.module.css"

export function SideBar() {
  return (
    <aside className={style.sideBar}>
      <img className={style.cover}
        src="https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={style.profile}>
        <strong>Giovani Coelho</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}