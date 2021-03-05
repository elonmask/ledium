const formProducts = (id, data) => {
  const dataObj = JSON.parse(data);
  const array = dataObj.data.offers.offer;
  const newArr = array.filter(item => item.categoryId == id);
  
  return newArr;
}

const formProduct = (id, data) => {
  const dataObj = JSON.parse(data);
  const array = dataObj.data.offers.offer;
  const product = array.find(item => item.id == id);
  return product;
}

const formCategories = (data) => {
  const dataArr = JSON.parse(data);
  const array = dataArr.data.categories.category;
  return array;
}

export const getProducts = (categoryId) => {
  const data = sessionStorage.getItem("data");

  if( data == null && typeof data === 'undefined') {
    return false;
  } else {
    const products = formProducts(categoryId, data);
    return products;
  }
}

export const getProduct = (id) => {
  const data = sessionStorage.getItem("data");

  if( data == null || typeof data === 'undefined') {
    return false;
  } else {
    const product = formProduct(id, data);
    return product;
  }
}

export const getCategories = () => {
  const data = sessionStorage.getItem("data");

  if( data == null || typeof data === 'undefined') {
    return false;
  } else {
    const categories = formCategories(data);
    return categories;
  }
}