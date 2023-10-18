import { PlateEditor } from "@/components/plate-ui/plate-editor";
import { Button } from "@/components";

export default function CreatePost() {
  return (
    <section className="">
      <h2 className="mb-6">Write your story</h2>
      <PlateEditor />
      <Button className="mt-6" variant="primary">
        Publish
      </Button>
    </section>
  );
}
