/* eslint-disable no-unused-vars */
import {
  Stack,
  TextField,
  Typography,
  Button,
  Menu,
  MenuItem,
  Select,
  Grid,
  FormControl,
  Radio,
  Paper,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect, useState } from "react";
import { Cart } from "../../cart/components/Cart";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddressAsync,
  selectAddressStatus,
  selectAddresses,
} from "../../address/AddressSlice";
import { selectLoggedInUser } from "../../auth/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  createOrderAsync,
  selectCurrentOrder,
  selectOrderStatus,
} from "../../order/OrderSlice";
import { resetCartByUserIdAsync, selectCartItems } from "../../cart/CartSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SHIPPING, TAXES } from "../../../constants";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import { axiosi } from "../../../config/axios";

export const Checkout = () => {
  const status = "";
  const addresses = useSelector(selectAddresses);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectLoggedInUser);
  const addressStatus = useSelector(selectAddressStatus);
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const orderStatus = useSelector(selectOrderStatus);
  const currentOrder = useSelector(selectCurrentOrder);
  const orderTotal = cartItems.reduce(
    (acc, item) => item.product.price * item.quantity + acc,
    0
  );
  const theme = useTheme();
  const is900 = useMediaQuery(theme.breakpoints.down(900));
  const is480 = useMediaQuery(theme.breakpoints.down(480));

 // useEffect(() => {
//   const handlePayment = async () => {
//     if (currentOrder && currentOrder?._id) {
//       if (selectedPaymentMethod === "CARD") {
//         await cardPayment(currentOrder);
//       } else if (selectedPaymentMethod === "COD") {
//         dispatch(resetCartByUserIdAsync(loggedInUser?._id));
//         navigate(`/order-success/${currentOrder?._id}`);
//       }
//     }
//   };

//   handlePayment();
// }, [currentOrder, dispatch, navigate, selectedPaymentMethod, loggedInUser?._id]);

  const handleAddAddress = async (data) => {
    const address = { ...data, user: loggedInUser._id };
    const resultAction = await dispatch(addAddressAsync(address));

    if (addAddressAsync.fulfilled.match(resultAction)) {
      reset();
    } else {
      alert("Error adding your address");
    }
  };

  // const cardPayment = async (order) => {
  //   // const stripe = await loadStripe(
  //   //   "pk_test_51QjOA0GSJadpZs7UjNwfZavVBqN4AH2FDxM5TopwdWTLcUwPxOap3jBhxHiK1RjVpIG5llYMkLGMbODqHOhW7SAV00xMAlfftf"
  //   // );
  //   const stripe = await loadStripe(
  //     "pk_live_51QjOA0GSJadpZs7U3LiJV58oh3a8CMiUrGazsBZyfPY4ZUJZXFpQYtmAOdYsTQKRsTVb2sdjHeGBz7nFe8txEWsp00cTrsXdB1"
  //   );

  //   try {
  //     const response = await axiosi.post(
  //       "/checkout/create-checkout-session",
  //       {
  //         products: cartItems,
  //         order,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // handle response if the payment is successfull
  //     if (response.status === 200) {
  //       const sessionId = response.data.id;

  //       //redirecting to Stripe checkout
  //       const { error } = await stripe.redirectToCheckout({ sessionId });

  //       if (error) {
  //         console.error("Error redirecting to stripe checkout", error);
  //         alert("Payment failed. Please try again later");
  //       }
  //     } else {
  //       console.error("Error inititated payment", response.data);
  //       alert("Payment initiation  failed. Please try again later");
  //     }
  //   } catch (err) {
  //     console.error("Error with the card payment", err);
  //     alert("An error occurred. Please try again later");
  //   }
  // };

  useEffect(() => {
    if (addressStatus === "fulfilled") {
      reset();
    } else if (addressStatus === "rejected") {
      alert("Error adding your address");
    }
  }, [addressStatus, reset]);

  // const handleCreateOrder = async () => {
  //   const order = {
  //     user: loggedInUser._id,
  //     items: cartItems.map((item) => ({
  //       product: item.product._id, 
  //       quantity: item.quantity,
  //       size: item.size,
  //     })),
  //     address: selectedAddress,
  //     paymentMode: selectedPaymentMethod,
  //     total: orderTotal + SHIPPING + TAXES,
  //   };
  //   if (selectedPaymentMethod === "COD") {
  //     //dispatching the action to create and get order id
  //     const createdOrder = await dispatch(createOrderAsync(order)).unwrap();
  //     console.log(
  //       createdOrder,
  //       "this is the order id getting from the order id in the reduc"
  //     );

  //     if (createdOrder?._id) {
  //       navigate(`/order-success/${createdOrder._id}`);
  //     }

  //     //creating order directly
  //     // dispatch(createOrderAsync(order));
  //   } else if (selectedPaymentMethod === "CARD") {
  //     dispatch(createOrderAsync(order));
  //   }
  // };


