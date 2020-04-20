import React from 'react';
import css from 'components/Post.module.css';
import publicUrl from 'utils/publicUrl';
import { Link } from 'react-router-dom';

function Post(props){
    return (
        <article className={css.post}>
            <div className={css.top}>
                <div className={css.author}>
                    <Link to={`/profile/${props.post.userId}`}>
                        <img src={publicUrl(props.post.userPhoto)} alt='User Pic' />
                        <span>{props.post.userId}</span>
                    </Link>
                </div>
                <div>
                    <header className={css.title}>
                        {props.post.title}
                    </header>
                    <section className={css.desc}>
                        {props.post.desc}
                    </section>
                </div>
            </div>
            <div className={css.bottom}>
                <section className={css.tags}>
                    {props.post.tags.map(tag =>
                        <span>{tag}</span>
                    )}
                </section>
            </div>
        </article>
    );
}

export default Post;