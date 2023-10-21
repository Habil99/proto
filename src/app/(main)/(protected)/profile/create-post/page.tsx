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

  const updateErrorToast = (
    updatableToast: ReturnType<typeof toast>,
    publish: boolean,
  ) => {
    const errorMessageDescription = publish
      ? "Your post could not be published"
      : "Your post could not be saved as a draft";

    updatableToast.update({
      id: updatableToast.id,
      variant: "destructive",
      title: "Something went wrong",
      description: errorMessageDescription,
    });
  };

  const handleCreatePost = async (publish = false) => {
    const appFetch = AppFetch.getInstance();
    setIsLoading(true);

    const messageTitle = publish ? "Publishing..." : "Saving...";
    const messageDescription = publish
      ? "Your post is being published"
      : "Your post is being saved as a draft";
    const successMessageDescription = publish
      ? "Your post has been published"
      : "Your post has been saved as a draft";

    const createPostToast = toast({
      title: messageTitle,
      description: messageDescription,
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
        updateErrorToast(createPostToast, publish);
      } else {
        createPostToast.update({
          id: createPostToast.id,
          variant: "default",
          title: "Post published",
          description: successMessageDescription,
        });
      }
    } catch (e) {
      updateErrorToast(createPostToast, publish);
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
          disabled={isLoading}
        >
          Save draft
        </Button>
        <Button
          icon={<MdPublish />}
          variant="primary"
          position="after"
          onClick={() => handleCreatePost(true)}
          disabled={isLoading}
        >
          Publish
        </Button>
      </div>
    </section>
  );
}
