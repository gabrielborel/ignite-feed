import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.scss';

export const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(['Legaaal demais !!!']);
  const [newCommentContent, setnewCommentContent] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
    locale: ptBr,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const handleNewCommentContentChange = (e) => {
    e.target.setCustomValidity('');
    setnewCommentContent(e.target.value);
  };

  const handleCreateNewComment = (e) => {
    e.preventDefault();

    const updatedComments = [...comments, newCommentContent];
    setComments(updatedComments);
    setnewCommentContent('');
  };

  const deleteComment = (commentToDelete) => {
    const updatedComments = comments.filter((comment) => comment !== commentToDelete);
    setComments(updatedComments);
  };

  const handleNewCommentInvalid = (e) => {
    e.target.setCustomValidity('Comentário é obrigatório!');
  };

  const isNewCommentContentEmpty = newCommentContent.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }, id) => {
          if (type === 'paragraph') {
            return <p key={id}>{content}</p>;
          } else if (type === 'link') {
            return (
              <p key={id}>
                <a href='#'>{content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          value={newCommentContent}
          onChange={handleNewCommentContentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button disabled={isNewCommentContentEmpty} type='submit'>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, id) => (
          <Comment content={comment} onDeleteComment={deleteComment} key={id} />
        ))}
      </div>
    </article>
  );
};
