import { defineQuery } from "next-sanity";

export const allproducts= defineQuery(`
    *[_type == "product"]{
    _id,
    name,
    discription,
    price,
    discountpercentage,
    percentagewithoutdiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageurl": image.asset -> url
    }
    `)
    export const forproducts= defineQuery(`
        *[_type == "product][0...3]{
        _id,
        name,
        discription,
        price,
        discountpercentage,
        percentagewithoutdiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageurl": image.asset -> url
        }
        `)