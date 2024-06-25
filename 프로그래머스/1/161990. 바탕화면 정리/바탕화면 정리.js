function solution(wallpaper) {
  let lux,
    luy,
    rdx,
    rdy = 0;
  let temp_luy = [];
  let temp_rdy = [];

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      lux = i;
      break;
    }
  }

  for (let i = wallpaper.length - 1; i >= 0; i--) {
    if (wallpaper[i].includes("#")) {
      rdx = i + 1;
      break;
    }
  }

  for (let i = 0; i < wallpaper.length; i++) {
    temp_luy.push(wallpaper[i].indexOf("#"));
    temp_rdy.push(wallpaper[i].lastIndexOf("#"));
  }

  temp_luy = temp_luy.sort((a, b) => a - b);
  temp_rdy = temp_rdy.sort((a, b) => a - b);
  for (let i = 0; i < temp_luy.length; i++) {
    if (temp_luy[i] >= 0) {
      luy = temp_luy[i];
      break;
    }
  }

  for (let i = temp_rdy.length - 1; i >= 0; i--) {
    if (temp_rdy[i] >= 0) {
      rdy = temp_rdy[i] + 1;
      break;
    }
  }
  return [lux, luy, rdx, rdy];
}