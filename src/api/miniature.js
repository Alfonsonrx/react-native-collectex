import { API_URL } from '@env';
import axios from "axios";

export async function getMiniaturesApi(cat, subCat) {
  try {
    const url = `${API_URL}/api/v1/miniatures/category/${cat}/${subCat}/?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}

export const getCategoriesApi = async (limit = 20,offset = 0) => {
  try {
    const url = `${API_URL}/api/v1/categories`;
    const response = await axios(url);
    const data = await Promise.all(
      response.data?.map((e) => axios.get(`${API_URL}/api/v1/categories/${e.id}/`))
    );
    const categoriesApi = [];
    data?.forEach((e) => categoriesApi.push(e.data));

    const categories = categoriesApi?.map((e) => (e));

    return categories;
  } catch (error) {
    throw error;
  }
};

export async function getSubCategoriesDetailsById(id) {
  try {
    const url = `${API_URL}/api/v1/subcategories/${id}/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}
export async function getMiniatureDetailsByUrlId(id) {
  try {
    const url = `${API_URL}/api/v1/miniatures/${id}/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}