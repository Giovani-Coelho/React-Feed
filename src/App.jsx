import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/Sidebar'

import styles from "./App.module.css"

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/98501291?v=4",
      name: "Giovani Coelho",
      role: "FullStack Developer"
    },
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋' },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://pm1.narvii.com/6598/7e61e6627de28d516436a4889d0d488a51a5aed0_128.jpg",
      name: "Homem Aranha",
      role: "Super Herói"
    },
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋' },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

