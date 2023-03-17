import React from "react";
import { useFeaturedData } from "./context/productContext";
import Card from "./components/Card";
import { HiViewGrid } from 'react-icons/hi'
import { HiBars4 } from "react-icons/hi2";
import List from "./components/List";
import Colorsavailable from "./components/Colorsavailable";
import { useState } from "react";
import FormatPrice from "./components/FormatPrice";

const Products = () => {
  const { filterProducts, gridView, dispatch, isLoading, sorting, products, clearFilter, searchFilter: { searchText, category, price, maxprice, minprice }, searchSort } = useFeaturedData();

  const getUniqueData = (data, property) => {
    let newVal = data.map((item) => {
      return item[property]
    })
    if (property === "colors") {
      newVal = newVal.flat()
    }
    return newVal = ["all", ...new Set(newVal)]
  }

  const categoryOnlyData = getUniqueData(products, "category")
  const companyOnlyData = getUniqueData(products, "company")
  const colorsOnlyData = getUniqueData(products, "colors")


  return <>
    <div className="products">
      <div className="products__filter">
        <div className="aside">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search" name="searchText" value={searchText} onChange={searchSort} />
          </form>
          <div className="category">
            <h4 className="page__heading3">Category</h4>
            <ul className="products__category">
              {categoryOnlyData.map((item, index) => {
                return <li className="category__lists" key={index} >
                  <button className={category === item ? "category__link active" : "category__link"} type="button" name="category" value={item} onClick={searchSort}>{item}</button>
                </li>
              })}

            </ul>
          </div>
          <div className="companies">
            <h4 className="page__heading3">Companies</h4>

            <select name="company" onClick={searchSort}>
              {companyOnlyData.map((item, index) => {
                return <option key={index} value={item}>{item.slice(0, 1).toUpperCase() + item.slice(1)}</option>
              })}
            </select>
          </div>
          <div className="colors">
            <h4 className="page__heading3">Colors</h4>
            <span>
              <div className="select__choice">
                <div className="your__choice">
                  {colorsOnlyData.map((item, index) => {
                    if (item === "all") {
                      return <button type="button" key={index} value="all" name="colors" className="button3" onClick={searchSort}>All</button>
                    }
                    return <button type="button" key={index} value={item} name="colors" className="available__color" style={{ backgroundColor: item }} onClick={searchSort}>
                    </button>
                  })}
                </div>
              </div>
            </span>
          </div>
          <div className="price">
            <h4 className="page__heading3">Price</h4>
            <p><FormatPrice price={price} /></p>
            <input type="range" name="price" min={minprice} max={maxprice} value={price} onChange={searchSort}
            />
          </div>
          <button className="btn" onClick={clearFilter}>Clear Filters</button>
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
