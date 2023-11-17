import { useEffect, useState, useContext } from "react";
import { shoes } from "../constants";
import { Button, ShoeCard } from "../components";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { PiPercentLight } from "react-icons/pi";
import { bigShoe1 } from "../assets/images";
import Tooltip from "../components/Tooltip";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SizePill from "../components/SizePill";
import { useParams } from "react-router";
import { products } from "../constants";
import ProductPageShoeSlider from "../components/ProductPageShoeSlider";
import { Context } from "../context/context";

export interface singleProductType {
  id: number;
  imgURLs: string[];
  productName: string;
  price: string;
  sizes: string[];
  description: string;
  rating?: number;
}
const ProductPage = () => {
  const { toggleCart, cartItems } = useContext(Context);
  const { id: productId } = useParams();
  const [bigShoeImg, setBigShoeImg] = useState<string>(bigShoe1);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [singleProduct, setSingleProduct] = useState<singleProductType>();

  useEffect(() => {
    if (typeof productId !== "undefined") {
      const productFound = products.find(
        (product) => product.id === parseInt(productId)
      );
      if (!productFound) return;
      setSingleProduct(productFound);
      setBigShoeImg(productFound.imgURLs[0]);
    } else {
    }
  }, [productId]);

  const handleSelected = (size: string) => {
    if (size === selectedSize) return;
    setSelectedSize(size);
  };

  return (
    <>
      <section className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x mt-10 pt-28">
          <div className="relative flex-1 flex justify-center items-center xl:min-h-[400px] max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img
              src={bigShoeImg}
              alt="shoe colletion"
              width={610}
              height={502}
              className="object-contain relative z-10"
            />
          </div>
          <div className="flex gap-2 my-2">
            {singleProduct?.imgURLs.map((image) => (
              <div key={image}>
                <ProductPageShoeSlider
                  imgURL={image}
                  changeBigShoeImage={() => setBigShoeImg(image)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-2">
          <div className="mb-2 flex">
            <Tooltip
              icon={PiPercentLight}
              label="Discount"
              borderColor="orange"
              textColor="orange"
            />
            <Tooltip
              icon={MdOutlineDeliveryDining}
              label="Fast delivery"
              borderColor="green"
              textColor="green"
            />
          </div>
          <h2 className="text-4xl leading-10">{singleProduct?.productName}</h2>
          <hr className="border border-t-[0.5px] mt-2 border-slate-200 w-[90%]" />
          <div className="mt-2 items-center flex justify-start gap-2.5">
            <img
              src="/src/assets/icons/star.svg"
              alt="rating icon"
              width="18"
              height="18"
            />
            <p className="font-montserrat text-sm leading-normal text-slate-gray">
              ({singleProduct?.rating}) -
              <i className="text-xs">128 people rated this</i>
            </p>
          </div>

          <h6 className="text-3xl font-semibold">$125</h6>

          <div className="flex gap-2 mt-4">
            <p>sizes: </p>
            {singleProduct?.sizes.map((size) => (
              <SizePill
                key={size}
                size={size}
                isSelected={selectedSize === size}
                handleSelected={handleSelected}
              />
            ))}
          </div>
          <p className=" text-slate-400 text-sm leading-relaxed mt-4 font-montserrat">
            {singleProduct?.description}
          </p>
          <Button
            icon={AiOutlineShoppingCart}
            className="mt-4"
            label={"add to cart"}
            textColor={"text-white"}
            fullWidth={true}
            onClick={() => toggleCart(productId)}
          />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
