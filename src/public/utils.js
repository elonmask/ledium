const formProducts = (id, data) => {
  const dataObj = JSON.parse(data);
  const arrayDataCategories = dataObj.data.categories.category;
  const categories = arrayDataCategories.find(item => item.id === id)
  const arrayData = dataObj.data.offers.offer;
  const products = arrayData.filter(item => item.categoryId == id);
  
  return [categories, products];
}

const formProduct = (id, data) => {
  const dataObj = JSON.parse(data);
  const arrayData = dataObj.data.offers.offer;
  const product = arrayData.find(item => item.id == id);

  return product;
}

const formCategories = (data) => {
  const dataArr = JSON.parse(data);
  const categories = dataArr.data.categories.category;

  return categories;
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
