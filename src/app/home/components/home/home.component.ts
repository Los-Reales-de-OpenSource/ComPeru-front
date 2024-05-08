import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../public/components/header/header.component";
import { FooterComponent } from "../../../public/components/footer/footer.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { ProductService } from "../../services/product.service";
import { Product } from "../../model/product.entity";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatCardModule, MatButtonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products: Array<Product> = [];

  constructor(private productsService: ProductService) {
  }

  private getAllProducts() {
    this.productsService.getAll().subscribe((response: any) => {
      this.products=response
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
