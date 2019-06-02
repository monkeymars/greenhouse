#
![alt text](https://i.imgur.com/Q9tp6nN.png)

# Homepage
When the application is running, the first page that the user will see is the Homepage. The homepage has 2 container components (smart components), which is headers and catalogs component.

 The **Header component** displays Logo, Cart, and Logged in user. While catalog displays a list of product data taken from MOCK_DATA.JSON

In the **Catalog component**, the user can do the "Add to cart" action to add product item to the "Cart". The cart icon will display list of product and total on popup if we click on it. There is a "Checkout" button inside to proceed to the place order process.

# Cartpage
On a **Cartpage**, the app will show list of product from cart. User can remove product from that list with clicking on trash icon.

Users cannot place an order before logging in using Google Auth. (place order button disabled). After the user is authenticated using Goolge Auth, the Place Order button will be active and the user can proceed order.


# App Structure
    .
    ├── public                  # public directory
    │   ├── MOCK_DATA.json      # JSON data for sample product
    │   ├── index.html          # index.html wrapper
    │   └── ...
    ├── src
    │   ├── app                 # app directory hold pages component
    │   ├── actions             # user & cart actions
    │   └── reducers            # user & cart reducers
    │   └── hooks               # custom hook
    │   ├── containers          # smart component: Header.js, Catalog.js, Product.js
    │   ├── components          # presentational component
    │   └── index.js            # react app entry point
    │   └── store.js            # redux store
    │   └── ...
    └── ...