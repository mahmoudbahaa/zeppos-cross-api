
declare module 'zeppos-cross-api/media' {

  namespace media {
    interface IMediaInfo {
      title: string | undefined;
      artist: string | undefined;
      duration: number;
    }

    enum ICodec {
      OPUS
    }

    enum ISource {
      FILE
    }

    enum IPlayerEvent {
      PREPARE,
      COMPLETE
    }

    enum IPlayerState {
      IDLE,
      INITIALIZED,
      PREPARING,
      PREPARED,
      STARTED,
      PAUSED,
      STOPPED
    }

    class Base {
      start(): void;
      stop(): void;
    }

    class Recorder extends Base {
      codec = ICodec;
      setFormat(codec: ICodec, param: { target_file: string; }): void;
      addEventListener(callback: Function): void;
    }

    class Player extends Base {
      source = ISource;
      event = IPlayerEvent;
      state = IPlayerState;

      prepare(): void;
      pause(): void;
      resume(): void;
      release(): void;

      getVolume(): number;
      setVolume(vol: number): boolean;
      getTitle(): string | undefined;
      getArtist(): string | undefined;
      getMediaInfo(): IMediaInfo;
      getStatus(): IPlayerState;
      getDuration(): number;
      setSource(source: ISource, { file: string }): void;

      addEventListener(event: IPlayerEvent, callback: Function): void;
    }
  }

  enum id {
    PLAYER,
    RECORDER
  }

  function create(i: id.PLAYER): media.Player;
  function create(i: id.RECORDER): media.Recorder;
}
