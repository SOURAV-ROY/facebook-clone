import React, {useEffect, useState} from 'react';
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";

import db from "../Firebase/firebase";

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        db.collection("posts")

            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )))
            );
    }, []);

    return (
        <div className="feed">

            {/*StoryReel*/}
            <StoryReel/>

            {/*Message Sender*/}
            <MessageSender/>

            {/*Post*/}
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/*<Post*/}
            {/*    profilePic={"https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"}*/}
            {/*    message={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum incidunt nemo omnis.
            Accusantium aliquid architecto atque aut blanditiis consectetur consequatur culpa deleniti dicta
            dolor dolores enim fugiat illum impedit in maiores minus modi molestias natus necessitatibus nemo
            obcaecati officiis omnis, optio provident quo quos reiciendis repellat sed sunt vel velit."}*/}
            {/*    timestamp={"25th September-2020"}*/}
            {/*    username={"souravroy"}*/}
            {/*    image={"https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"}*/}
            {/*/>*/}

        </div>
    );
}

export default Feed;
