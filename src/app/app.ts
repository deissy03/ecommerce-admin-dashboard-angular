import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements AfterViewInit {

  isLoggedIn = false;

  currentSection = 'Inicio';

  chart:any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  login(){
    this.isLoggedIn = true;

    setTimeout(() => {
      this.createChart();
    },100);
  }

  changeSection(section:string){

    this.currentSection = section;

    if(section === 'Inicio'){

      setTimeout(() => {
        this.createChart();
      },100);

    }

  }

  createChart(){

    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;

    if(!ctx) return;

    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart(ctx,{
      type:'bar',
      data:{
        labels:['Ene','Feb','Mar','Abr','May','Jun'],
        datasets:[{
          label:'Ventas',
          data:[1200,1900,3000,2500,4200,5000]
        }]
      }
    });

  }

}