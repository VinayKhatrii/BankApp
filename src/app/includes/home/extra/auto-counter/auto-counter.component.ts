import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-counter',
  templateUrl: './auto-counter.component.html',
  styleUrls: ['./auto-counter.component.css']
})
export class AutoCounterComponent implements OnInit{
  counters = [
    { currentCount: 0, desiredNumber: 10, label: "Satisfied Customers", counterAfter:"k +" },
    { currentCount: 0, desiredNumber: 50, label: "Branches", counterAfter:"+"},
    { currentCount: 0, desiredNumber: 200, label: "Collaborations", counterAfter:"+"}
  ];
  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  interval:number = 3000;
  ngOnInit() {
    this.startCounter(this.counters[0].desiredNumber, 0);
    this.startCounter(this.counters[1].desiredNumber, 1);
    this.startCounter(this.counters[2].desiredNumber, 2);
  }
  async startCounter(desiredNumber: number , counterIndex: number) {
    var i = 0;
    var timer = this.interval/desiredNumber;
    while(i<desiredNumber){
      this.counters[counterIndex].currentCount+=1;
      i++;
      await this.sleep(timer);
    }
  }
}
