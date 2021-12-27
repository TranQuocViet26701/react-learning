import React from 'react';
import AlbumList from './components/AlbumList';

const albums = [
  {
    idx: 1,
    title: 'Rap Việt kết hợp',
    thumnailUrl:
      'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/0/8/a/808ad7f3fb53c013953b8e4ae8ebf48e.jpg',
  },
  {
    idx: 2,
    title: 'Bài hát K-Pop nổi bật 2021',
    thumnailUrl:
      'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/2/a/8/0/2a801a0fb6dc411d51ca6f6b4c080a1e.jpg',
  },
  {
    idx: 3,
    title: 'Chill Hits',
    thumnailUrl:
      'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/0/d/5/b/0d5bcab43cfb3a95d4220756257768b0.jpg',
  },
  {
    idx: 4,
    title: 'Nhạc Hay Play Ngay ',
    thumnailUrl:
      'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/d/f/6/3df66f16807461f6465c970fcf5f37cf.jpg',
  },
];

function AlbumFeature() {
  return (
    <div>
      <AlbumList albums={albums} />
    </div>
  );
}

export default AlbumFeature;
