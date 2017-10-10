export class Weave {
 public name: string;
 public imagePath: string;
 public description: string;
 public tutorial: string;
 public ringGauge: number;
 public ringSize: number;
 public aspectRatio: number;


 constructor(name: string, imagePath: string, desc: string, tutorial: string, ringGauge: number, ringSize: number, AR: number) {
   this.name = name;
   this.imagePath = imagePath;
   this.description = desc;
   this.tutorial = tutorial;
   this.ringGauge = ringGauge; // need to translate gauge to diameter in inches
   this.ringSize = ringSize;
   this.aspectRatio = this.ringSize/this.ringGauge; //needs to use translation rather than just the gauge
 }
} 

// 0.005(92**((36-18)/39))