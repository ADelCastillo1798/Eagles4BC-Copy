import React from 'react';
import css from 'components/ProfilePost.module.css';
import publicUrl from 'utils/publicUrl';
import timespan from 'utils/timespan.js';


function ProfilePost(props){
    return (
        <article className={css.post}>
            <header className={css.title}>
                {props.post.title}
            </header>
            <section className={css.desc}>
                {props.post.desc}
            </section>
            <section className={css.tags}>
                {props.post.tags.map(tag =>
                    <span>{tag}</span>
                )}
            </section>
            <div>
                <time className={css.time}>
                    {timespan(props.post.datetime).toUpperCase()} AGO
                </time>
            </div>
        </article>
    );
}

export default ProfilePost;