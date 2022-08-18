import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.scss';
import { Avatar } from '../Avatar';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Borel</strong>

              <time title='17 de Agosto ás 19:30' dateTime='2022-08-17'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir<span>09</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
