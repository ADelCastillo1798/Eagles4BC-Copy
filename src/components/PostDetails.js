import React, { useContext } from 'react';
import css from 'components/PostDetails.module.css';
import { StoreContext } from 'contexts/StoreContext';
import { useParams, useLocation } from 'react-router-dom';



function PostDetails() {
    let location = useLocation();
    var stringURL = location.pathname;
    var postId = stringURL.replace("/PostDetails/post-", "");
    const store = useContext(StoreContext);
    let {userId} = useParams();
    
    
    if (!userId){
        userId = store.currentUserId;
    }
    let post = store.posts[postId-1];
    //   let user = store.users.find(u => u.id === userId);

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