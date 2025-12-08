import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bold,
  Italic,
  Link as LinkIcon,
  Image,
  List,
  ListOrdered,
  Quote,
  Code,
  Eye,
  Save,
  Upload,
  X,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const toolbarButtons = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: LinkIcon, label: "Link" },
  { icon: Image, label: "Image" },
  { icon: List, label: "Bullet List" },
  { icon: ListOrdered, label: "Numbered List" },
  { icon: Quote, label: "Quote" },
  { icon: Code, label: "Code" },
];

const CreateArticlePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>(["Technology", "AI"]);
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <DashboardLayout title="Create Article" subtitle="Write and publish a new article">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Editor */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              {/* Title Input */}
              <div className="border-b border-border p-6">
                <Input
                  placeholder="Article title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-none bg-transparent font-display text-2xl font-bold placeholder:text-muted-foreground focus-visible:ring-0"
                />
              </div>

              {/* Toolbar */}
              <div className="flex items-center gap-1 border-b border-border px-4 py-2">
                {toolbarButtons.map((button) => (
                  <Button
                    key={button.label}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-muted-foreground hover:text-foreground"
                    title={button.label}
                  >
                    <button.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>

              {/* Content Editor */}
              <div className="min-h-[500px] p-6">
                <Textarea
                  placeholder="Start writing your article in Markdown..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[450px] resize-none border-none bg-transparent text-base leading-relaxed placeholder:text-muted-foreground focus-visible:ring-0"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg">Publish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button variant="outline" className="w-full">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Separator />
              <Button className="w-full bg-green-600 hover:bg-green-700">Publish Article</Button>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg">Featured Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex aspect-video cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 transition-colors hover:border-primary hover:bg-muted">
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground/70">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg">Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="ml-1 rounded-full p-0.5 hover:bg-muted"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                />
                <Button variant="outline" onClick={addTag}>
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg">SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Meta Description</Label>
                <Textarea
                  placeholder="Write a short description for search engines..."
                  className="resize-none"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateArticlePage;
