import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">

            {/*StoryReel*/}
            <StoryReel/>

            {/*Message Sender*/}
            <MessageSender/>

            {/*Post*/}
            <Post
                profilePic={"https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"}
                message={"message"}
                timestamp={"timestamp"}
                username={"souravroy"}
                image={"https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"}
            />
            <Post
                profilePic={"https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"}
                message={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores" +
                " aspernatur assumenda consectetur consequuntur dolor dolorem doloribus ea earum " +
                "exercitationem expedita facilis fugiat illo impedit inventore ipsam itaque labore" +
                " laborum, laudantium maiores minima molestiae natus nemo, nihil nobis optio quam " +
                "quasi recusandae repudiandae sed, sunt suscipit ullam unde ut voluptas"}
                timestamp={"timestamp"}
                username={"sourav"}
                // image={"https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"}
            />
            <Post
                profilePic={"https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"}
                message={"message"}
                timestamp={"timestamp"}
                username={"souravroy"}
                image={"https://www.gstatic.com/tv/thumb/persons/290473/290473_v9_ba.jpg"}
            />
        </div>
    );
}

export default Feed;
