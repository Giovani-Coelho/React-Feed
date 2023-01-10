import { Avatar } from "./avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} widthMedium={true} src="https://avatars.githubusercontent.com/u/98501291?v=4" />
          <div className={styles.authorInfo}>
            <strong>Giovani Coelho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="09 de janeiro as 17:30h" dateTime="2023-01-09 17:28:30">Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}