import React from 'react';
import './AuthorPost.css';
import PostCard from './PostCard';

function AuthorPost(props) {
    return (
        <section id="authorPost">
            <div className="container">
                <div className="row d-flex flex-wrap">
                    <div className="col-md-4">
                        <PostCard 
                            cardImg = "https://picsum.photos/seed/picsum/300/400"
                            cardTitle = "How can you build an Atma Nirbar Bharat?"
                            cardText = "This is for an IT company webs required to make better. This section assigned for the sub heading, so we can write something."
                            cardProfileImg = "https://i.pravatar.cc/50"
                            cardProfileName = "Anisha Roy, Author"
                            cardDate = "07/09/2020"
                        />
                    </div>
                    <div className="col-md-4">
                        <PostCard 
                            cardImg = "https://picsum.photos/seed/picsum/300/400"
                            cardTitle = "101 ways to make lots of money as student"
                            cardText = "This is for an IT company webs required to make better. This section assigned for the sub heading, so we can write something."
                            cardProfileImg = "https://i.pravatar.cc/100"
                            cardProfileName = "Natasha Pal, Author"
                            cardDate = "07/09/2020"
                        />
                    </div>
                    <div className="col-md-4">
                        <PostCard 
                            cardImg = "https://picsum.photos/seed/picsum/300/400"
                            cardTitle = "101 ways to make lots of money as student"
                            cardText = "This is for an IT company webs required to make better. This section assigned for the sub heading, so we can write something."
                            cardProfileImg = "https://i.pravatar.cc/100"
                            cardProfileName = "Anisha Roy, Author"
                            cardDate = "07/09/2020"
                        />
                    </div>
                    <div className="col-md-4">
                        <PostCard 
                            cardImg = "https://picsum.photos/seed/picsum/300/400"
                            cardTitle = "101 ways to make lots of money as student"
                            cardText = "This is for an IT company webs required to make better. This section assigned for the sub heading, so we can write something."
                            cardProfileImg = "https://i.pravatar.cc/100"
                            cardProfileName = "Natasha Pal, Author"
                            cardDate = "07/09/2020"
                        />
                    </div>
                    <div className="col-md-4">
                        <PostCard 
                            cardImg = "https://picsum.photos/seed/picsum/300/400"
                            cardTitle = "101 ways to make lots of money as student"
                            cardText = "This is for an IT company webs required to make better. This section assigned for the sub heading, so we can write something."
                            cardProfileImg = "https://i.pravatar.cc/100"
                            cardProfileName = "Anisha Roy, Author"
                            cardDate = "07/09/2020"
                        />
                    </div>
                    <div className="col-md-4">
                        <PostCard 
                            cardImg = "https://picsum.photos/seed/picsum/300/400"
                            cardTitle = "101 ways to make lots of money as student"
                            cardText = "This is for an IT company webs required to make better. This section assigned for the sub heading, so we can write something."
                            cardProfileImg = "https://i.pravatar.cc/100"
                            cardProfileName = "Natasha Pal, Author"
                            cardDate = "07/09/2020"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AuthorPost;