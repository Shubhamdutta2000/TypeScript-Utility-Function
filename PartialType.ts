// Partial Type:
// It is intended to make every attribute of a type optional.
// As a result, developers won't be required to supply values for every property of a type.

interface Product {
  id: number;
  name: string;
  description: string;
  uniqueSlug: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

type ProductCreateParam = Partial<Product>;
