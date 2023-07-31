import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import { Input } from "antd";
const { TextArea } = Input;
import styles from "@/styles/Product.module.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToProduct } from "@/redux/product/productSlice";

const ProductDetailPage = ({ product }) => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch(
        `https://tech-world-server-psi.vercel.app/api/v1/products/${product?.data._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Comment posted successfully");
      } else {
        alert("Comment posted failed");
      }
    } catch (error) {
      console.error("Error while updating product:", error);
    }
  };

  useEffect(() => {
    const categoriesData = sessionStorage.getItem("categoriesData");
    const categoriesObject = JSON.parse(categoriesData);

    dispatch(addToProduct(categoriesObject));
  });

  return (
    <>
      <div className="w-full lg:w-3/4 mx-auto p-6">
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className="flex flex-col-reverse lg:flex-row"
        >
          <Col className="gutter-row" sm={24} lg={12}>
            <div>
              {" "}
              <h1 style={{ fontSize: "25px" }}>{product?.data.productName}</h1>
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>
              <p
                style={{
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <span>Category:</span> <span></span>{" "}
                <span>{product?.data.category}</span>
              </p>
              <p
                style={{
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <span>Status:</span> <span></span>{" "}
                <span>{product?.data.status}</span>
              </p>
              <p
                style={{
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <span>Price:</span> <span></span>{" "}
                <span>{product?.data.price}</span>
              </p>
              <p
                style={{
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Feature:{" "}
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {product?.data?.feature?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p
                style={{
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <span>Rating:</span> <span></span>{" "}
                <span>{product?.data.avgRating}</span> <span></span>
                <span>/</span> <span></span> <span>5</span> <span></span>
              </p>
              <p
                style={{
                  fontSize: "14px",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {product?.data.description}
              </p>
            </div>
          </Col>
          <Col className="gutter-row mx-auto" sm={24} lg={12}>
            <div>
              {" "}
              <Image
                src={product?.data.img}
                width={500}
                height={500}
                layout="responsive"
                alt="product image"
              />
            </div>
          </Col>
        </Row>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "75%",
            margin: "40px auto",
          }}
        >
          <Input.TextArea
            {...register("reviews")}
            placeholder="Write your comment"
            autoSize={{
              minRows: 2,
              maxRows: 6,
            }}
            style={{ border: "2px solid gray" }}
            onChange={(e) => setValue("reviews", e.target.value)}
          />
          <div
            style={{
              margin: "5px 0",
            }}
          ></div>
          <div className={styles.rate}>
            <input
              type="radio"
              id="star5"
              name="rate"
              value="5"
              {...register("rating")}
            />
            <label for="star5" title="text">
              5 stars
            </label>
            <input
              type="radio"
              id="star4"
              name="rate"
              value="4"
              {...register("rating")}
            />
            <label for="star4" title="text">
              4 stars
            </label>
            <input
              type="radio"
              id="star3"
              name="rate"
              value="3"
              {...register("rating")}
            />
            <label for="star3" title="text">
              3 stars
            </label>
            <input
              type="radio"
              id="star2"
              name="rate"
              value="2"
              {...register("rating")}
            />
            <label for="star2" title="text">
              2 stars
            </label>
            <input
              type="radio"
              id="star1"
              name="rate"
              value="1"
              {...register("rating")}
            />
            <label for="star1" title="text">
              1 star
            </label>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              style={{
                margin: "10px 0px",
                width: "100%",
                padding: "10px 10px",
                backgroundColor: "blue",
                color: "white",
                border: "1px solid blue",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </form>
      <div style={{ padding: "0px 20px" }}>
        {product?.data?.reviews?.map((review, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <p
              style={{
                backgroundColor: "lightcyan",
                padding: "10px 10px",
                borderRadius: "10px",
                margin: "10px 2px",
                width: "50%",
              }}
            >
              {review}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://tech-world-server-psi.vercel.app/api/v1/products"
  );
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product?._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `https://tech-world-server-psi.vercel.app/api/v1/products/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
