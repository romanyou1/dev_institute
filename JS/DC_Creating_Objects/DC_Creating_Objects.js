//////////////////////////////////////////////////////
// 1. Create the Video class

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; // in seconds
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

//////////////////////////////////////////////////////
// 2. Instantiate a Video and call watch()

const video1 = new Video("JavaScript Basics", "John", 300);
video1.watch();
// John watched all 300 seconds of JavaScript Basics!


//////////////////////////////////////////////////////
// 3. Instantiate a second Video

const video2 = new Video("OOP in JS", "Sarah", 450);
video2.watch();
// Sarah watched all 450 seconds of OOP in JS!


//////////////////////////////////////////////////////
// Bonus Part

// Best structure: an array of objects (each object holds video data)

const videoData = [
  { title: "HTML Crash Course", uploader: "Mike", time: 600 },
  { title: "CSS Flexbox Guide", uploader: "Anna", time: 720 },
  { title: "React Tutorial", uploader: "David", time: 1200 },
  { title: "Node.js Explained", uploader: "Chris", time: 900 },
  { title: "MongoDB Basics", uploader: "Laura", time: 800 }
];

// Loop through array and instantiate Video objects

videoData.forEach(data => {
  const video = new Video(data.title, data.uploader, data.time);
  video.watch();
});