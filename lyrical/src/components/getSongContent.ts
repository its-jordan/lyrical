import fs from "fs";
import matter from "gray-matter";

const getSongContent = (slug: string) => {
  const folder = "songs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default getSongContent;
