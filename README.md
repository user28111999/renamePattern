# renamePattern

Bandcamp like renaming pattern for audio files

## Example files

```txt
01 Track Name.mp3
02 Untitled.mp3
03 The Fool.mp3
04 Pressure.mp3
```

to

```txt
A Great Band! - A Great Band! EP - 01 Track Name.mp3
A Great Band! - A Great Band! EP - 02 Untitled.mp3
A Great Band! - A Great Band! EP - 03 The Fool.mp3
A Great Band! - A Great Band! EP - 04 Pressure.mp3
```

## Requirements

[ffmpeg](https://ffmpeg.org/) installed on your system (for ffprobe)

**Only supports audio files!**

## Usage

```bash
~ node renamePattern.js ./Album "Artist Name" "Artist Album"
```

- <code>./Album</code> corresponds to the folder where the audio files are. (See example files)
- <code>"Artist Name"</code> corresponds to the artist name. (See example files)
- <code>"Artist Album"</code> corresponds to the album's name. (See example files)

<br />

If the argument `-c` is provided, everything will be in caps such as the following example:

```bash
~ node renamePattern.js ./Album "Artist Name" "Artist Album" -c
```
```txt
A GREAT BAND! - A GREAT BAND! EP - 01 TRACK NAME.mp3
A GREAT BAND! - A GREAT BAND! EP - 02 UNTITLED.mp3
A GREAT BAND! - A GREAT BAND! EP - 03 THE FOOL.mp3
A GREAT BAND! - A GREAT BAND! EP - 04 PRESSURE.mp3
```
