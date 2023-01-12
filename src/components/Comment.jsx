import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    console.log("deletar")

    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/98501291?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Giovani Coelho</strong>
              <time title="09 de janeiro as 17:30h" dateTime="2023-01-09 17:28:30">Cerca de 1h atras</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}