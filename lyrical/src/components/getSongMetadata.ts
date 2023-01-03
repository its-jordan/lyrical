import fs from "fs";
import matter from "gray-matter";
import { SongMetadata } from "./SongMetadata";

const getSongMetadata = (): SongMetadata[] => {
  const folder = "src/songs/";
  const files = fs.readdirSync(folder);
  const markdownPages = files.filter((file) => file.endsWith(".md"));

  // Get Gray Matter
  const songs = markdownPages.map((fileName) => {
    const fileContents = fs.readFileSync(`src/songs/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      albumArt: matterResult.data.albumArt,
      artist: matterResult.data.artist,
      song: matterResult.data.song,
      album: matterResult.data.album,
      release: matterResult.data.release,
      slug: fileName.replace(".md", ""),
    };
  });

  return songs;
};

export default getSongMetadata;
