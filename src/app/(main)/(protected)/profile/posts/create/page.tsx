"use client";

import { PlateEditor } from "@/components/plate-ui/plate-editor";
import { Button } from "@/components";
import { ChangeEvent, DragEvent, useCallback, useRef, useState } from "react";
import AppFetch from "@/lib/app-fetch";
import { useToast } from "@/components/ui/use-toast";
import { MdPublish } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { Trash, UploadCloud } from "lucide-react";
import { cn, isImageFile } from "@/lib/utils";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export default function CreatePost() {
  const { toast } = useToast();

  const uploadRef = useRef<HTMLInputElement>(null);

  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<[] | null>(null);
  const [postThumbnail, setPostThumbnail] = useState<File | null>(null);
  const [postThumbnailPreview, setThumbnailPreview] = useState<string | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const updateThumbnailState = useCallback((file: File | null) => {
    if (file) {
      const maxSize = 1024 * 1024 * 2; // 2MB
      const isTooLarge = file.size > maxSize;
      if (isTooLarge) {
        return toast({
          variant: "destructive",
          title: "File is too large",
          description: "Please upload a file that is less than 2MB",
          duration: 3000,
        });
      }
      if (isImageFile(file.type)) {
        setPostThumbnail(file);
        setThumbnailPreview(URL.createObjectURL(file));
      } else {
        toast({
          variant: "destructive",
          title: "File is not an image",
          description: "Please upload an image file",
          duration: 3000,
        });
      }
    } else {
      setPostThumbnail(null);
      setThumbnailPreview(null);
    }
  }, []);

  const handleUploadInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files ? e.target.files[0] : null;
      updateThumbnailState(file);
    },
    [],
  );

  const handleDrop = useCallback(
    (e: DragEvent<HTMLLabelElement>) => {
      e.preventDefault();

      const files = e.dataTransfer.files;
      const file = files[0];

      updateThumbnailState(file);

      setIsDragOver(false);
    },
    [toast],
  );

  const handleDragOver = useCallback((e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLLabelElement>) => {
    setIsDragOver(false);
  }, []);

  const handleDragEnd = useCallback((e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const updateErrorToast = useCallback(
    (updatableToast: ReturnType<typeof toast>, publish: boolean) => {
      const errorMessageDescription = publish
        ? "Your post could not be published"
        : "Your post could not be saved as a draft";

      updatableToast.update({
        id: updatableToast.id,
        variant: "destructive",
        title: "Something went wrong",
        description: errorMessageDescription,
      });
    },
    [],
  );

  const handleCreatePost = useCallback(
    async (publish = false) => {
      if (!postTitle || !postContent || !postThumbnail) {
        return toast({
          variant: "destructive",
          title: "Please fill out all fields",
          description: "Please fill out all fields before submitting",
          duration: 3000,
        });
      }

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

      const postThumbnailBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(postThumbnail);
      });

      const formData = new FormData();
      formData.append("title", postTitle);
      formData.append("content", JSON.stringify(postContent));
      formData.append("thumbnail", postThumbnailBase64);
      formData.append("publish", publish ? "1" : "0");

      try {
        await appFetch.request("/posts", {
          method: "POST",
          body: formData,
          sendContentType: false,
        });

        createPostToast.update({
          id: createPostToast.id,
          variant: "default",
          title: "Post published",
          description: successMessageDescription,
        });
      } catch (e) {
        updateErrorToast(createPostToast, publish);
      } finally {
        setIsLoading(false);
      }
    },
    [postTitle, postContent, postThumbnail],
  );

  return (
    <section className="">
      <h2 className="mb-6">Write your story</h2>
      <label className="sr-only" htmlFor="title">
        Title
      </label>
      <input
        className="mb-4 rounded-md bg-body-background-color border border-border-color h-12 px-4 w-full"
        name="title"
        id="title"
        placeholder="Enter title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      {!postThumbnailPreview ? (
        <label
          htmlFor="thumbnail"
          className={cn(
            "p-4 rounded-md flex flex-col min-h-[8rem] space-y-2 cursor-pointer my-4 items-center justify-center border border-dashed border-border-color",
            {
              "border-solid bg-zinc-800": isDragOver,
            },
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDragEnd={handleDragEnd}
        >
          <UploadCloud size={64} />
          <p className="text-sm text-foreground/60">Drag & drop image here</p>
          <div className="flex items-center gap-2">
            <div className="h-px bg-border-color rounded-md w-10"></div>
            <div className="text-foreground/60">or</div>
            <div className="h-px bg-border-color rounded-md w-10"></div>
          </div>
          <Button
            className="bg-blue-700 btn__md text-sm"
            onClick={() => uploadRef?.current?.click()}
          >
            Browse files
          </Button>
          <input
            ref={uploadRef}
            type="file"
            className="sr-only"
            id="thumbnail"
            onChange={handleUploadInputChange}
          />
        </label>
      ) : (
        <div className="relative">
          <Image
            className="rounded-md w-full max-h-[40rem] object-cover"
            src={postThumbnailPreview}
            alt="Phost thumbnail preview | Proto"
            width={800}
            height={600}
          />
          <button
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "destructive",
                className:
                  "z-10 top-2 right-2 absolute !px-4 !rounded-sm !text-sm mt-3",
              }),
            )}
            onClick={() => setThumbnailPreview(null)}
          >
            <Trash />
          </button>
        </div>
      )}
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