const handleCreateOrder = async () => {
  const orderData = {
    user: loggedInUser._id,
    items: cartItems.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      size: item.size,
    })),
    address: selectedAddress,
    paymentMode: selectedPaymentMethod,
    total: orderTotal + SHIPPING + TAXES,
  };

  if (selectedPaymentMethod === "COD") {
    // For COD, create order immediately
    const createdOrder = await dispatch(createOrderAsync(orderData)).unwrap();
    if (createdOrder?._id) {
      dispatch(resetCartByUserIdAsync(loggedInUser?._id));
      navigate(`/order-success/${createdOrder._id}`);
    }
  } else if (selectedPaymentMethod === "CARD") {
    // For card payment, redirect to Stripe first
    try {
      const stripe = await loadStripe(
        "pk_live_51QjOA0GSJadpZs7U3LiJV58oh3a8CMiUrGazsBZyfPY4ZUJZXFpQYtmAOdYsTQKRsTVb2sdjHeGBz7nFe8txEWsp00cTrsXdB1"
      );

      const response = await axiosi.post(
        "/checkout/create-checkout-session",
        {
          products: cartItems,
          orderData, // Send order data, not an actual order
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const sessionId = response.data.id;
        const { error } = await stripe.redirectToCheckout({ sessionId });
        
        if (error) {
          console.error("Error redirecting to stripe checkout", error);
          alert("Payment failed. Please try again later");
        }
      } else {
        console.error("Error initiated payment", response.data);
        alert("Payment initiation failed. Please try again later");
      }
    } catch (err) {
      console.error("Error with the card payment", err);
      alert("An error occurred. Please try again later");
    }
  }
};


  useEffect(() => {
    if (addresses.length > 0) {
      setSelectedAddress(addresses[0]);
    }
  },[addresses]);

  return (
    <Stack
      flexDirection={"row"}
      p={2}
      rowGap={10}
      justifyContent={"center"}
      flexWrap={"wrap"}
      mb={"5rem"}
      mt={2}
      columnGap={4}
      alignItems={"flex-start"}
    >
      {/* left box */}
      <Stack rowGap={4}>
        {/* heading */}
        <Stack
          flexDirection={"row"}
          columnGap={is480 ? 0.3 : 1}
          alignItems={"center"}
        >
          <motion.div whileHover={{ x: -5 }}>
            <IconButton component={Link} to={"/cart"}>
              <ArrowBackIcon fontSize={is480 ? "medium" : "large"} />
            </IconButton>
          </motion.div>
          <Typography variant="h4">Shipping Information</Typography>
        </Stack>

        {/* address form */}
        <Stack
          component={"form"}
          noValidate
          rowGap={2}
          onSubmit={handleSubmit(handleAddAddress)}
        >
          <Stack>
            <Typography gutterBottom>Type</Typography>
            <TextField
              placeholder="Eg. Home, Buisness"
              {...register("type", { required: true })}
            />
          </Stack>

          <Stack>
            <Typography gutterBottom>Street</Typography>
            <TextField {...register("street", { required: true })} />
          </Stack>

          <Stack>
            <Typography gutterBottom>Country</Typography>
            <TextField {...register("country", { required: true })} />
          </Stack>

          <Stack>
            <Typography gutterBottom>Phone Number</Typography>
            <TextField
              type="number"
              {...register("phoneNumber", { required: true })}
            />
          </Stack>

          <Stack flexDirection={"row"}>
            <Stack width={"100%"}>
              <Typography gutterBottom>City</Typography>
              <TextField {...register("city", { required: true })} />
            </Stack>
            <Stack width={"100%"}>
              <Typography gutterBottom>State</Typography>
              <TextField {...register("state", { required: true })} />
            </Stack>
            <Stack width={"100%"}>
              <Typography gutterBottom>Postal Code</Typography>
              <TextField
                type="number"
                {...register("postalCode", { required: true })}
              />
            </Stack>
          </Stack>

          <Stack flexDirection={"row"} alignSelf={"flex-end"} columnGap={1}>
            <LoadingButton
              loading={status === "pending"}
              type="submit"
              variant="contained"
            >
              add
            </LoadingButton>
            <Button color="error" variant="outlined" onClick={() => reset()}>
              Reset
            </Button>
          </Stack>
        </Stack>

        {/* existing address */}
        <Stack rowGap={3}>
          <Stack>
            <Typography variant="h6">Address</Typography>
            <Typography variant="body2" color={"text.secondary"}>
              Choose from existing Addresses
            </Typography>
          </Stack>

          <Grid
            container
            gap={2}
            width={is900 ? "auto" : "50rem"}
            justifyContent={"flex-start"}
            alignContent={"flex-start"}
          >
            {addresses.map((address, index) => (
              <FormControl item>
                <Stack
                  key={address._id}
                  p={is480 ? 2 : 2}
                  width={is480 ? "100%" : "20rem"}
                  height={is480 ? "auto" : "15rem"}
                  rowGap={2}
                  component={is480 ? Paper : Paper}
                  elevation={1}
                >
                  <Stack flexDirection={"row"} alignItems={"center"}>
                    <Radio
                      checked={selectedAddress === address}
                      name="addressRadioGroup"
                      value={selectedAddress}
                      onChange={(e) => setSelectedAddress(addresses[index])}
                    />
                    <Typography>{address.type}</Typography>
                  </Stack>

                  {/* details */}
                  <Stack>
                    <Typography>{address.street}</Typography>
                    <Typography>
                      {address.state}, {address.city}, {address.country},{" "}
                      {address.postalCode}
                    </Typography>
                    <Typography>{address.phoneNumber}</Typography>
                  </Stack>
                </Stack>
              </FormControl>
            ))}
          </Grid>
        </Stack>

        {/* payment methods */}
        <Stack rowGap={3}>
          <Stack>
            <Typography variant="h6">Payment Methods</Typography>
            <Typography variant="body2" color={"text.secondary"}>
              Please select a payment method
            </Typography>
          </Stack>

          <Stack rowGap={2}>
            <Stack
              flexDirection={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Radio
                value={selectedPaymentMethod}
                name="paymentMethod"
                checked={selectedPaymentMethod === "COD"}
                onChange={() => setSelectedPaymentMethod("COD")}
              />
              <Typography>Cash</Typography>
            </Stack>

            <Stack
              flexDirection={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Radio
                value={selectedPaymentMethod}
                name="paymentMethod"
                checked={selectedPaymentMethod === "CARD"}
                onChange={() => setSelectedPaymentMethod("CARD")}
              />
              <Typography>Card</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* right box */}
      <Stack
        width={is900 ? "100%" : "auto"}
        alignItems={is900 ? "flex-start" : ""}
      >
        <Typography variant="h4">Order summary</Typography>
        <Cart checkout={true} />
        <LoadingButton
          fullWidth
          loading={orderStatus === "pending"}
          variant="contained"
          size="large"
          onClick={handleCreateOrder}
        >
          Pay and order
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

// onClick={makePayment}
