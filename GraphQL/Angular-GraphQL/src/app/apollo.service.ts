import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    this.createApolloClient();
  }

  private createApolloClient(): void {
    this.apollo.create({
      link: this.httpLink.create({
        uri: 'http://localhost:4000/graphql', // Replace with your local GraphQL endpoint
      }),
      cache: new InMemoryCache(),
    });
  }
}
