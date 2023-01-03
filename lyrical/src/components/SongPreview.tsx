import Link from "next/link";
import { SongMetadata } from "./SongMetadata";

const SongPreview = (props: SongMetadata) => {
  return (
    <div>
      <Link href={`/songs/${props.slug}`}>
        <h2>{props.song}</h2>
      </Link>
      <p>{props.artist}</p>
    </div>
  );
};

export default SongPreview;
