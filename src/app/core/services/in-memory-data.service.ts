
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  categories = [
    {
      id: "others",
      name: "Others"
    },
    {
      id: "breakfast",
      name: "Breakfast"
    },
    {
      id: "salads",
      name: "Salads"
    },
    {
      id: "soups",
      name: "Soups"
    },
    {
      id: "chicken_courses",
      name: "Chicken Courses"
    },
    {
      id: "drinks",
      name: "Drinks"
    }
  ];

  createDb() {
    return {
      locations: this.generateLocations(10),
      products: this.generateProducts(100),
      categories: this.categories,
      wishlist: [],
      cart: []
    };
  }

  generateLocations(n: number) {
    let locations = [];
    for (let id = 1; id <= n; id++) {

      locations.push(
        {
          id: id,
          name: faker.address.city(),
          address: faker.address.streetAddress(true),
          status: faker.random.arrayElement(["Open", "Closed"]),
          storeHours: faker.random.arrayElement(["Store Hours", "10:00-18:00"]),
        }
      );
    }
    return locations
  }

  generateProducts(n: number) {
    let products = [];

    for (let id = 1; id <= n; id++) {
      let reviews = [];
      for (let i = 0; i < faker.datatype.number(20); i++) {
        reviews.push({
          userName: faker.name.findName(),
          message: faker.lorem.words(faker.datatype.number(20))
        })
      }
      products.push(
        {
          id: id,
          category: faker.random.arrayElement(this.categories),
          name: faker.commerce.productName(),
          description: faker.lorem.words(10),
          image: faker.random.image(),
          status: faker.random.arrayElement(["available", "not_available", "coming_soon"]),
          reviews: reviews,
          rating: {
            value: faker.datatype.float({ min: 1, max: 5 }),
            total: 5
          },
          price: {
            value: faker.commerce.price(1, 20),
            oldValue: faker.commerce.price(1, 20),
            currency: 'USD'//faker.finance.currencyCode()
          }
        },
      );
    }
    return products
  }

  genId(cart:any[]): number {
    return cart.length > 0 ? Math.max(...cart.map(item => item.id)) + 1 : 11;
  }
}