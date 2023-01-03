import Markdown from "markdown-to-jsx";
import "../../../styles/globals.css";
import getSongContent from "../../../components/getSongContent";
import getSongMetadata from "../../../components/getSongMetadata";
import Link from "next/link";

export const generateStaticParams = async () => {
  const songs = getSongMetadata();
  return songs.map((songs) => ({
    slug: songs.slug,
  }));
};

const SongPage = (props: any) => {
  const slug = props.params.slug;
  const songs = getSongContent(slug);
  return (
    <div className="">
      <header className="fixed top-12 z-50 flex h-20 w-full flex-row items-center justify-center gap-4 bg-white/50 py-4 px-4 backdrop-blur-sm">
        <img
          className="w-12"
          src={songs.data.albumArt}
          alt={`Cover art for ${songs.data.album} by ${songs.data.artist}`}
        ></img>
        <h1 className="flex flex-row justify-start gap-1">
          <span className="font-bold">{songs.data.song}</span>
          by
          <span className="font-bold">{songs.data.artist}</span>
        </h1>
        {songs.data.album != null && (
          <div className="">
            on <span className="font-bold">{songs.data.album}</span>
          </div>
        )}
        {songs.data.release != null && (
          <div className="">
            released on <span className="font-bold">{songs.data.release}</span>
          </div>
        )}
      </header>
      <div className="fixed -z-10 h-[100vh] w-[100vw]">
        <img
          className="ml-[-10%] h-[120%] max-h-[120%] w-[120%] max-w-[120%] object-cover opacity-30 blur-xl"
          src={songs.data.albumArt}
          alt={`Cover art for ${songs.data.album} by ${songs.data.artist}`}
        ></img>
      </div>
      <div className="relative flex flex-row flex-nowrap items-start justify-center py-32">
        <main className="text-2xl font-bold text-black [&_p]:py-2">
          <Markdown>{songs.content}</Markdown>
        </main>
      </div>
    </div>
  );
};

export default SongPage;
