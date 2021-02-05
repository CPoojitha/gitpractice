module.export={
    INSERT_PRODUCT:`INSERT INTO PRODUCTS VALUES(?,?,?)`,
    FETCH_PRODUCT:`SELECT * FROM PRODUCTS`,
    UPDATE_PRODUCCT:`UPDATE products SET price=? WHERE productsId=?`,
    DELETE_product:`DELETE FROM products where productsId=?`,
   // SEARCH_BY_NAME:`SEARCH FROM PRODUCTS where producsname=?`
}