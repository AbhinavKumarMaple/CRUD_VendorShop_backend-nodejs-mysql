const { userController } = require("../controller");
const { userAuthenticate } = require("../middleware");
const { adminAuthenticate } = require("../middleware");

const routes = require("express").Router();

//register vendorShop User
routes.post("/admin/register", userController.registerAdminUser);
routes.put(
  "/admin/:id",
  // userAuthenticate.verifyToken,
  userController.updateAdminUser
);
routes.post(
  "/admin/vendor_shop",
  adminAuthenticate.verifyToken,
  userController.createVendorShop
);

routes.post("/admin/login", userController.adminlogin);

routes.get(
  "/shopuser/:id",
  adminAuthenticate.verifyToken,
  userController.getUserInfo
);
routes.get(
  "/shopusers",
  adminAuthenticate.verifyToken,
  userController.getAllUsersWithVendorShopRole
);

routes.get("/shops", userController.getAllVendorShops);
routes.post("/login", userController.loginVendorShopEmployee);
routes.post("/register", userController.registerVendorShopEmployee);
routes.post(
  "/registerCustomer",
  userAuthenticate.verifyToken,
  userController.registerCustomer
);
routes.get(
  "/customers",
  userAuthenticate.verifyToken,
  userController.getCustomerShopsByVendorShopRoleId
);

// routes.get("/:id", userAuthenticate.verifyToken, userController.getUser);

routes.put(
  "/:id",
  userAuthenticate.verifyToken,
  userController.updateVendorShopEmployee
);

// // Vendor Shop routes
// routes.post(
//   "/vendor-shops",
//   userAuthenticate.verifyToken,
//   userController.createVendorShop
// );

// routes.get(
//   "/vendor-shops/:id",
//   userAuthenticate.verifyToken,
//   userController.getVendorShop
// );

// routes.get(
//   "/vendor-shops",
//   userAuthenticate.verifyToken,
//   userController.getAllVendorShops
// );

// routes.put(
//   "/vendor-shops/:id",
//   userAuthenticate.verifyToken,
//   userController.updateVendorShop
// );

// // Order routes
// routes.post(
//   "/orders",
//   userAuthenticate.verifyToken,
//   userController.createOrder
// );
// routes.get(
//   "/orders/:id",
//   userAuthenticate.verifyToken,
//   userController.getOrder
// );
// routes.get(
//   "/orders",
//   userAuthenticate.verifyToken,
//   userController.getAllOrders
// );

// // Order Item routes
// routes.post(
//   "/order-items",
//   userAuthenticate.verifyToken,
//   userController.createOrderItem
// );
// routes.get(
//   "/order-items/:id",
//   userAuthenticate.verifyToken,
//   userController.getOrderItems
// );

// // Transaction routes
// routes.post(
//   "/transactions",
//   userAuthenticate.verifyToken,
//   userController.createTransaction
// );
// routes.get(
//   "/transactions/:id",
//   userAuthenticate.verifyToken,
//   userController.getTransaction
// );
// routes.get(
//   "/transactions",
//   userAuthenticate.verifyToken,
//   userController.getAllTransactions
// );

module.exports = routes;
