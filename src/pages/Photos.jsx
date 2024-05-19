const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "1ddol8rgUH8", width: 1080, height: 800 },
  { id: "b_79nOqf95I", width: 1080, height: 1620 },
  { id: "2gDwlIim3Uw", width: 1080, height: 720 },
  { id: "JT-RUtO2sfs", width: 1080, height: 721 },
  { id: "ajqDp29Pz7M", width: 1080, height: 1620 },
  { id: "cHjAxnJk_wQ", width: 1080, height: 607 },
  { id: "79NjpXDOJU8", width: 1080, height: 608 },
  { id: "gvCLog5Yv00", width: 1080, height: 720 },
  { id: "RiOhen_OLPs", width: 1080, height: 1549 },
  { id: "bJsjkdUs_BQ", width: 1080, height: 720 },
  { id: "BeHRkALwXIw", width: 1080, height: 694 },
  { id: "FZXhH0ktRvE", width: 1080, height: 1620 },
  { id: "JNoJ-eisUuY", width: 1080, height: 720 },
  { id: "7KIuwfOvAIs", width: 1080, height: 1440 },
  { id: "fU2KSE2REfw", width: 1080, height: 1620 },
  { id: "aQV-nqJpq7g", width: 1080, height: 810 },
  { id: "R6CdzrNPih4", width: 1080, height: 610 },
  { id: "1HsiFH7oqBU", width: 1080, height: 200 },
  { id: "uOYak90r4L0", width: 1080, height: 810 },
  { id: "jrw48Cuz7NM", width: 1080, height: 720 },
  { id: "L9n5zK6j3bQ", width: 1080, height: 1440 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height * breakpoint) / photo.width);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
