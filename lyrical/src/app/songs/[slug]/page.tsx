import Markdown from "markdown-to-jsx";
import "../../../styles/globals.css";
import getSongContent from "../../../components/getSongContent";
import getSongMetadata from "../../../components/getSongMetadata";

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
      <header className="t-0 fixed flex h-20 w-[1100px] flex-col items-start justify-center bg-slate-100/75 py-4 px-4 backdrop-blur-sm">
        <h1>
          {songs.data.artist} - {songs.data.song}
        </h1>
        {songs.data.album != null && (
          <div className="text-l font-semibold">{songs.data.album}</div>
        )}
        {songs.data.release != null && (
          <div className="text-l font-semibold">{songs.data.release}</div>
        )}
      </header>
      <div className="flex flex-row flex-nowrap justify-start gap-10 py-4 px-4 pt-20">
        <aside className="flex w-[15rem] min-w-[15rem] flex-col">
          <div>
            <img
              className="min-w-full"
              src={songs.data.albumArt}
              alt={`Cover art for ${songs.data.album} by ${songs.data.artist}`}
            ></img>
          </div>
        </aside>
        <main className="max-w-2xl">
          <Markdown>{songs.content}</Markdown>
        </main>
      </div>
    </div>
  );
};

export default SongPage;
