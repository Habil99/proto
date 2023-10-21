"use client";

import { PlateEditor } from "@/components/plate-ui/plate-editor";
import { Button } from "@/components";
import { useState } from "react";
import AppFetch from "@/lib/app-fetch";
import { useToast } from "@/components/ui/use-toast";
import { MdPublish } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";

export default function CreatePost() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const updateErrorToast = (updatableToast: ReturnType<typeof toast>) => {
    updatableToast.update({
      id: updatableToast.id,
      variant: "destructive",
      title: "Something went wrong",
      description: "Your post could not be published",
    });
  };

  const handleCreatePost = async (publish = false) => {
    const appFetch = AppFetch.getInstance();
    setIsLoading(true);

    const createPostToast = toast({
      title: "Publishing...",
      description: "Your post is being published",
      duration: 3000,
    });

    try {
      const response = await appFetch.request("/posts", {
        method: "POST",
        body: JSON.stringify({
          title: postTitle,
          content: postContent,
          publish,
        }),
      });

      if (!response.ok) {
        updateErrorToast(createPostToast);
      } else {
        createPostToast.update({
          id: createPostToast.id,
          variant: "default",
          title: "Post published",
          description: `Your post has been published with ${postTitle} title`,
        });
      }
    } catch (e) {
      updateErrorToast(createPostToast);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="">
      <h2 className="mb-6">Write your story</h2>
      <label className="sr-only" htmlFor="title">
        Title
      </label>
      <input
        className="mb-4 rounded-md bg-background h-12 px-4 w-full"
        name="title"
        id="title"
        placeholder="Enter title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <PlateEditor value={postContent} handleChange={setPostContent} />
      <div className="flex items-center space-x-2 mt-6">
        <Button
          position="after"
          variant="secondary"
          onClick={() => handleCreatePost()}
          icon={<RiDraftFill />}
        >
          Save draft
        </Button>
        <Button
          icon={<MdPublish />}
          variant="primary"
          position="after"
          onClick={() => handleCreatePost(true)}
        >
          {isLoading ? "Publishing..." : "Publish"}
        </Button>
      </div>
    </section>
  );
}
