import Items from './Items.js'
import Item from './Item.js';
import Address from './address.js'
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus.js";
import './items.css'
const ItemsContainer = () => {
  return (
    <div className="grid-container   gap-4  px-8 md:px-[7.5rem] py-16">
      <div className=' item1'><Items Links={PRODUCTS} title="PRODUCTS" /></div>
      <div className='item2'> <Item Links={RESOURCES} title="CONTACT" /></div>
      <div className='item3'> <Item Links={COMPANY} title="USEFUL LINKS" /></div>
      <div className='item4'><Address Links={SUPPORT} title="ADDRESS" /></div>
    </div>
  );
};

export default ItemsContainer;
