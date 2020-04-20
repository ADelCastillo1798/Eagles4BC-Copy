import React, { useContext, useState } from 'react';
import publicUrl from 'utils/publicUrl';
import css from 'components/PostDetails.module.css';
import { StoreContext } from 'contexts/StoreContext';
import { Link, useParams, useLocation } from 'react-router-dom';
import ProfilePost from 'components/ProfilePost';



function PostDetails(props) {
    let location = useLocation();
    console.log(location);
    var stringURL = location.pathname;
    var postId = stringURL.replace("/PostDetails/post-", "");
    console.log(postId);
    const store = useContext(StoreContext);
    let {userId} = useParams();
    
    
    if (!userId){
        userId = store.currentUserId;
    }
    let post = store.posts[postId-1];
      let user = store.users.find(u => u.id === userId);

    return(
        <div>
            <header className={css.header}>
            <div>
                {post.desc}
            </div>
            </header>
        </div>
         
    );
}

export default PostDetails;