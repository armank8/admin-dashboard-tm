import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";

const PostsPage = () => {
    return ( <div>
        <BackButton text='Go Back' link='/'></BackButton>
        <PostsTable></PostsTable>
    </div> );
}
 
export default PostsPage;