import React, { useState } from 'react';
import css from 'components/Post.module.css';
import publicUrl from 'utils/publicUrl';
import { Link } from 'react-router-dom';
import timespan from 'utils/timespan.js';

function Post(props){
    let currentUserId = props.currentUserId

    let [repsonse, setResponse] = useState();

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
            <div className={css.respondButton}>
                {props.post.userId != currentUserId ? 
                    <div>
                        <Link to={`/responses/${props.post.userId}`}>
                                <button>
                                    Respond
                                </button>
                        </Link>       
                    </div> : null
                }
            </div>
            <time className={css.time}>
                {timespan(props.post.datetime).toUpperCase()} AGO
            </time>
        </article>
    );
}

export default Post;