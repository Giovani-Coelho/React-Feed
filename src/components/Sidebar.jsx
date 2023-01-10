import { PencilLine } from "phosphor-react"
import { Avatar } from "./avatar"
import style from "./Sidebar.module.css"

export function SideBar() {
  return (
    <aside className={style.sideBar}>
      <img className={style.cover}
        src="https://cdn.hovia.com/app/uploads/Green-Tropical-Plant-Wallpaper-Mural-Plain.jpg" />

      <div className={style.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/98501291?v=4" />
        <strong>Giovani Coelho</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}