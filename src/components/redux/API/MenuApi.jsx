import axios from "axios";
const URL = `https://foodapp-server-z7a5.onrender.com/api/menu/`;

// get all Pizzas

const GetAllItems = async () => {
  const response = await axios.get(`${URL}/allitems`);
  return response.data;
};

// get featured items

const GetFeaturedItems = async () => {
  const response = await axios.get(`${URL}/items?featured=${true}`);
  return response.data;
};

// get item by id

const GetItemById = async (id) => {
  const response = await axios.get(`${URL}/singleitem/${id}`);
  return response.data;
};

// get indvidual item

const GetItemByType = async (input) => {
  const response = await axios.get(`${URL}/items?type=${input}`);
  return response.data;
};

// get releated items

const GetReleateditems = async (input) => {
  const response = await axios.get(`${URL}/items?type=${input}`);
  return response.data;
};

const MENUAPI = {
  GetAllItems,
  GetFeaturedItems,
  GetItemByType,
  GetItemById,
  GetReleateditems,
};

export default MENUAPI;
