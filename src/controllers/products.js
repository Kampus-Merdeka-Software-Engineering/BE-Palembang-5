import { productList } from "../constants/products.js";

export const getAll = (_, response) => {
  try {
    response.json({
      data: productList,
      message: "Sukses menerima data",
    });
  } catch (error) {
    response.status(500);
    response.json({
      message: "Server Internal sedang Error!",
    });
  }
};

export const getById = (request, response) => {
  try {
    const { id } = request.params;
    const product = productList[Number(id) - 1];
    if (!product) {
      response.status(404);
      response.json({
        message: "Data tidak ditemukan",
      });
    }

    response.json({
      data: product,
      message: "Sukses menerima data",
    });
  } catch (error) {
    response.status(500);
    response.json({
      message: "Server Internal sedang Error!",
    });
  }
};

export const post = () => {};
