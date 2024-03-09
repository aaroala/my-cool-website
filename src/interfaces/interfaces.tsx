export interface PixelArt {
  id: number;
  username: string;
  creation_date: Date;
  pixel_canvas_256: string;
  artist_id: number;
  likes: number;
}


export interface VoxelArt {
  id: number;
  username: string;
  data: string;
  previewData: string
  likes: number;
  creationDate: string;
  timeStamp: {
    _seconds: number;
    _nanoseconds: number;
  };
  createdSecondsAgo: number;
}