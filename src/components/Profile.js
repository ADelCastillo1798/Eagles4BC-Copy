import React, { useContext } from 'react';
import publicUrl from 'utils/publicUrl'
import { StoreContext } from 'contexts/StoreContexts';
import { Link, useParams } from 'react-router-dom';
import css from 'components/Profile.module.css';
import ProfilePost from 'components/ProfilePost';

function Profile(){

  const store = useContext(StoreContext)
  console.log(store)

  let {userId} = useParams();
  if (!userId){
    userId = store.currentUserId;
  }

  let user = store.users.find(u => u.id === userId);
  console.log(user)
  let userPosts = store.posts.filter(p => p.userId === userId);
  console.log(userPosts)


  return(
    <div>
      <header className={css.header}>
        <div className={css.photo}>
          <img src={publicUrl(user.photo)} alt="Profile" />
        </div>
        <div className={css.name}>
          <span> {user.name} </span>
      </div>
      </header>
      <div className={css.posts}>
        {userPosts.map( post =>
          <ProfilePost post={post}/>
        )}
      </div>
    </div>
  );
}

export default Profile;