import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

const PostsPage = () => {
    return ( <div>
        <BackButton text='Go Back' link='/'></BackButton>
        <PostsTable limit={6}></PostsTable>
        <PostsPagination></PostsPagination>
    </div> );
}
 
export default PostsPage;