import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  cache: new InMemoryCache()
});

export async function getDistributor({ lat, lng }) {
  const queryDistributor = gql`
    query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
      pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
        __typename
        id
        status
        tradingName
        officialName
        deliveryTypes {
          __typename
          pocDeliveryTypeId
          deliveryTypeId
          price
          title
          subtitle
          active
        }
        paymentMethods {
          __typename
          pocPaymentMethodId
          paymentMethodId
          active
          title
          subtitle
        }
        pocWorkDay {
          __typename
          weekDay
          active
          workingInterval {
            __typename
            openingTime
            closingTime
          }
        }
        address {
          __typename
          address1
          address2
          number
          city
          province
          zip
          coordinates
        }
        phone {
          __typename
          phoneNumber
        }
      }
    }
  `;

  const date = new Date();

  const response = await client.query({
    query: queryDistributor,
    variables: {
      algorithm: "NEAREST",
      lat: lat,
      long: lng,
      now: date.toISOString()
    }
  });

  return response;
}

export async function getCategories() {
  const queryCategories = gql`
    query allCategoriesSearch {
      allCategory{
        title
        id
      }
    }
  `;

  const response = await client.query({
    query: queryCategories,
  });

  return response;
}


export async function getProducts({ distributorId, categoryId }) {
  const queryProducts = gql`
    query poc($id: ID!, $categoryId: Int, $search: String){
      poc(id: $id) {
        id
        products(categoryId: $categoryId, search: $search) {
          id
          title
          rgb
          images {
            url
          }
          productVariants {
            availableDate
            productVariantId
            price
            inventoryItemId
            shortDescription
            title
            published
            volume
            volumeUnit
            description
            subtitle
            components {
              id
              productVariantId
              productVariant {
                id
                title
                description
                shortDescription
              }
            }
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: queryProducts,
    variables: {
      id: distributorId || null,
      categoryId: categoryId || null
    }
  });

  return response;
}