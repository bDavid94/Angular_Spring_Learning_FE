import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public customers: any[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    console.log('home')
    this.getCustomers();
  }

  private getCustomers(): void {
    this.homeService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }
}
