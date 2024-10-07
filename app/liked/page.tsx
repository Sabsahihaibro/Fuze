import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <div
      className="
      border-l-[1px]
    border-neutral-800
    bg-[#090909]
      w-full
      h-full
      overflow-hidden
      overflow-y-auto
    "
    >
      <Header>
        <div
          className="
          mt-20
        "
        >
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div
              className="
                relative
                h-32
                w-32
                lg:h-44
                lg:w-44
            "
            >
              <Image
                fill
                src="/images/liked.png"
                alt="Liked Image"
                className="object-cover"
              />
            </div>
            <div
              className="
              flex
              flex-col
              gap-y-2
              mt-4
              md:mt-0
            "
            >
              <p
                className="
                hidden
                md:block
                text-sm
                font-semibold
              "
              >
                Playlist
              </p>
              <p
                className="
                text-white
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-bold
              "
              >
                Liked Songs
              </p>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default Liked;
