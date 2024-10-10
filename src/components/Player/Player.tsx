import { Flex, IconButton, Input, Image, Text, Stack } from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";
import { ComponentPropsWithoutRef, useRef, useState } from "react";
import { IoIosPause } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { BsVolumeDownFill } from "react-icons/bs";

interface IPlayer {
  currentSong?: { title: string; src: string; url?: string; artist?: string };
  songIndex?: number;
  songCount?: number;
  onNext?: () => void;
  onPrev?: () => void;
}

interface ProgressCSSProps extends React.CSSProperties {
  "--progress-width": number;
  "--buffered-width": number;
}
interface IAudioProgressBar extends ComponentPropsWithoutRef<"input"> {
  duration: number;
  currentProgress: number;
  buffered: number;
}

interface IVolumenInput {
  volume: number;
  onVolumeChange: (volume: number) => void;
}
const AudioProgressBar = (props: IAudioProgressBar) => {
  const { duration, currentProgress, buffered, ...rest } = props;

  const progressBarWidth = isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration;
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;

  const progressStyles: ProgressCSSProps = {
    "--progress-width": progressBarWidth,
    "--buffered-width": bufferedWidth,
  };

  return (
    <Flex>
      <Input
        type="range"
        name="progress"
        style={progressStyles}
        min={0}
        max={duration}
        value={currentProgress}
        {...rest}
        size="lg"
        width="300px"
        border="none"
        className={`progress-bar absolute inset-0 w-full m-0 h-full bg-transparent appearance-none cursor-pointer dark:bg-gray-700 group-hover:h-2 transition-all accent-amber-600 hover:accent-amber-600 before:absolute before:inset-0 before:h-full before:w-full   after:absolute after:h-full after:w-full `}
      />
    </Flex>
  );
};

const VolumeInput = ({ volume, onVolumeChange }: IVolumenInput) => {
  return (
    <Flex>
      <IconButton
        icon={<BsVolumeDownFill />}
        aria-label="volumen icon"
        background="transparent"
        fontSize="20px"
      />
      <Input
        aria-label="volume"
        name="volume"
        type="range"
        min={0}
        step={0.05}
        max={1}
        value={volume}
        className="w-[80px] m-0 h-2 rounded-full accent-amber-600 bg-gray-700 appearance-none cursor-pointer"
        onChange={(event) => {
          onVolumeChange(Number(event.target.value));
        }}
        flex="0 1 125px"
        border="none"
      />
    </Flex>
  );
};

export const Player = (props: IPlayer) => {
  const { currentSong, songCount = 0, songIndex, onNext, onPrev } = props;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currrentProgress, setCurrrentProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(0.2);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  return (
    <Flex flexDirection="row" width="100%" justifyContent="space-between">
      <audio
        ref={audioRef}
        preload="metadata"
        onDurationChange={(event) => setDuration(event.currentTarget.duration)}
        onCanPlay={() => {
          console.log("carlos play");
          setIsReady(true);
        }}
        onTimeUpdate={(e) => {
          setCurrrentProgress(e.currentTarget.currentTime);
          handleBufferProgress(e);
        }}
        onProgress={handleBufferProgress}
      >
        <source type="audio/mpeg" src={currentSong?.src} />
      </audio>
      <Flex alignItems="center" gap="12px">
        <Image
          src={currentSong?.url}
          alt="image album"
          width="96px"
          height="96px"
        />
        <Flex flexDirection="column">
          <Text fontWeight="bold" fontSize="20px">
            {currentSong?.title ?? "Select a Song"}
          </Text>
          <Text>{currentSong?.artist}</Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Stack spacing="24px" display="flex" flexDirection="row">
          <IconButton
            onClick={onPrev}
            disabled={songIndex === 0}
            aria-label="go to previous"
            icon={<MdSkipPrevious fontSize="30px" />}
            isRound={true}
            variant="solid"
          />
          <IconButton
            disabled={!isReady}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
            size="lg"
            icon={
              !isReady && currentSong ? (
                <SpinnerIcon />
              ) : isPlaying ? (
                <IoIosPause />
              ) : (
                <FaPlay />
              )
            }
          />
          <IconButton
            rounded="2xl"
            onClick={onNext}
            disabled={songIndex === songCount - 1}
            aria-label="go to next"
            icon={<MdSkipNext fontSize="30px" />}
            isRound={true}
            variant="solid"
          />
        </Stack>
        <AudioProgressBar
          duration={duration}
          currentProgress={currrentProgress}
          buffered={buffered}
          onChange={(e) => {
            if (!audioRef.current) return;

            audioRef.current.currentTime = e.currentTarget.valueAsNumber;

            setCurrrentProgress(e.currentTarget.valueAsNumber);
          }}
        />
      </Flex>
      <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
    </Flex>
  );
};
