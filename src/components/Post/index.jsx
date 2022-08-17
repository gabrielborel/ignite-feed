import styles from './Post.module.scss';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src='https://avatars.githubusercontent.com/u/69679068?v=4'
            alt='Gabriel Borel avatar'
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Borel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='17 de Agosto ás 19:30' dateTime='2022-08-17'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento
          da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href='#'>jane.design/doctorcare </a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  );
};
