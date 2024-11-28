interface CreatePostProps {
  title?: string;
}

export default function CreatePost({ title }:CreatePostProps) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">
        {title ? title : " Create Post"}
      </h3>

    </div>
  );
}
