import styles from "./Post.module.css"
import { Avatar } from "./avatar"
import { Comment } from "./Comment"

import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"

export function Post({ author, publishedAt, content }) {

  //usado para armazenar os comentarios
  const [comments, setComments] = useState([
    'Ta falando merda em!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    // comando para que a tela nao tenha o comportamento padrao de recarregar
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo eh obrigatorio")
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDelete = comments.filter(comment => {
      return comment !== commentToDelete
    })
    console.log(comments)
    setComments(commentWithoutDelete)

  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(content => {
          return (
            <Comment
              key={content}
              content={content}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}