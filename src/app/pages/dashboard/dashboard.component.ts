import { Component, AfterViewInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createPaymentsChart();
    this.createDebtChart();
  }

  createPaymentsChart() {
    const ctx = document.getElementById('paymentsChart') as HTMLCanvasElement;

    const gradient = ctx.getContext('2d')!.createLinearGradient(0, 0, 0, 300);

    gradient.addColorStop(0, '#2b8252');
    gradient.addColorStop(1, '#3354e9');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [
          {
            data: [45, 60, 50, 70, 80, 65],
            backgroundColor: gradient,
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      },

      options: {
        responsive: true,

        plugins: {
          legend: { display: false },
        },

        scales: {
          x: {
            grid: { display: false },
          },

          y: {
            grid: {
              color: '#f3f4f6',
            },
            ticks: {
              stepSize: 20,
            },
          },
        },
      },
    });
  }

  createDebtChart() {
    new Chart('debtChart', {
      type: 'doughnut',

      data: {
        labels: ['Al día', 'Morosos'],

        datasets: [
          {
            data: [85, 15],

            backgroundColor: ['#2b8252', '#ec6b6b'],

            borderWidth: 1,
          },
        ],
      },

      options: {
        cutout: '70%',

        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });
  }
}
