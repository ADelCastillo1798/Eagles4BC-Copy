import React, { useContext } from 'react';
import publicUrl from 'utils/publicUrl'
import { StoreContext } from 'contexts/StoreContexts';
import { Link, useParams } from 'react-router-dom';
import css from 'components/Profile.module.css';

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
    <header className={css.header}>

    </header>
  );
}

export default Profile;