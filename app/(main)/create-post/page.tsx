import BackButton from "@/components/Shared/BackButton";
import CreatePost from "@/components/posts/CreatePost";

export default function CreatePostPage() {
  return (
    <div>
      <BackButton text="Go Back" link="/"></BackButton>
      <CreatePost></CreatePost>
    </div>
  );
}
