import React, { useEffect, useState } from "react";
import { useFeaturedData } from "./context/productContext";
import Card from "./components/Card";
import { HiViewGrid } from 'react-icons/hi'
import { HiBars4 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import List from "./components/List";

const Products = () => {
  const { filterProducts, gridView, dispatch, isLoading, sorting } = useFeaturedData();

  return <>
    <div className="products">
      <div className="products__filter">
        <div className="aside">
          <input type="text" placeholder="Search" />
          <div className="category">
            <h4 className="page__heading3">Category</h4>
            <ul className="products__category">
              <li className="category__lists">
                <Link className="category__link active">All</Link>
              </li>
              <li className="category__lists">
                <Link className="category__link">Mobile</Link>
              </li>
              <li className="category__lists">
                <Link className="category__link">Accessories</Link>
              </li>
              <li className="category__lists">
                <Link className="category__link">Laptops</Link>
              </li>
              <li className="category__lists">
                <Link className="category__link">Watches</Link>
              </li>
            </ul>
          </div>
          <div className="companies">
            <h4 className="page__heading3">Companies</h4>
            <select name="companies" >
              <option value="all">All</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
            </select>
          </div>
          <div className="colors">
            <h4 className="page__heading3">Colors</h4>
            <span>something</span>
          </div>
          <div className="price">
            <h4 className="page__heading3">Price</h4>
            <input type="range" name="price" min={0} max={100} />
          </div>
          <button className="btn">Clear Filters</button>
        </div>

      </div>
      <div className="products__lists">
        <div className="products__sort">
          <div className="list-view">
            <HiViewGrid size={20} onClick={() => dispatch({ type: "CHANGELAYOUTTYPE", payload: true })} />
            <HiBars4 size={20} onClick={() => dispatch({ type: "CHANGELAYOUTTYPE", payload: false })} />
          </div>
          <div className="products__total">
            {filterProducts.length} Total Products
          </div>
          <div className="sort__dropdown">
            <select name="sorting" id="sorting" onClick={sorting}>
              <option value="recommended">Sort</option>
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
              <option value="atoz">Sort (A to Z)</option>
              <option value="ztoa">Sort (Z to A)</option>
            </select>
          </div>
        </div>
        {!isLoading ? <div className="products__items">
          {gridView ?
            <div className="featured-products">
              <div className="featured__desc">
                <div className="featured__desc-items">
                  {filterProducts.map((item, index) => {
                    return <Card key={index} id={item.id} image={item.image} name={item.name} price={item.price} category={item.category} />
                  })}
                </div>
              </div>
            </div> :
            filterProducts.map((item, index) => {
              return <List key={index} id={item.id} image={item.image} name={item.name} price={item.price} category={item.category} description={item.description} />
            })}

        </div> : <div className="center"><img className='loading__gif' src="/images/gif.gif" alt="loading" />
        </div>}


      </div>
    </div>

  </>;
};

export default Products;
