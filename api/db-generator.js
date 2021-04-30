const faker = require( 'faker' );
const fs = require( "fs" );

const categories = [
    {
        "id": "others",
        "name": "Others"
    },
    {
        "id": "breakfast",
        "name": "Breakfast"
    },
    {
        "id": "salads",
        "name": "Salads"
    },
    {
        "id": "soups",
        "name": "Soups"
    },
    {
        "id": "chicken_courses",
        "name": "Chicken Courses"
    },
    {
        "id": "drinks",
        "name": "Drinks"
    }
];

function generateLocations( n ) {
    let locations = [];
    for ( let id = 1; id <= n; id++ ) {

        locations.push(
            {
                "id": id,
                "name": faker.address.city(),
                "address": faker.address.streetAddress( true ),
                "status": faker.random.arrayElement( ["Open", "Closed"] ),
                "storeHours": faker.random.arrayElement( ["Store Hours", "10:00-18:00"] ),
            }
        );
    }
    return locations
}

function generateProducts( n ) {
    let products = [];

    for ( let id = 1; id <= n; id++ ) {
        let reviews = [];
        for ( let i = 0; i < faker.datatype.number( 20 ); i++ ) {
            reviews.push( {
                userName: faker.name.findName(),
                message: faker.lorem.words( faker.datatype.number( 20 ) )
            } )
        }
        products.push(
            {
                "id": id,
                "category": faker.random.arrayElement( categories ),
                "name": faker.commerce.productName(),
                "description": faker.commerce.productDescription(),
                "image": faker.random.image(),
                "status": faker.random.arrayElement( ["available", "not_available", "coming_soon"] ),
                "reviews": reviews,
                "rating": {
                    "value": faker.datatype.float( { min: 1, max: 5 } ),
                    "total": 5
                },
                "price": {
                    "value": faker.commerce.price( 1, 20 ),
                    "oldValue": faker.commerce.price( 1, 20 ),
                    "currency": faker.finance.currencyCode()
                }
            },
        );
    }

    return products
}


let data = {
    locations: generateLocations( 10 ),
    products: generateProducts( 100 ),
    categories: categories,
    wishlist: [],
    cart: []
}

fs.writeFileSync( './api/db.json', JSON.stringify( data, null, '\t' ) );