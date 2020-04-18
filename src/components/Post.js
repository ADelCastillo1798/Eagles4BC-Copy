import React from 'react';
import css from 'components/Post.module.css';
import publicUrl from 'utils/publicUrl';


function Post(props){
    return (
        <article className={css.post}>
            <header className={css.title}>
                {props.post.title}
            </header>
            <section>

            </section>
        </article>
    );
}

export default Post;