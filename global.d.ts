declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.less' {
  const content: any;
  export default content;
}
declare module '*.ogg' {
  const content: any;
  export default content;
}
interface MediaTrackConstraints {
  mandatory: any
}

interface Window {
  webkitAudioContext: AudioContext;
}

type ValueOf<T> = T[keyof T];