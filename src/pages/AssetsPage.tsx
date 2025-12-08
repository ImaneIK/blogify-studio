import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Upload, Grid, List, MoreHorizontal, Trash2, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import blogHero1 from "@/assets/blog-hero-1.jpg";
import blogThumb1 from "@/assets/blog-thumb-1.jpg";
import blogThumb2 from "@/assets/blog-thumb-2.jpg";
import blogThumb3 from "@/assets/blog-thumb-3.jpg";
import blogThumb4 from "@/assets/blog-thumb-4.jpg";

const mockAssets = [
  { id: "1", name: "blog-hero-1.jpg", url: blogHero1, size: "245 KB", type: "image/jpeg", uploadedAt: "2024-01-15" },
  { id: "2", name: "blog-thumb-1.jpg", url: blogThumb1, size: "89 KB", type: "image/jpeg", uploadedAt: "2024-01-14" },
  { id: "3", name: "blog-thumb-2.jpg", url: blogThumb2, size: "76 KB", type: "image/jpeg", uploadedAt: "2024-01-12" },
  { id: "4", name: "blog-thumb-3.jpg", url: blogThumb3, size: "82 KB", type: "image/jpeg", uploadedAt: "2024-01-10" },
  { id: "5", name: "blog-thumb-4.jpg", url: blogThumb4, size: "91 KB", type: "image/jpeg", uploadedAt: "2024-01-08" },
];

const AssetsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <DashboardLayout title="Assets" subtitle="Manage your media library">
      {/* Actions Bar */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search assets..." className="pl-10" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-border">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="rounded-r-none"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              className="rounded-l-none"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      {/* Upload Zone */}
      <Card className="mb-6">
        <CardContent className="p-0">
          <div className="flex cursor-pointer items-center justify-center border-2 border-dashed border-border bg-muted/30 py-12 transition-colors hover:border-primary hover:bg-muted/50">
            <div className="text-center">
              <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-3 text-sm font-medium text-foreground">
                Drop files here or click to upload
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Supports: JPG, PNG, GIF, WEBP, SVG up to 10MB
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assets Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {mockAssets.map((asset) => (
            <Card key={asset.id} className="group overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={asset.url}
                  alt={asset.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all group-hover:bg-foreground/40 group-hover:opacity-100">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="secondary" className="h-9 w-9">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy URL
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <CardContent className="p-3">
                <p className="truncate text-sm font-medium text-foreground">{asset.name}</p>
                <p className="text-xs text-muted-foreground">{asset.size}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="divide-y divide-border p-0">
            {mockAssets.map((asset) => (
              <div
                key={asset.id}
                className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50"
              >
                <img
                  src={asset.url}
                  alt={asset.name}
                  className="h-12 w-16 rounded object-cover"
                />
                <div className="flex-1 overflow-hidden">
                  <p className="truncate font-medium text-foreground">{asset.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {asset.size} • {asset.type}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{asset.uploadedAt}</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy URL
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </DashboardLayout>
  );
};

export default AssetsPage;
