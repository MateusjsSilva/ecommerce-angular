export class Product 
{
    id?: string;
    product: string;
    description: string;
    photo: string;
    price: number;

    constructor(id?: string, product: string = "", description: string = "", photo: string = "", price: number = 0) 
    {
        this.id = id;
        this.product = product;
        this.description = description;
        this.photo = photo;
        this.price = price;
    }
}